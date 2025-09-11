import { userModel } from "@/models/user.model";

export interface GlobalState {
  user: userModel | null;
}