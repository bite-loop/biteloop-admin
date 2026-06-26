import { NextResponse } from "next/server";
import { verifyAuth } from "@/helper/auth-helper/verify";
import { adminDb } from "@/lib/firebase/admin";

export async function GET() {
  try {
    const user = await verifyAuth();

    console.log("Decoded User:", user);

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log("UID:", user.uid);

    const userDoc = await adminDb
      .collection("admins")
      .doc(user.uid)
      .get();

    console.log("Document Exists:", userDoc.exists);

    if (!userDoc.exists) {
      return NextResponse.json(
        {
          error: "User not found",
          uid: user.uid,
        },
        { status: 404 }
      );
    }

    console.log("Firestore Data:", userDoc.data());

    return NextResponse.json({
      id: userDoc.id,
      ...userDoc.data(),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}