import { users } from "@/lib/data/users";

export class UserService {
  static async getUsers() {
    return users;
  }

  static async getUserById(id: string) {
    return users.find((user) => user.id === id);
  }
}