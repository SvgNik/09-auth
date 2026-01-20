import { api } from "./api";
import { Note } from "@/types/note";
import { User } from "@/types/user";

export interface FetchNotesParams {
  search?: string;
  page?: number;
  perPage?: number;
  tag?: string;
}

export interface AuthData {
  email?: string;
  password?: string;
}

export const fetchNotes = async (
  params: FetchNotesParams = { perPage: 12 },
) => {
  const response = await api.get<Note[]>("/notes", { params });
  return response.data;
};

export const fetchNoteById = async (id: string) => {
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
};

export const createNote = async (data: {
  title: string;
  content: string;
  tag: string;
}) => {
  const response = await api.post<Note>("/notes", data);
  return response.data;
};

export const deleteNote = async (id: string) => {
  await api.delete(`/notes/${id}`);
};

export const register = async (data: AuthData) => {
  const response = await api.post<User>("/auth/register", data);
  return response.data;
};

export const login = async (data: AuthData) => {
  const response = await api.post<User>("/auth/login", data);
  return response.data;
};
