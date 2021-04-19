import { ADD_TODO_LISTS, DELETE_TODO_NOTE } from "../constant/todoConstants";

export const todoReducer = (state = { todolist: [] }, action) => {
    console.log("TODO IN REDUCER", state.todolist)
    switch (action.type) {
        case ADD_TODO_LISTS:
            return {
                ...state,
                todolist: [...state.todolist, action.payload]
            }
        case DELETE_TODO_NOTE:
            return {
                ...state,
                todolist: state.todolist.filter(i => i !== action.payload)
            }
        default:
            return state;
    }
}
