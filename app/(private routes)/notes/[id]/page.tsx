import { fetchNoteByIdServer } from "@/lib/api/serverApi";
import { notFound } from "next/navigation";
import NoteDetailsClient from "./NoteDetails.client";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteDetailsPage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteByIdServer(id);

  if (!note) {
    notFound();
  }

  return <NoteDetailsClient note={note} />;
}
