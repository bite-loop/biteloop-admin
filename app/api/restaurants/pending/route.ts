import { NextResponse } from "next/server";
import { verifyAuth } from "@/helper/auth-helper/verify";
import { adminDb } from "@/lib/firebase/admin";

export async function GET() {
  try {
    // Verify admin session
    const user = await verifyAuth();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Fetch all pending restaurants
    const snapshot = await adminDb
      .collection("restaurants")
      .where("onboardingStatus", "==", "pending_approval")
      .orderBy("submittedAt", "desc")
      .get();

    const restaurants = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({
      success: true,
      count: restaurants.length,
      restaurants,
    });
  } catch (error) {
    console.error("Error fetching pending restaurants:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch pending restaurants",
      },
      {
        status: 500,
      }
    );
  }
}