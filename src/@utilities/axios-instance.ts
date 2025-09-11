import axios from 'axios';
import Cookies from 'js-cookie';

import STORAGE_KEYS from '@/@utilities/storage-keys';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const isServer = typeof window === 'undefined';
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const { cookies } = await import('next/headers');
  const token = isServer
    ? (await cookies()).get(STORAGE_KEYS.TOKEN)?.value
    : Cookies.get(STORAGE_KEYS.TOKEN);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
