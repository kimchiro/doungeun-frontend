import { MouseEvent } from "react";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard {
    fetchBoard {
      _id
      writer
      title
      number
    }
  }
`;

export default function StopPropagation() {
  const { data } = useQuery(FETCH_BOARD);

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id);
  };

  const qqq1 = () => {
    alert("1번 클릭");
  };

  const qqq2 = () => {
    alert("2번 클릭");
  };

  const qqq3 = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    alert("3번 클릭");
  };

  const qqq4 = () => {
    alert("4번 클릭");
  };

  return (
    <div>
      {data?.fetchBoard.map((el: any) => (
        <div id={el.writer} onClick={qqq1} key={el._id}>
          <span onClick={qqq2}>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}