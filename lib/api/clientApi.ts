/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./api";
import { User } from "@/types/user";

export const register = async (data: any) => {
  const response = await api.post<User>("/auth/register", data);
  return response.data;
};

export const login = async (data: any) => {
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
