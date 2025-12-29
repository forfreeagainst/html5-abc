import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <>
     <DndProvider backend={HTML5Backend}>
        <p>充电宝</p>
     </DndProvider>
    </>
  )
}

export default App
