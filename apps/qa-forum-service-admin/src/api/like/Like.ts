import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  target: string | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
};
