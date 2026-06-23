export interface AdminUser {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  status: "ACTIVE" | "SUSPENDED" | "BANNED";

  totalOrders: number;
  totalSpent: number;
  loyaltyPoints: number;

  createdAt: string;
}