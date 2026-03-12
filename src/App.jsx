import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Input } from 'antd';

function App() {
  const [name, setName] = useState('durant')
  const log = () => {
    console.log(name, '???')
  }
  return (
    <>
     <DndProvider backend={HTML5Backend}>
        <p>充电宝{name}</p>
        <Input placeholder="Basic usage"
        onPressEnter={log} 
        value={name} onChange={
          (e) => {setName(e.target.value)}
        }/>
     </DndProvider>
    </>
  )
}

export default App
