import { api } from './api';
import { User } from '@/types/user';
import { cookies } from 'next/headers';

const getAuthHeaders = async () => {
  const cookieStore = await cookies();
  return {
    headers: {
      Cookie: cookieStore.toString(),
    },
  };
};

export const getMeServer = async () => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.get<User>('/users/me', headers);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const checkSessionServer = async () => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.get<User | null>('/auth/session', headers);
    return response.data;
  } catch (error) {
    return null;
  }
};