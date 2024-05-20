import React from 'react'
import { ThemeContext } from './components/B1_37'
import B2_37 from './components/B2_37'
import B3_37 from './components/B3_37'
import B4_37 from './components/B4_37'


export default function App() {
  return (
    <>
    <ThemeContext.Provider value="blue">
    <B2_37></B2_37>
    <B3_37></B3_37>
    <B4_37></B4_37>
    </ThemeContext.Provider>
    </>
  )
}
