import { Answer } from "../answer/Answer";
import { Like } from "../like/Like";
import { JsonValue } from "type-fest";
import { Question } from "../question/Question";

export type User = {
  answers?: Array<Answer>;
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  profilePicture: JsonValue;
  questions?: Array<Question>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
