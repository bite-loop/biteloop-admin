import { Order } from "@/types/order";

export const orders: Order[] = [
  {
    id: "ORD001",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    restaurantId: "RES001",
    restaurantName: "Burger House",
    totalAmount: 549,
    status: "DELIVERED",
    paymentStatus: "PAID",
    createdAt: "2026-06-22",
  },
  {
    id: "ORD002",
    customerName: "Emma Wilson",
    customerEmail: "emma@example.com",
    restaurantId: "RES002",
    restaurantName: "Pizza Point",
    totalAmount: 799,
    status: "PREPARING",
    paymentStatus: "PAID",
    createdAt: "2026-06-23",
  },
];