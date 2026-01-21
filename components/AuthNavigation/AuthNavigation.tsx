"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import Link from "next/link";
import css from "./AuthNavigation.module.css";

export const AuthNavigation = () => {
  const router = useRouter();

  const { user, logout } = useAuthStore();

  const isAuthenticated = !!user;

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  };

  return (
    <nav className={css.nav}>
      {isAuthenticated ? (
        <div className={css.userMenu}>
          <span className={css.welcome}>Привіт, {user?.username}!</span>
          <Link href="/profile" className={css.link}>
            Профіль
          </Link>
          <button onClick={handleLogout} className={css.logoutBtn}>
            Вийти
          </button>
        </div>
      ) : (
        <div className={css.authLinks}>
          <Link href="/sign-in" className={css.link}>
            Увійти
          </Link>
          <Link href="/sign-up" className={css.link}>
            Реєстрація
          </Link>
        </div>
      )}
    </nav>
  );
};
