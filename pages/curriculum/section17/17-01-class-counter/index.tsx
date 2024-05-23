import { Component } from "react";

export default class ClassCounterPage extends Component{
    state = {
        count: 0
    }

    onClickCountUp = () : void => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(): JSX.Element {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.onClickCountUp}>카운터 올리기</button>
            </div>
        )
    }
}

