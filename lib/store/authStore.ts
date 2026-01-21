import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/user";
import { logout as apiLogout } from "@/lib/api/clientApi";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: async () => {
        try {
          await apiLogout();
        } catch (error) {
          console.error("Logout failed", error);
        } finally {
          set({ user: null });
        }
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
