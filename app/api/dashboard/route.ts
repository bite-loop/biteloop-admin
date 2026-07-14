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

    const restaurantsPromise =
      adminDb
        .collection("restaurants")
        .count()
        .get();

    const usersPromise =
      adminDb
        .collection("users")
        .count()
        .get();

    const notificationsPromise =
      adminDb
        .collection("notifications")
        .orderBy("createdAt", "desc")
        .limit(5)
        .get();

    const [
      restaurantsCount,
      usersCount,
      activitySnapshot,
    ] = await Promise.all([
      restaurantsPromise,
      usersPromise,
      notificationsPromise,
    ]);

    const totalRestaurants =
      restaurantsCount.data().count;

    const totalUsers =
      usersCount.data().count;

    const recentActivity =
      activitySnapshot.docs.map((doc) => ({
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