
import BoardWrite from "../../../../../src/components/units/boardItems/board/curriculum/10-write/BoardWrite.container"
import dynamic from 'next/dynamic';
import React from 'react';

// BoardWrite 컴포넌트를 동적으로 임포트하고, 서버 사이드 렌더링을 비활성화합니다.
const BoardWriteDynamic = dynamic(() => import('../../../../../src/components/units/boardItems/board/curriculum/10-write/BoardWrite.container'), {
  ssr: false
});

export default function GraphqlMutationPage() {
  return (
    <div>
      <div>#########여기는 페이지 시작입니다############</div>
      <BoardWriteDynamic isEdit={false} />
      <div>#########여기는 페이지 끝 입니다############</div>
    </div>
  );
}

