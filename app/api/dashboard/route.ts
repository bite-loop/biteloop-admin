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

    // Total Restaurants
    const restaurantsSnapshot =
      await adminDb
        .collection("restaurants")
        .get();

    const totalRestaurants =
      restaurantsSnapshot.size;

      // Total Users
const usersSnapshot =
  await adminDb
    .collection("users")
    .get();

const totalUsers =
  usersSnapshot.size;

  // Recent Activity
const activitySnapshot = await adminDb
  .collection("notifications")
  .orderBy("createdAt", "desc")
  .limit(5)
  .get();

const recentActivity = activitySnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));

return NextResponse.json({
  success: true,

  stats: {
    totalUsers,
    totalRestaurants,
  },

  recentActivity,
});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load dashboard",
      },
      {
        status: 500,
      }
    );
  }
}