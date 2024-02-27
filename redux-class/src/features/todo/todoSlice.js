// reducers

//for creating slice
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};


//initialize the slice and export it in todoSlice
export const todoSlice = createSlice({
  // it is the name of our slice
  name: "todo",
  //passing the initialstate as the state (the argument of the reducer collect this)
  initialState,
  //defining reducers
  //reducers are basically an object of functions
  reducers: {
    addTodo: (state, action) => {
      //here we making a new todo object and then push it to our todos array
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      // here we push the newTodo object to todos array (like setState)
      state.todos.push(newTodo);
    },


    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },


    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },

  },
});

//this line generates action objects for our reducer functions
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

//here we export our reducers
export default todoSlice.reducer;
