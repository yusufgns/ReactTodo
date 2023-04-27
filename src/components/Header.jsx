import {MainContext, useContext} from '../context.jsx'
import { useEffect, useRef } from 'react'

function Header() {
    const {status, setStatus, todo} = useContext(MainContext)
    
    return(
        <h1>
            <p className='font-medium mb-[25px] text-[30px]'>Todo List</p>
        </h1>
    )
}

export default Header