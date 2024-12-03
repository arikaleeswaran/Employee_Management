import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='heading'>Employee Management System</h1>
      <button className='add'>Add Employee</button>

    </div>
    </>
  )
}

export default App
