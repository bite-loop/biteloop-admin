import { restaurants } from "@/lib/data/restaurants";

export class RestaurantService {
  static async getRestaurants() {
    return restaurants;
  }

  static async getRestaurantById(id: string) {
    return restaurants.find(
      (restaurant) => restaurant.id === id
    );
  }
}