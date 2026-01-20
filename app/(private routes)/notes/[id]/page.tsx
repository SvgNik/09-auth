import { fetchNoteByIdServer } from "@/lib/api/serverApi";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function NoteDetailsPage({ params }: Props) {
  const noteId = params.id;
  const note = await fetchNoteByIdServer(noteId);

  if (!note) {
    return (
      <main>
        <h1>Note not found</h1>
        <Link href="/notes">Back to Notes</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "20px" }}>
      <Link
        href="/notes"
        style={{ marginBottom: "20px", display: "inline-block" }}
      >
        ← Back to list
      </Link>
      <article
        style={{ border: "1px solid #ccc", padding: "20px", marginTop: "10px" }}
      >
        <h1>{note.title}</h1>
        <div style={{ color: "#666", marginBottom: "10px" }}>
          Tag: {note.tag}
        </div>
        <p>{note.content}</p>
      </article>
    </main>
  );
}
