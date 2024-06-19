import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "target";

export const LikeTitle = (record: TLike): string => {
  return record.target?.toString() || String(record.id);
};
