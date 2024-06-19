import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  target?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
