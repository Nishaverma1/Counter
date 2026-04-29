import React from 'react'
import { useState } from 'react'

function First() {
    const [text ,setText] = useState("hi I am a car")
  return (
    <div>
      <h1>{text}</h1>

      <button onClick={()=> setText("i am updated")}></button>
    </div>
  )
}

export default First