import { NextResponse } from "next/server";
import { verifyAuth } from "@/helper/auth-helper/verify";
import { adminDb } from "@/lib/firebase/admin";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await verifyAuth();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    const doc = await adminDb
      .collection("restaurants")
      .doc(id)
      .get();

    if (!doc.exists) {
      return NextResponse.json(
        { error: "Restaurant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      restaurant: {
        id: doc.id,
        ...doc.data(),
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch restaurant",
      },
      {
        status: 500,
      }
    );
  }
}