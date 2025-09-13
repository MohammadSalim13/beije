export interface User {
  _id: string;
  profileInfo: {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    passwordHash: string;
  };
}
export interface SignInBody {
  email: string;
  password: string;
}
