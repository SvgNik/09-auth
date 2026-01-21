"use client";

import Link from "next/link";
import { useAuthStore } from "@/lib/store/authStore";
import css from "./Header.module.css";

export default function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header className={css.header}>
      <Link href="/" className={css.headerLink}>
        NoteHub
      </Link>

      <nav>
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link href="/" className={css.navigationLink}>
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li className={css.navigationItem}>
                <Link href="/notes" className={css.navigationLink}>
                  My Notes
                </Link>
              </li>
              <li className={css.navigationItem}>
                <Link href="/profile" className={css.navigationLink}>
                  Profile
                </Link>
              </li>
              <li className={css.navigationItem}>
                <button onClick={logout} className={css.logoutBtn}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className={css.navigationItem}>
                <Link href="/sign-in" className={css.navigationLink}>
                  Login
                </Link>
              </li>
              <li className={css.navigationItem}>
                <Link href="/sign-up" className={css.navigationLink}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
