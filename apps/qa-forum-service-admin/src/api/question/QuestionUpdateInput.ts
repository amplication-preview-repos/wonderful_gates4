import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestionUpdateInput = {
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
