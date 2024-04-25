import * as S from "./BoardDetail.styles";
export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.ContainerWrapper>
        <S.Headers>
          <S.ProfileWrapper>
            <S.Profile src="/profile.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{props.data?.fetchBoard?.createdAt}</S.CreatedAt>
            </S.Info>
          </S.ProfileWrapper>
        </S.Headers>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        </S.Body>
      </S.ContainerWrapper>
      <S.BottomWrapper>
        <S.Button>목록으로</S.Button>
        <S.Button>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
