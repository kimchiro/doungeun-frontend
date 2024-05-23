import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      _id
      number
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log(data?.fetchBoards);

  const onClickDelete = (event) => {
    Number(event.target.id);
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    })
      .then((result) => {
        console.log(result.data.deleteBoard.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {data?.fetchBoards.map((item, index) => (
        <div key={index}>{item.number}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{item.number}</span>
          <span style={{ margin: "10px" }}>{item.title}</span>
          <span style={{ margin: "10px" }}>{item.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
