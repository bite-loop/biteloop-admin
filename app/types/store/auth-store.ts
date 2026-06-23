import { AdminUser } from "@/app/types/admin-user"

export interface AuthStore {
  user: AdminUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;

  fetchProfile: () => Promise<void>;
}