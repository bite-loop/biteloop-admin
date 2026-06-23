import { orders } from "@/lib/data/orders";

export class OrderService {
  static async getOrders() {
    return orders;
  }

  static async getOrderById(id: string) {
    return orders.find(
      (order) => order.id === id
    );
  }
}