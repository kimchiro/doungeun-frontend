import { useRouter } from "next/router";

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/section05/05-02-static-routing-board");
  };

  return (
    <div>
      2번 게시글 이동이 완료되었습니다.
      <button onClick={onClickMove}>메인으로 돌아가기</button>
    </div>
  );
}
