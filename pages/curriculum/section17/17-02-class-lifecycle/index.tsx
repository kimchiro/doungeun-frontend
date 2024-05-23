import { Component } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class ClassCounterPage extends Component<Record<string, never>, IState> {
  state = {
    count: 0
  }

  componentDidMount(): void {
    console.log("그러지고 나서 실행");
  }

  componentDidUpdate(prevProps: Readonly<Record<string, never>>, prevState: Readonly<IState>, snapshot?: any): void {
    console.log("업데이트 되고 나서 실행");
  }

  componentWillUnmount(): void {
    console.log("사라지기전에 실행");
  }

  onClickCountUp = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  onClickMove = (): void => {
    Router.push("/");
  }

  render(): JSX.Element {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.onClickCountUp}>카운터 올리기</button>
        <button onClick={this.onClickMove}>카운터 내리기</button>
      </div>
    );
  }
}