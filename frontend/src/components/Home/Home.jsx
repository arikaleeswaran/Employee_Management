import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const handleAddEmp = ()=>{
        navigate('/newemp')
    }
  return (
    <>
        <div>
            <h1 className='heading'>Employee Management System</h1>
            <button className='add' onClick={handleAddEmp}>Add Employee</button>
        </div>
    </>
  )
}

export default Home