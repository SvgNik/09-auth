import { fetchNotesServer } from "@/lib/api/serverApi";
import NotesClient from "./Notes.client";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;
  const filterTag = slug[0];

  const notes = await fetchNotesServer({ perPage: 50, ...{ tag: filterTag } });

  return (
    <main>
      <h1 style={{ marginBottom: "30px", fontSize: "24px" }}>
        Результати фільтрації:{" "}
        <span style={{ color: "#0d6efd" }}>{filterTag}</span>
      </h1>
      <NotesClient notes={notes} />
    </main>
  );
}
