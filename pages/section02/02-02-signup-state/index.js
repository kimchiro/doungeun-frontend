import { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [errorId, setErrorId] = useState("");
  const [errorPw, setErrorPw] = useState("");

  function handleChangeId(event) {
    const value = event.target.value;
    setId(value);
  }

  function handleChangePw(event) {
    const value = event.target.value;
    setPw(value);
  }

  function handleClickLogin() {
    if (id === "") {
      setErrorId("! 아이디를 정확히 입력해 주세요.");
    }
    if (pw === "") {
      setErrorPw("! 비밀번호를 정확히 입력해 주세요.");
    }
    if (id !== "" && pw !== "") {
      alert("아이디와 비밀번호가 모두 입력되었습니다. 로그인을 시작합니다.");
    }
  }

  return (
    <div>
      <h1>로그인</h1>
      <div>아이디 {id}</div>
      <input type="text" onChange={handleChangeId} />
      <div style={{ color: "red" }}>{errorId}</div>
      <div>비밀번호 {pw}</div>
      <input type="text" onChange={handleChangePw} />
      <div style={{ color: "red" }}>{errorPw}</div>
      <div>
        <button onClick={handleClickLogin}>로그인</button>
      </div>
    </div>
  );
}

export default Login;
