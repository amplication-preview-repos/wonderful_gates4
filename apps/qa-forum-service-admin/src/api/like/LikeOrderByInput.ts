import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  target?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
