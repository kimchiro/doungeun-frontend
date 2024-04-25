import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import {
  Wrapper,
  ContainerWrapper,
  Headers,
  ProfileWrapper,
  Profile,
  Info,
  Writer,
  CreatedAt,
  Body,
  Title,
  Contents,
  BottomWrapper,
  Button,
} from "../../../styles/boardDetail";

export const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.boardId) },
  });

  return (
    <Wrapper>
      <ContainerWrapper>
        <Headers>
          <ProfileWrapper>
            <Profile src="/profile.png" />
            <Info>
              <Writer>{data?.fetchBoard?.writer}</Writer>
              <CreatedAt>{data?.fetchBoard?.createdAt}</CreatedAt>
            </Info>
          </ProfileWrapper>
        </Headers>
        <Body>
          <Title>{data?.fetchBoard?.title}</Title>
          <Contents>{data?.fetchBoard?.contents}</Contents>
        </Body>
      </ContainerWrapper>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
