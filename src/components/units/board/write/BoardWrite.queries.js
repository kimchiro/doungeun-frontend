import { gql } from "@apollo/client";

export const 나의그래프큐엘셋팅 = gql`
  mutation crateBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
