import { fetchNotes } from "@/lib/api/clientApi";
import Link from "next/link";
import css from "./NotesPage.module.css";

export default async function NotesPage() {
  const notes = await fetchNotes();

  return (
    <main className={css.container}>
      <h1 className={css.title}>My Notes</h1>
      <Link href="/notes/action/create" className={css.createButton}>
        + Create New Note
      </Link>

      <div className={css.notesGrid}>
        {notes && notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className={css.noteCard}>
              <Link href={`/notes/${note.id}`}>
                <h3>{note.title}</h3>
              </Link>
              <p>{note.tag}</p>
            </div>
          ))
        ) : (
          <p>No notes found. Start by creating one!</p>
        )}
      </div>
    </main>
  );
}
