import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
       <div className="grid grid-cols-4">
        <div className='bg-violet-400'>Columna 1</div>
        <div className='bg-violet-500'>Columna 2</div>
        <div className='bg-violet-600'>Columna 3</div>
        <div className='bg-violet-700'>Columna 4</div>
       </div>
     </div>
   


      
    </>
  )
}

export default App
