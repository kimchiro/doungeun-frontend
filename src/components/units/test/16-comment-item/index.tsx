import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

interface CommentItemProps {
  el: IQuery["fetchBoards"][number];
}

export default function CommentItem(props: CommentItemProps): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div key={props.el._id}>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" key={props.el._id} defaultValue={props.el.title} />
      )}
    </div>
  );
}