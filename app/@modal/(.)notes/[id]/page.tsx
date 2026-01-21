import { fetchNoteByIdServer } from "@/lib/api/serverApi";
import NotePreviewClient from "./NotePreview.client";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteByIdServer(id);

  if (!note) return null;

  return <NotePreviewClient note={note} />;
}
