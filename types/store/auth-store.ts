import { AdminUser } from "@/types/admin-user"

export interface AuthStore {
  user: AdminUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  fetchProfile: () => Promise<void>;
}