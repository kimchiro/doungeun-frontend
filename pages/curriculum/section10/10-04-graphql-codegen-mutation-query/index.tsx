import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArg> (FETCH_BOARD, {
    variables: { number: Number(router.query.dynamic) },
  });
  console.log(data);
  const onClickMove = () => {
    router.push("/section05/05-04-dynamic-routing-board-query");
  };

  return (
    <div>
      <div>{router.query.dynamic}번 게시글로 이동이 완료되었습니다</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
      <button onClick={onClickMove}>메인으로 돌아가기</button>
    </div>
  );
}
