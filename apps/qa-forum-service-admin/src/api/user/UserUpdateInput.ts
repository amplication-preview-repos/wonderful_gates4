import { AnswerUpdateManyWithoutUsersInput } from "./AnswerUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { QuestionUpdateManyWithoutUsersInput } from "./QuestionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  answers?: AnswerUpdateManyWithoutUsersInput;
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: InputJsonValue;
  questions?: QuestionUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
