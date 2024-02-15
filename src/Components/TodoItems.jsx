import TodoItem from "./Todoitem";
//import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext);


return(
  <div>
      {todoItems.map((item) => (
        <TodoItem key={item.Name} todoDate={item.date} todoName={item.Name}></TodoItem>
      ))}
    </div>
);

};
export default TodoItems;