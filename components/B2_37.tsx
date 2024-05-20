import React, { useContext } from 'react'
import { ThemeContext } from './B1_37'

export default function B2_37() {
    const theme = useContext(ThemeContext)
  return (
    <>
    <div style={{color: theme}}>
      <p>Giá trị khởi tạo: {theme}</p>
    </div>
    </>
  )
}
