import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../../../src/commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const boardId = Array.isArray(router.query.boardId) ? router.query.boardId[0] : router.query.boardId;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: boardId as string }, skip: !boardId }
  );

  if (!boardId) return <></>;

  const onClickMoveToBoardEdit = (): void => {
    if (!boardId) {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    void router.push(`/boards/${boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    />
  );
}