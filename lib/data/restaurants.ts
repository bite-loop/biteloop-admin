import { Restaurant } from "@/types/restaurant";

export const restaurants: Restaurant[] = [
  {
    id: "RES001",
    name: "Burger House",
    ownerName: "Rahul Sharma",
    ownerEmail: "rahul@example.com",
    status: "APPROVED",
    rating: 4.7,
    totalOrders: 1250,
    totalRevenue: 485000,
    createdAt: "2026-01-20",
  },
  {
    id: "RES002",
    name: "Pizza Point",
    ownerName: "Aman Gupta",
    ownerEmail: "aman@example.com",
    status: "PENDING",
    rating: 4.3,
    totalOrders: 640,
    totalRevenue: 215000,
    createdAt: "2026-03-12",
  },
];