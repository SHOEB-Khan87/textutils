import React from 'react'

export default function Buttons(props) {
    const myStyle = {
        float:'right',
        borderRadius:'65px'
    };
  return (
    <div className='container'>
      <button style={myStyle} onClick={props.enableColor} className="btn btn-warning"> yellow</button>
      <button style={myStyle} onClick={props.checkColor} className="btn btn-info"> aqua</button>
      
    </div>
  )
}
