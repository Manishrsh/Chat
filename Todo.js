import React, { useState } from 'react'
import './todo.css';
function Todo() {
    const [todos , setTodo]= useState([
        {title :"Hi",
        msg:"hi am whatsapp"
        },
        {title :"Hie",
        msg:"hi am Insta"
        },
        {title :"Hello",
        msg:"hi am Telegram"
        },
    ])
    
  return (
    <>
    <ul class="list-group todos mx-auto text-light">
    
    {todos.map(item=>{

       return <> 
       <li className="list-group-item d-flex justify-content-between align-items-center" >
      <span>{item.msg}</span>
      <i className="far fa-trash-alt delete"></i>
    </li>
       </>
    })}
    </ul>
    </>
  )
}

export default Todo