import { useContext } from 'react';
import {AiFillDelete} from 'react-icons/ai'
import { TodoItemsContext } from '../store/todo-items-store';



function TodoItem({ todoName, todoDate}) {
const {deleteItem} = useContext(TodoItemsContext);

  return (
    <div className="mycontainer">
      <div className="row todoitems" >
        <div className="col-4" >{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 mybtn1">
          <button type="button" className="btn btn-danger mybtn"onClick={()=>deleteItem(todoName)}>
           <AiFillDelete/>
          </button>
        </div>
      </div>

    </div>

  );
}

export default TodoItem;