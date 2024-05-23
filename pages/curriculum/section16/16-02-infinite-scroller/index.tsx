import { useQuery, gql } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../src/commons/types/generated/types";
import CommentItem from "../../../../src/components/units/test/16-comment-item";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const loadMore = (): void => {
    if (!data) return;
    void fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div style={{ overflow: "auto", height: "500px" }}>
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={true || false}
      loader={<div className="loader" key={0}>Loading ...</div>}
      useWindow={false}
    >
      {data?.fetchBoards?.map((el) => (
        <CommentItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
    </div>
  );
}