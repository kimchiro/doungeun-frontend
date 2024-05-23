import { Fragment } from "react";

export default function BoardNewPage() {
  return (
    <Fragment>
      <hi>등록페이지</hi>
      제목: <input type="text" />
      내용: <input type="text" />
      <button>등록하기</button>
    </Fragment>
  );
}
