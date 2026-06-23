export interface Restaurant {
  id: string;

  name: string;
  ownerName: string;
  ownerEmail: string;

  status:
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "SUSPENDED";

  rating: number;

  totalOrders: number;
  totalRevenue: number;

  createdAt: string;
}