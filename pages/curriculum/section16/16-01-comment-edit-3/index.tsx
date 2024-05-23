import { useQuery, gql } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../src/commons/types/generated/types";
import CommentItem from "../../../../src/components/units/test/16-comment-item";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <CommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}