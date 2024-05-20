import React, { useContext, useState } from 'react'
import { ThemeContext } from './B1_37'

export default function B4_37() {
    const theme = useContext(ThemeContext)
    const [backgroundColor, setBackgroundColor] = useState(theme);

    const toggle = () => {
        setBackgroundColor(backgroundColor === 'blue' ? 'red' : 'blue');
    };
    const colorName = 
  return (
    <>
    <h4>{colorName}</h4>
    <button  style={{backgroundColor: backgroundColor,color:"white",width:"100px",height:"40px",borderRadius:'5px'}} onClick={toggle}>
        Click me 
    </button>
    </>
  )
}
