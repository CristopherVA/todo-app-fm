import { types } from "../types/types";

export const addNewTodo = (name) => {

    let newTodo = {
        id: new Date().getTime(),
        name: name,
        active: false
    }

    return {
        type: types.todoAddNew,
        payload: newTodo
    }
}

export const activeTodo = (id) => ({
    type: types.todoActive,
    payload: id
})

export const removeTodo = (id) => ({
    type: types.todoDelete,
    payload: id
})