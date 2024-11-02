import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Todo message",
    }]
}

export const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;