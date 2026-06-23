import { dashboardStats } from "@/lib/data/dashboard";

export class DashboardService {
  static async getStats() {
    return dashboardStats;
  }
}