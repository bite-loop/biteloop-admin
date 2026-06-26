export interface AdminUser {
  id: string;
  uid: string;

  fullName: string;
  email: string;
  jobTitle: string;

  role: "SUPER_ADMIN" | "ADMIN";
  status: "ACTIVE" | "SUSPENDED" | "BANNED";

  createdAt: string;

  photoURL?: string;
}