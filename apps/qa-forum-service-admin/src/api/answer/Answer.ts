import { Question } from "../question/Question";
import { User } from "../user/User";

export type Answer = {
  content: string | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  updatedAt: Date;
  user?: User | null;
};
