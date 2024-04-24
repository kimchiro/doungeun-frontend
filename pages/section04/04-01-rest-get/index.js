import axios from "axios";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("http://koreanjson.com/posts/1");
    console.log(result); //promise 가 담긴다.
  }

  //   함수 중복 선언 문제, 예시
  //   async function onClickSync() {
  //     const result = await axios.get("http://koreanjson.com/posts/1");
  //     console.log(result); //정상적인 결과
  //   }

  const onClickSync = async () => {
    const result = await axios.get("http://koreanjson.com/posts/1");
    console.log(result); //정상적인 결과
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
    </div>
  );
}
