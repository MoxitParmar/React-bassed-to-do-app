//here we learn how to use useDispath to change the state variable
//to access our store
import { useSelector } from "react-redux";

import AddForm from "./addForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
  //accessing the todos from store and pass it to a todos const variable
  const todos = useSelector((state) => state.todos);
  // console.log(todos);
    //we have to store the useDispatch in a variable to run
    const dispatch = useDispatch()
  
    const clickHandler = (id) => {
      // console.log("delete", id)
      //here we pass the id as a payload to the reducers so then they can change the state variable
        dispatch(deleteTodo(id))
    }
    
    return (
    <>
      <AddForm />
      <h2>Todo list</h2>
        <ul>
        
        {/* making a list for displaying todos from the store todos array*/}
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task} &nbsp;
            

            <button onClick={() => clickHandler(todo.id)}>Delete</button> 
            </li> 
            
        ))}
      </ul>
    </>
  );
}
