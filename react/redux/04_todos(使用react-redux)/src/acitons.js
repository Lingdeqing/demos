export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';
export const FILTER_BY_STATUS = 'FILTER_BY_STATUS';

export function addTodo(todo){
    return {
        type: ADD,
        data: todo
    }
}
export function toggle(todo){
    return {
        type: TOGGLE,
        data: todo
    }
}
export function filterByStatus(status){
    return {
        type: FILTER_BY_STATUS,
        data: status
    }
}