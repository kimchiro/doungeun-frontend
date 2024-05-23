import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import BoardWrite from "../../../../src/components/units/boardItems/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardsEditPage(): JSX.Element {
  const router = useRouter();
  const boardId = router.query.boardId as string;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId },
      skip: !boardId,  // boardId가 없을 때 쿼리 실행 건너뛰기
    }
  );

  return <BoardWrite isEdit={true} data={data} />;
}