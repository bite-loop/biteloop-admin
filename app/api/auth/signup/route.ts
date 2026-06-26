import { NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import { ADMIN_EMAILS } from "@/lib/constants/admin-emails";

export async function POST(request: Request) {
  try {
    const {
      fullName,
      email,
      jobTitle,
      password,
    } = await request.json();

    // Validation
    if (
      !fullName ||
      !email ||
      !jobTitle ||
      !password
    ) {
      return NextResponse.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Check whitelist
    if (!ADMIN_EMAILS.includes(email)) {
      return NextResponse.json(
        {
error:
  "This email is not authorized for BiteLoop Admin. Please contact the Super Administrator."
        },
        {
          status: 403,
        }
      );
    }

    // Check if email already exists
    try {
      await adminAuth.getUserByEmail(email);

      return NextResponse.json(
        {
          error:
            "This administrator account already exists. Please sign in instead.",
        },
        {
          status: 409,
        }
      );
    } catch {
      // User doesn't exist, continue
    }

    // Create Firebase user
    const user = await adminAuth.createUser({
      email,
      password,
      displayName: fullName,
    });

    // Save additional profile
    await adminDb
      .collection("admins")
      .doc(user.uid)
      .set({
        uid: user.uid,
        fullName,
        email,
        jobTitle,
        role: "SUPER_ADMIN",
        status: "ACTIVE",
        createdAt: new Date().toISOString(),
      });

    return NextResponse.json({
      success: true,
      message: "Admin account created successfully.",
    });
  } catch (error: any) {
    console.error("Signup error:", error);

    const errorMessages: Record<string, string> = {
      "auth/email-already-exists":
        "Email already exists.",
      "auth/invalid-password":
        "Password is too weak.",
      "auth/invalid-email":
        "Invalid email address.",
    };

    return NextResponse.json(
      {
        error:
          errorMessages[error.code] ||
          "Failed to create account.",
      },
      {
        status: 500,
      }
    );
  }
}