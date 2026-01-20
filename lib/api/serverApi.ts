import { api } from "./api";
import { Note } from "@/types/note";
import { User } from "@/types/user";
import { cookies } from "next/headers";

const getAuthHeaders = async () => {
  const cookieStore = await cookies();
  return {
    headers: {
      Cookie: cookieStore.toString(),
    },
  };
};

export const fetchNotesServer = async (params = { perPage: 12 }) => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.get<Note[]>("/notes", { ...headers, params });
    return response.data;
  } catch {
    return [];
  }
};

export const fetchNoteByIdServer = async (id: string) => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.get<Note>(`/notes/${id}`, headers);
    return response.data;
  } catch {
    return null;
  }
};

export const getMeServer = async () => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.get<User>("/users/me", headers);
    return response.data;
  } catch {
    return null;
  }
};

export const checkSessionServer = async () => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.get<User | null>("/auth/session", headers);
    return response.data;
  } catch {
    return null;
  }
};
