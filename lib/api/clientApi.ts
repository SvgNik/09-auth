import { api } from "./api";
import { User } from "@/types/user";
import { Note } from "@/types/note";

export interface AuthData {
  email?: string;
  password?: string;
  username?: string;
}

export interface FetchNotesParams {
  search?: string;
  page?: number;
  perPage?: number;
  tag?: string;
}

export const register = async (data: AuthData) => {
  const response = await api.post<User>("/auth/register", data);
  return response.data;
};

export const login = async (data: AuthData) => {
  const response = await api.post<User>("/auth/login", data);
  return response.data;
};

export const logout = async () => {
  await api.post("/auth/logout");
};

export const checkSession = async () => {
  const response = await api.get<User | null>("/auth/session");
  return response.data;
};

export const getMe = async () => {
  const response = await api.get<User>("/users/me");
  return response.data;
};

export const updateMe = async (data: Partial<User>) => {
  const response = await api.patch<User>("/users/me", data);
  return response.data;
};

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
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
};
