import Link from "next/link";
import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.container}>
      <section className={css.hero}>
        <div className={css.content}>
          <h1 className={css.title}>NoteHub</h1>
          <p className={css.subtitle}>
            Ваш ідеальний простір для нотаток. Організовуйте думки, плануйте
            завдання та нічого не забувайте.
          </p>

          <div className={css.actions}>
            <Link href="/sign-in" className={css.btnPrimary}>
              Увійти
            </Link>
            <Link href="/sign-up" className={css.btnSecondary}>
              Створити акаунт
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
