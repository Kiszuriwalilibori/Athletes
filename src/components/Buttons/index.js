
import React from 'react'

const MyButton =(props)=>{return props.visibility?( <button className="button" onClick={props.fn}>{props.text}</button>):null}   

export default MyButton;

