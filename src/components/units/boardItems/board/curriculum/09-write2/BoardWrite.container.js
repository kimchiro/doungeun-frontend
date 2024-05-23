import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function NewBoards(props) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value !== "") {
      setWriterError("");
    }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value !== "") {
      setTitleError("");
    }
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (e.target.value !== "") {
      setContentsError("");
    }
  };

  const onClickUpdate = async () => {
    // 필요한 필드만 업데이트할 객체 생성
    const myVariables = { number: Number(router.query.number) };
    if (writer !== props.data.fetchBoard.writer) myVariables.writer = writer;
    if (title !== props.data.fetchBoard.title) myVariables.title = title;
    if (contents !== props.data.fetchBoard.contents)
      myVariables.contents = contents;

    try {
      // 수정 요청
      const result = await updateBoard({
        variables: myVariables,
      });

      console.log(result);
      router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    } else if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    } else if (!title) {
      setTitleError("제목을 입력하세요.");
    } else if (!contents) {
      setContentsError("내용을 작성해주세요.");
    } else {
      try {
        const result = await createBoard({
          variables: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          },
        });
        console.log(result);
        alert("게시글 작성이 완료되었습니다.");
        console.log(result.data.createBoard.number);
        router.push(
          `/section09/09-04-boards/${result.data.createBoard.number}`
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
