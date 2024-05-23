import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  flex: 1 1 calc(33.333% - 10px); /* 3개의 아이템을 한 줄에 배치하고 간격을 조정 */
  margin: 5px;
  box-sizing: border-box;
  width: 95px;
  height: auto;
  display: block;
`;