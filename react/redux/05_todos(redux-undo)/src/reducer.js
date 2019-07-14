import undoable from "redux-undo";
import { FILTER_BY_STATUS, ADD, TOGGLE } from "./acitons";
const initialState = { todos: [], todoStatus: 'all' };
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos:
                    [
                        ...state.todos,
                        {
                            id: state.todos.length,
                            title: action.data,
                            finished: false,
                        }
                    ]
            }
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item === action.data) {
                        return {
                            ...item,
                            finished: !item.finished
                        }
                    }
                    return item;
                })
            }
        case FILTER_BY_STATUS:
            return {
                ...state,
                todoStatus: action.data
            }
        default:
            return state;
    }
}

export default undoable(todoReducer);