import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function NewBoards() {
  const [isActive, setIsActive] = useState();

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

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value !== "") {
      setWriterError("");
    }
    setIsActive(
      e.target.value !== "" &&
        password !== "" &&
        title !== "" &&
        contents !== ""
    );
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      setPasswordError("");
    }
    setIsActive(
      writer !== "" && e.target.value !== "" && title !== "" && contents !== ""
    );
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value !== "") {
      setTitleError("");
    }
    setIsActive(
      writer !== "" &&
        password !== "" &&
        e.target.value !== "" &&
        contents !== ""
    );
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (e.target.value !== "") {
      setContentsError("");
    }
    setIsActive(
      writer !== "" && password !== "" && title !== "" && e.target.value !== ""
    );
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
        router.push(`/boards/${result.data.createBoard.number}`);
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
      isActive={isActive}
    />
  );
}
