
// The basic code to create a store


//This line create a store
import { configureStore } from '@reduxjs/toolkit'

//for importing our reducers
import todoReducer from '../features/todo/todoSlice'


//here we export our store variable
export const store = configureStore({
    //we have to pass reducers to our store
    //at start we dont have any reducer so we pass this next line with an empty object
    // reducer: {},
    // we pass the reducer to the store at the last step as mention in md file
    reducer: todoReducer,
})