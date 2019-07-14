import React from "react";
import store from "./store";
import { INC, DEC } from "./actions";

export default class extends React.Component {
    state = {
        value: store.getState().count
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                value: store.getState().count
            })
        })
    }

    onClick(actionType) {
        store.dispatch({
            type: actionType
        });
    }


    render() {
        return <div>
            <p>value: {this.state.value}</p>
            <p><button type="button" onClick={() => this.onClick(INC)}>inc1</button></p>
            <p><button type="button" onClick={() => this.onClick(DEC)}>dec1</button></p>
        </div>
    }
}