"use client";

import { useRouter } from "next/navigation";
import { Note } from "@/types/note";
import css from "./NotePreview.module.css";

interface NotePreviewClientProps {
  note: Note;
}

export default function NotePreviewClient({ note }: NotePreviewClientProps) {
  const router = useRouter();

  const handleClose = () => router.back();

  return (
    <div className={css.overlay} onClick={handleClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={css.closeBtn}
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>

        <header className={css.header}>
          <span className={css.tag}>{note.tag}</span>
          <h2 className={css.title}>{note.title}</h2>
        </header>

        <div className={css.content}>
          <p>{note.content}</p>
        </div>

        <footer className={css.footer}>
          <button className={css.actionBtn} onClick={handleClose}>
            Зрозуміло
          </button>
        </footer>
      </div>
    </div>
  );
}
