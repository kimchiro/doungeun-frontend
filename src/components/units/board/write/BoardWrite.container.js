import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables === $
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = () => {
    setWriter(event.target.value);
  };

  const onChangeTitle = () => {
    setTitle(event.target.value);
  };

  const onChangeContents = () => {
    setContents(event.target.value);
  };

  return (
    <BoardWriteUI
      aaa={onClickSubmit}
      bbb={onChangeWriter}
      ccc={onChangeTitle}
      ddd={onChangeContents}
    />
  );
}
