import { NextResponse } from "next/server";
import { verifyAuth } from "@/helper/auth-helper/verify";
import { adminDb } from "@/lib/firebase/admin";

export async function POST(request: Request) {
  try {
    const admin = await verifyAuth();

    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const {
      restaurantId,
      status,
      comment,
    } = await request.json();

    if (!restaurantId || !status) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    // Update Restaurant

    await adminDb
      .collection("restaurants")
      .doc(restaurantId)
      .update({
        onboardingStatus: status,
        isActive: status === "approved",

        reviewedBy: admin.uid,
        reviewedAt: new Date(),
        reviewComment: comment || "",
      });

    // Update Notification

    const notificationSnapshot =
      await adminDb
        .collection("notifications")
        .where(
          "restaurantId",
          "==",
          restaurantId
        )
        .get();

    if (!notificationSnapshot.empty) {
      notificationSnapshot.docs.forEach(
        async (doc) => {
          await doc.ref.update({
            status,
            read: true,
          });
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        status === "approved"
          ? "Restaurant Approved"
          : "Restaurant Rejected",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to review restaurant",
      },
      {
        status: 500,
      }
    );
  }
}