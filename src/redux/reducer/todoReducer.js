import { ADD_TODO_LISTS, DELETE_TODO_NOTE } from "../constant/todoConstants";

export const todoReducer = (state = { todolist: [] }, action) => {
    switch (action.type) {
        case ADD_TODO_LISTS:
            return {
                ...state,
                todolist: [...state.todolist, action.payload]
            }
        case DELETE_TODO_NOTE:
            return {
                ...state,
                todolist: state.todolist.filter((i, index) => index !== action.payload),
            }
        default:
            return state;
    }
}
