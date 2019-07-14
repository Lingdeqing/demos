import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggle } from "../acitons";

class List extends React.Component {

    static propTypes = {
        todos: PropTypes.array,
        toggle: PropTypes.func
    }


    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return <li key={todo.id} onClick={() => this.props.toggle(todo)} style={{
                            textDecoration: todo.finished ? 'line-through': 'none'
                        }}>{todo.title}</li>
                    })
                }
            </ul>
        );
    }
}

function mapState(state) {
    return {
        todos: state.present.todos.filter(item => {
            switch (state.todoStatus) {
                case 'finished':
                    return item.finished;
                case 'actived':
                    return !item.finished;
                default:
                    return item;
            }
        })
    }
}

function mapActions(dispatch) {
    return {
        toggle: (item) => dispatch(toggle(item))
    }
}

export default connect(mapState, mapActions)(List);
