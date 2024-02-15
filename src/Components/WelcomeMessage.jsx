import { useContext } from "react";
import TodoItems from "./TodoItems"
import { TodoItemsContext } from "../store/todo-items-store";

const  WelcomeMessage=()=>{
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
return todoItems.length===0 && <p>Enjoy Your Day Dude!!</p>
}
export default WelcomeMessage;