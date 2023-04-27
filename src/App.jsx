import ListTodo from './components/ListTodo.jsx'
import TodoAdd from './components/TodoAdd.jsx'
import {useReducer} from 'react'

export default function TodosApp() {
    const [todo, dispatch] = useReducer(reducerTodo, initialTasks)

    function handleAddTodo(text) {
      dispatch({
        text: text,
        id: nextId++,
        type: 'addTodo'
      })
    }

    function handleDeleteTodo(itemID) {
      dispatch({
        type: 'delete',
        id: itemID
      })
    }
    
    return (
        <div className='bg-blue-50 flex items-center flex-col h-screen pt-[200px]'>
          <h1 className='font-medium mb-[25px] text-[30px]'>Todo List</h1>
          <TodoAdd onAddTodo={handleAddTodo}></TodoAdd>
          <ListTodo todo={todo} onDeleteTodo={handleDeleteTodo}></ListTodo>
        </div>
    )
}

function reducerTodo(todo, action) {
    switch(action.type) {
      case 'addTodo' : {
        return [
          ...todo,
          {
            id: action.id,
            text: action.text,
            done: false
          }
        ]
      }
      case 'delete' : {
        return todo.filter(e => e.id !== action.id)
      }
      default : {
        throw console.error('Type not found:' + action.type);
      }
    }
}


let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Learn React'},
  {id: 1, text: 'Daily naps'},
  {id: 2, text: 'Small Projects'},
];
