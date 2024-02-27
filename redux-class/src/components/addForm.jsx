import { useState } from "react";
import {  useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()
    const submitHandler = (evt) => {
      evt.preventDefault()
      console.log(task)
        //here we pass the task as a payload to the reducers so then they can change the state variable
        dispatch(addTodo(task))
      setTask("")
      
    }
  return (
    <>
      <form onSubmit={submitHandler}>
              <input type="text" id="mainInput" onChange={(e) => setTask(e.target.value)} />  &nbsp;&nbsp;
              <button>Add task</button>
      </form>
    </>  
  );
}
