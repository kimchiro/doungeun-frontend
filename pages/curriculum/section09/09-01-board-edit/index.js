import React, { Fragment } from 'react';

export default function BoardEditPage() {
  return (
    <Fragment>
      <hi>수정페이지</hi>
      제목: <input type="text" />
      내용: <input type="text" />
      <button>수정하기</button>
    </Fragment>
  );
}
