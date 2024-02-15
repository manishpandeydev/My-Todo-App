import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoAppName from './Components/TodoAppName';
import TodoField from './Components/TodoField';
import TodoItems from './Components/TodoItems';
import { useState } from 'react';
import WelcomeMessage from './Components/WelcomeMessage';
import { TodoItemsContext } from './store/todo-items-store';


function App() {
const initialTodoItems1 = [
];

const [todoItems1,setTodoItems] = useState([]);

const addNewItem = (itemName,itemDate) =>{

setTodoItems((currValue) => [
  ...currValue,
  {Name : itemName,
   date : itemDate},
]
);
};

const deleteItem=(todoName)=>{
const newTodoItems = todoItems1.filter
(item => item.Name !== todoName)

  setTodoItems(newTodoItems);
console.log(todoName)
}




  return  (
<TodoItemsContext.Provider value={{todoItems :todoItems1,
  addNewItem,
  deleteItem}}>
    <>

    <div className='card'>

    <div className='heading'>
<TodoAppName/>
</div>
<div>
<TodoField />
</div>
 <WelcomeMessage/>
<div className='todoitemsn'>
<TodoItems></TodoItems>

</div>

</div>

    </>
    </TodoItemsContext.Provider>
  );
}

export default App;
