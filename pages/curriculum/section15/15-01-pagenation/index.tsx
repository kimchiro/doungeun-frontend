import { useQuery, gql } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "@/commons/types/generated/types";
import { MouseEvent } from "react"



const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage() : JSX.Element {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  console.log(data?.fetchBoards);


//   const myStyles = {
//     margin: "10px",
//     padding: "0px",
//   };

const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
  void refetch({ page: Number(event.currentTarget.id) });
};

return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  )}