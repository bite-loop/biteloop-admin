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
  reason,
  description,
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

    review: {
      status,
      comment: comment || "",
      reason: reason || "",
      description: description || "",
      reviewedBy: admin.uid,
      reviewedAt: new Date(),
    },
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

  reason: reason || "",
  description: description || "",
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