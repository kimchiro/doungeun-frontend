import { useMutation, gql } from "@apollo/client";


const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "돼지", title: "제목입니다", contents: "내용입니다") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
