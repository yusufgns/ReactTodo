import {MainContext, useContext} from '../context.jsx'

export default function ListTodo() {
    const {todo, handleDeleteTodo} = useContext(MainContext)

    return (
        <ul className="w-[435px] bg-white py-[15px] px-[20px] rounded-lg max-h-[400px] overflow-auto">
            {todo.map((item) => (
                <li className="bg-gray-100 py-[5px] mt-[7px] px-[10px] rounded-2xl flex justify-between items-center max-w-[400px]" key={item.id}>
                    <p className='max-w-[325px] break-words flex-wrap'>
                        {item.text}
                    </p>
                    <Task item={item} handleDeleteTodo={handleDeleteTodo}/>
                </li>
            ))}
        </ul>
    )
}

function Task({item, handleDeleteTodo}) {
    return (
        <label className='bg-gray-600 text-white font-semibold px-[7px] rounded-2xl text-[12px]'>
            <button onClick={() => {
                handleDeleteTodo(item.id)
            }}>DEL</button>
        </label>
    )
}