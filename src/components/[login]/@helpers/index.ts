import Cookies from 'js-cookie';

import storageKey from '@/@utilities/storage-keys';

export function setUserToken(token: string) {
  if (!token) {
    throw new Error('Token must not be empty or null');
  }
  Cookies.set(storageKey.TOKEN, token, { expires: 7, sameSite: 'Strict', secure: true });
}

export function logoutUser() {
  Cookies.remove(storageKey.TOKEN);
}
