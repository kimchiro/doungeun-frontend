import BoardWrite from "@/src/components/units/board/09-write2/BoardWrite.container";

export default function GraphqlMutationPage(props) {
  return (
    <div>
      <div>#########여기는 페이지 시작입니다############</div>
      <BoardWrite isEdit={false} />
      <div>#########여기는 페이지 끝 입니다############</div>
    </div>
  );
}
