import { useMutation, gql } from "@apollo/client";
import { useState, ChangeEvent } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation crateBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });


  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };


  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeInput} />
      제목: <input type="text" id="title" onChange={onChangeInput} />
      내용: <input type="text" id="contents" onChange={onChangeInput} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
    </div>
  );
}
