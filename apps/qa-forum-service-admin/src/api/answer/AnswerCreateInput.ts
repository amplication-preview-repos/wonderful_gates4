import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnswerCreateInput = {
  content?: string | null;
  question?: QuestionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
