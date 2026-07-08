import { NextResponse } from "next/server";
import { verifyAuth } from "@/helper/auth-helper/verify";
import { adminDb } from "@/lib/firebase/admin";

export async function GET() {
  try {
    const user = await verifyAuth();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const snapshot = await adminDb
      .collection("notifications")
      .orderBy("createdAt", "desc")
      .limit(20)
      .get();

    const notifications = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({
      success: true,
      notifications,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch notifications",
      },
      {
        status: 500,
      }
    );
  }
}