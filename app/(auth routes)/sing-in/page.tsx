"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import Link from "next/link";
import { AxiosError } from "axios";
import css from "./SignUpPage.module.css";

export default function SignUpPage() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      const user = await register(data);
      setUser(user);
      router.push("/profile");
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <main className={css.mainContent || "container"}>
      <form className={css.form || "form"} onSubmit={handleSubmit}>
        <h1>Sign up</h1>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </div>

        <button type="submit">Register</button>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </p>
      </form>
    </main>
  );
}
