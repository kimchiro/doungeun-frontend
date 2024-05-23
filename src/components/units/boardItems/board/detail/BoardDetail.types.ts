import type { IQuery } from "../../../../../../src/commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardEdit: () => void;
}
