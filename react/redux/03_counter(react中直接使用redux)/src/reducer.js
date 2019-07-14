import { INC, DEC } from "./actions";

const initialState = {
    count: 0
}
export default function (state = initialState, action) {
    switch (action.type) {
        case INC:
            return {
                count: state.count + 1
            }
        case DEC:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}