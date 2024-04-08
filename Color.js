import React, { useState } from 'react'


function Color() {
    let [color , setcolor] = useState("red")
  return (
    <>
    <div style={{backgroundColor:color,width:"200px",height:"200px"}}></div>
    <button  style={{backgroundColor:"red"}} onClick={()=>setcolor("blue")}> blue</button>
    </>
  )
}

export default Color