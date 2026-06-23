export interface Order {
  id: string;

  customerName: string;
  customerEmail: string;

  restaurantId: string;
  restaurantName: string;

  totalAmount: number;

  status:
    | "PENDING"
    | "CONFIRMED"
    | "PREPARING"
    | "READY_FOR_PICKUP"
    | "PICKED_UP"
    | "IN_TRANSIT"
    | "DELIVERED"
    | "CANCELLED";

  paymentStatus:
    | "PENDING"
    | "PAID"
    | "FAILED"
    | "REFUNDED";

  createdAt: string;
}