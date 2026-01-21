"use client";

import { useQuery } from "@tanstack/react-query";
import { getNotes } from "@/lib/api/clientApi";
import { Note } from "@/types/note";
import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Link from "next/link";
import { useState } from "react";
import css from "./NotesPage.module.css";

export default function NotesPage() {
  const [search, setSearch] = useState("");

  const { data: notes = [], isLoading } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: () => getNotes(),
  });

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>Мої нотатки</h1>
        <Link href="/notes/action/create" className={css.createBtn}>
          + Нова нотатка
        </Link>
      </header>

      <div className={css.controls}>
        <SearchBox value={search} onChange={setSearch} />
      </div>

      {isLoading ? (
        <div className={css.loadingContainer}>
          <p className={css.loading}>Завантаження нотаток...</p>
        </div>
      ) : (
        <NoteList notes={filteredNotes} />
      )}
    </div>
  );
}
