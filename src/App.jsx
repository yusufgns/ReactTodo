import {useReducer, useState} from 'react'

import Header from './components/Header.jsx'
import ListTodo from './components/ListTodo.jsx'
import {MainContext} from './context.jsx'
import TodoAdd from './components/TodoAdd.jsx'

export default function TodosApp() {
    const [todo, dispatch] = useReducer(reducerTodo, initialTasks)
    const [methods, setMethods] = useState({})

    const appendsMethods = (newMethods) => {
      setMethods({
        ...methods,
        ...newMethods
      })
    }

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
    
    const props = {
        todo, 
        handleAddTodo, 
        handleDeleteTodo,
        appendsMethods,
        ...methods,
    }

    

    return (
        <MainContext.Provider value={props}>
            <div className='bg-blue-50 flex items-center flex-col h-screen pt-[200px]'>
              <Header></Header>
              <TodoAdd></TodoAdd>
              <ListTodo></ListTodo>
            </div>
        </MainContext.Provider>
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
