import BoardDetail from "../../../src/components/units/boardItems/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardItems/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardItems/boardComment/write/BoardCommentWrite.container";


export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
