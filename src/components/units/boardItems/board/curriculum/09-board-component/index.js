export default function BoardComponent() {
  return (
    <div>
      <hi>{props.isEdit ? "수정" : "등록"}페이지</hi>
      제목: <input type="text" /> <br />
      내용: <input type="text" /> <br />
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  );
}
