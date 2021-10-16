import { types } from '../types/types';

let initialState = {
    todos: [
        {
            id: 123,
            name: 'Cristopher',
            competed: false
        }
    ],
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.todoAddNew:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        case types.todoDelete:
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => todo.id !== action.payload)
                ]
            }
        default:
            return state;
    }
}