import { fetchNotesServer } from "@/lib/api/serverApi";
import Link from "next/link";

export default async function NotesPage() {
  const notes = await fetchNotesServer();

  return (
    <main style={{ padding: "20px" }}>
      <h1>My Notes</h1>
      <Link
        href="/notes/action/create"
        style={{ display: "block", margin: "10px 0", color: "blue" }}
      >
        + Create New Note
      </Link>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
