"use client";

import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "@/lib/api/clientApi";
import { NoteData } from "@/types/note";
import css from "./NoteList.module.css";
import { AxiosError } from "axios";

export default function NoteList({ notes }: { notes: NoteData[] }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error: AxiosError) => {
      console.error("Помилка при видаленні:", error);
      alert("Не вдалося видалити нотатку.");
    },
  });

  const handleDelete = (id: string) => {
    if (confirm("Ви впевнені, що хочете видалити цю нотатку?")) {
      mutation.mutate(id);
    }
  };

  if (notes.length === 0) {
    return (
      <div className={css.emptyContainer}>
        <p className={css.empty}>
          Нотаток не знайдено. Створіть свою першу нотатку!
        </p>
      </div>
    );
  }

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <div>
            <h3 className={css.title}>{note.title}</h3>
            <p className={css.content}>{note.content}</p>
          </div>

          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <div className={css.actions}>
              <Link href={`/notes/${note.id}`} className={css.link}>
                Details
              </Link>
              <button
                onClick={() => handleDelete(note.id)}
                className={css.deleteBtn}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "..." : "Delete"}
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
