import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import New from './components/New/New'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newemp' element={<New/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
