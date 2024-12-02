import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"


const ToDo = ({text, completed, updateMode, deleteToDo, toggleComplete}) => {
    return (
        <div className="todo">  
            <input
                type="checkbox"
                checked={completed}
                onChange={toggleComplete} />    
                
            <span className="text" style={{ textDecoration: completed ? "line-through" : "none" }}>
                {text}
            </span>
            
            <span className="icons">
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </span>

            
        </div>
    )
}


export default ToDo