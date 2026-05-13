import { useState } from 'react'
import './App.css'
import Home from './page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="md:bg-gray-200 bg-gray-100">
  <Home/>
    </div>
    
    </>
  )
}

export default App
