import { AdminUser } from "@/types/user";

export const users: AdminUser[] = [
  {
    id: "USR001",
    email: "john@example.com",
    displayName: "John Doe",
    status: "ACTIVE",
    totalOrders: 45,
    totalSpent: 12890,
    loyaltyPoints: 520,
    createdAt: "2026-01-15",
  },
  {
    id: "USR002",
    email: "emma@example.com",
    displayName: "Emma Wilson",
    status: "SUSPENDED",
    totalOrders: 12,
    totalSpent: 3450,
    loyaltyPoints: 110,
    createdAt: "2026-02-10",
  },
];