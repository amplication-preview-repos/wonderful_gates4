import { AnswerCreateNestedManyWithoutUsersInput } from "./AnswerCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { QuestionCreateNestedManyWithoutUsersInput } from "./QuestionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  answers?: AnswerCreateNestedManyWithoutUsersInput;
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: InputJsonValue;
  questions?: QuestionCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
