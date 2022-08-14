import { types } from '../types/types';

const initialState = {
    todos: [],
    typeTodos: null
}


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadAllTodo:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case types.addNewTodo:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }

        case types.activeTodo:
            return {
                ...state,
                todos: [
                    ...state.todos.map(td => {
                        if (td.id === action.payload.id && td.status === false) {
                            td.status = action.payload.status
                        }
                        return td
                    })
                ]
            }
        case types.desativeTodo:
            return {
                ...state,
                todos: [
                    ...state.todos.map(td => {
                        if (td.id === action.payload.id && td.status === true) {
                            td.status = action.payload.status
                        }
                        return td
                    })
                ]
            }

        case types.deleteTodo:
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => todo.id !== action.payload)
                ]
            }
        case types.authLogout:
            return {
                ...state,
                todos: []
            };

        case types.typeFilter: 
            return {
                ...state,
                typeTodos: action.payload
            }

        default:
            return state;
    }
}