"use client";

import NoteList from "@/components/NoteList/NoteList";
import { Note } from "@/types/note";
import Link from "next/link";

interface NotesClientProps {
  notes: Note[];
}

export default function NotesClient({ notes }: NotesClientProps) {
  return (
    <div>
      <Link
        href="/notes"
        style={{
          color: "#0d6efd",
          textDecoration: "none",
          marginBottom: "20px",
          display: "block",
        }}
      >
        ← До всіх нотаток
      </Link>

      {notes.length > 0 ? (
        <NoteList notes={notes} />
      ) : (
        <div style={{ textAlign: "center", padding: "50px", color: "#6c757d" }}>
          <h3>Нотаток не знайдено</h3>
          <p>Спробуйте змінити параметри фільтрації</p>
        </div>
      )}
    </div>
  );
}
