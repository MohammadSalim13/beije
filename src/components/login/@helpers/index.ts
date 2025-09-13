import Cookies from 'js-cookie';

export function setUserToken(token: string) {
  if (!token) {
    throw new Error('Token must not be empty or null');
  }
  Cookies.set('token', token, { expires: 7, sameSite: 'Strict', secure: true });
}
