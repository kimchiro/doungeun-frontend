import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount와 동일
  useEffect(() => {
    console.log("그러지고 나서 실행");
  }, [count]);

  // componentDidUpdate와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  // componentWillUnmount와 동일
  useEffect(() => {
    console.log("사라지기전에 실행");
    return () => {
      console.log("사라지기전에 실행");
    };
  }, []);

  // useEffect 하나로 실행, 함수 선언
  useEffect(() => {
    console.log("그러지고 나서 실행");
    return () => {
      console.log("사라지기전에 실행");
    };
  }, []);

  const onClickCountUp = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickCountUp}>카운터 올리기</button>
      <button onClick={onClickMove}>카운터 내리기</button>
    </div>
  );
}