import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  { name: "라이브게시판", page: "/boards" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
  { name :"결제페이지", page: "/payment"},
  {name : "공지사항", page: "/notice"},
  {name : "이벤트", page: "/event"},
  {name : "리뷰", page: "/review"},
];

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps
): JSX.Element {
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}  
