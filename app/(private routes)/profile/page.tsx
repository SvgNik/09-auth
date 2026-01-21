import { getMeServer } from "@/lib/api/serverApi";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import css from "./ProfilePage.module.css";

export default async function ProfilePage() {
  let user = null;

  try {
    user = await getMeServer();
  } catch (error) {
    console.error("Помилка завантаження профілю:", error);
  }

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Мій профіль</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Редагувати
          </Link>
        </div>

        <div className={css.avatarSection}>
          <div className={css.avatarWrapper}>
            <Image
              src={user.avatar || "/default-avatar.png"}
              alt={`${user.username}'s avatar`}
              width={120}
              height={120}
              className={css.avatar}
              priority
            />
          </div>
          <h2 className={css.userName}>{user.username}</h2>
          <span className={css.userStatus}>Користувач NoteHub</span>
        </div>

        <div className={css.profileInfo}>
          <div className={css.infoField}>
            <label>Email</label>
            <p>{user.email}</p>
          </div>
          <div className={css.infoField}>
            <label>Username</label>
            <p>{user.username}</p>
          </div>
        </div>

        <div className={css.footerActions}>
          <Link href="/notes" className={css.backLink}>
            ← До моїх нотаток
          </Link>
        </div>
      </div>
    </main>
  );
}
