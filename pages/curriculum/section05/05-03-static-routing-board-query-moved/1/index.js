import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 23201) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data);
  const router = useRouter();
  const onClickMove = () => {
    router.push("/section05/05-03-static-routing-board-query");
  };

  return (
    <div>
      <div>1번 게시글로 이동이 완료되었습니다</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
      <button onClick={onClickMove}>메인으로 돌아가기</button>
    </div>
  );
}
