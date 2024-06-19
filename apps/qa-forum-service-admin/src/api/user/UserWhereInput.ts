import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";

export type UserWhereInput = {
  answers?: AnswerListRelationFilter;
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  profilePicture?: JsonFilter;
  questions?: QuestionListRelationFilter;
  username?: StringFilter;
};
