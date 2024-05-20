import React, { useContext } from 'react'
import { ThemeContext } from './B1_37'

export default function B3_37() {
    const theme = useContext(ThemeContext)
  return (
    <>
    <button style={{backgroundColor: theme, color: "red", width: "100px",height: "40px", borderRadius: '5px'}}>
        Click me
    </button>
    </>
  )
}
