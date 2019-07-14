import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../acitons";

class Add extends React.Component {

    static propTypes = {
        addTodo: PropTypes.func
    }

    state = {
        input: ''
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={r => this.inputRef = r}
                    value={this.state.input}
                    onChange={e => this.setState({ input: e.target.value })} />
                <button
                    type="button"
                    disabled={/^\s*$/.test(this.state.input)}
                    onClick={() => {
                        this.props.addTodo(this.state.input);
                        this.setState({
                            input: ''
                        }, () => {
                            this.inputRef.focus();
                        })
                    }}>add</button>
            </div>
        );
    }
}

function mapActions(dispatch) {
    return {
        addTodo: (todo) => dispatch(addTodo(todo))
    }
}

export default connect(null, mapActions)(Add);
