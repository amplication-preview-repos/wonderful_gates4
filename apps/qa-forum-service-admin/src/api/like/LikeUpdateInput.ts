import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  target?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
