import {useState} from 'react'

export default function TodoAdd({onAddTodo}) {
    const [text, setText] = useState('')
    const [status, setStatus] = useState('empty')

    if(text.length > 0) {
        status == 'typing'
    } else {
        status == 'empty'
    }

    return(
        <div className='bg-white py-[2px] pl-[20px] pr-[5px] rounded-2xl border-gray-200 border mb-[20px]'>
            <input className='outline-none w-[350px]' placeholder='Add Todo' value={text} onChange={(e) => {
                setText(e.target.value)
            }} />
            
            <button disabled={text.length == 0} onClick={() => {
                onAddTodo(text);
                setText('')
            }}>
              <p className='px-[15px] py-[2px] ml-[5px] rounded-2xl bg-gray-500 text-white font-semibold'> Add </p>
            </button>

            <div>
                
            </div>
        </div>
    )
}