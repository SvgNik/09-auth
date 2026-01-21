"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuthStore } from "@/lib/store/authStore";
import { updateMe } from "@/lib/api/clientApi";
import { User } from "@/types/user";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import css from "./EditProfilePage.module.css";

interface EditProfileFormProps {
  user: User;
  setUser: (user: User) => void;
  router: AppRouterInstance;
}

export default function EditProfilePage() {
  const router = useRouter();
  const { user, setUser } = useAuthStore();

  if (!user) return <p className={css.loading}>Завантаження даних...</p>;

  return (
    <EditProfileForm
      user={user}
      setUser={setUser}
      router={router}
      key={user.email}
    />
  );
}

function EditProfileForm({ user, setUser, router }: EditProfileFormProps) {
  const [username, setUsername] = useState(user.username || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const updatedUser = await updateMe({ username });
      setUser(updatedUser);
      router.push("/profile");
      router.refresh();
    } catch (error) {
      console.error("Update failed", error);
      alert("Не вдалося оновити профіль.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Редагувати профіль</h1>

        <div className={css.avatarWrapper}>
          <Image
            src={user.avatar || "/default-avatar.png"}
            alt="Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>

        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.field}>
            <label htmlFor="username" className={css.label}>
              Ім&apos;я користувача
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={css.input}
              required
            />
          </div>

          <div className={css.field}>
            <label className={css.label}>Email</label>
            <p className={css.emailText}>{user.email}</p>
          </div>

          <div className={css.actions}>
            <button
              type="submit"
              className={css.saveButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Збереження..." : "Зберегти"}
            </button>
            <button
              type="button"
              className={css.cancelButton}
              onClick={() => router.back()}
              disabled={isSubmitting}
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
