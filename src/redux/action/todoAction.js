import { ADD_TODO_LISTS, DELETE_TODO_NOTE } from "../constant/todoConstants"

export const addTodoList = (data) => async (dispatch) => {
    dispatch({
        type: ADD_TODO_LISTS,
        payload: data
    })
}
export const deleteTodoList = (id) => async (dispatch) => {
    dispatch({
        type: DELETE_TODO_NOTE,
        payload: id
    })
}