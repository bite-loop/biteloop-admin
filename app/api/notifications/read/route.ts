import { NextResponse } from "next/server";
import { verifyAuth } from "@/helper/auth-helper/verify";
import { adminDb } from "@/lib/firebase/admin";

export async function POST(request: Request) {
  try {
    const user = await verifyAuth();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { notificationId } = await request.json();

    if (!notificationId) {
      return NextResponse.json(
        { error: "Notification ID is required" },
        { status: 400 }
      );
    }

    await adminDb
      .collection("notifications")
      .doc(notificationId)
      .update({
        read: true,
      });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to update notification",
      },
      {
        status: 500,
      }
    );
  }
}