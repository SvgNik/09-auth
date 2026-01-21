"use client";

import Link from "next/link";
import { Note } from "@/types/note";
import css from "./NoteDetails.module.css";

interface NoteDetailsClientProps {
  note: Note;
}

export default function NoteDetailsClient({ note }: NoteDetailsClientProps) {
  return (
    <main className={css.mainContent}>
      <Link href="/notes" className={css.backLink}>
        ← Back to list
      </Link>

      <article className={css.noteCard}>
        <h1 className={css.title}>{note.title}</h1>
        <div className={css.tagBadge}>
          Tag: <span>{note.tag}</span>
        </div>
        <div className={css.divider} />
        <p className={css.content}>{note.content}</p>
      </article>
    </main>
  );
}
