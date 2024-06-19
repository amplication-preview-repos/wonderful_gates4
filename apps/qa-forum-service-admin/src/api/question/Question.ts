import { Answer } from "../answer/Answer";
import { User } from "../user/User";

export type Question = {
  answers?: Array<Answer>;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
