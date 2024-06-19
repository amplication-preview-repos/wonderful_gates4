import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnswerWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
