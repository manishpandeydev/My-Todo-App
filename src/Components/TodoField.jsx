import "bootstrap/dist/css/bootstrap.min.css";
import {BiMessageAdd} from 'react-icons/bi'
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { useState } from "react";

function TodoField({onNewItem}){
  const {addNewItem} = useContext(TodoItemsContext);
 

const [todoName, setTodoName] = useState("");
const [todoDate, setTodoDate] = useState("");

const handleNameChange = (event) =>{
setTodoName(event.target.value)
}
const handleDateChange = (event) =>{
  setTodoDate(event.target.value);
}
const handleOnAddButtonClicked = () =>{
  addNewItem(todoName,todoDate)
  setTodoDate("");
  setTodoName("");


}



return <>
<div className="container text-center topfield">
  <div className="row ">
    <div className="col-4">
    <input type="text" className="form-control myform" placeholder="Task" aria-label="Username" aria-describedby="basic-addon1" onChange={handleNameChange} value={todoName}/>
    </div>
    <div className="col-4">
    <input type="date" className="form-control myform1" aria-label="Username" aria-describedby="basic-addon1" onChange={handleDateChange} value={todoDate}/>
    </div>
    <div className="col-4">
      <button className="btn btn-success mybtn" onClick={handleOnAddButtonClicked}><BiMessageAdd/></button>
    </div>
  </div>
  </div>

</>

}
export default TodoField;