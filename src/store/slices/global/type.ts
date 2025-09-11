import { UserModel } from '@/models/user.model';

export interface GlobalState {
  user: UserModel | null;
}
