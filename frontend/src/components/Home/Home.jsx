import React, { useEffect, useState } from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const navigate = useNavigate()
    const [employees,setEmployees] = useState([])

    const handleAddEmp = ()=>{
        navigate('/newemp')
    }
    const handleDelete = async (id,e)=>{
      e.preventDefault();
      console.log("id",id);
      try{
        const res = await axios.delete(`http://localhost:8800/${id}`)
        console.log(res);

        setEmployees((employee)=>{
          return employee.filter((emp)=> emp.emp_id != id)
        })

      }catch(err){
        console.log(err);
        
      }

    }

    useEffect(()=>{
      const fetchEmp = async ()=>{
        try{
          const res = await axios.get("http://localhost:8800/")
          setEmployees(res.data)
        }catch(err){
          console.log(err);
          
        }
      }
      fetchEmp()
    },[])

  return (
    <>
        <div className='top'>
            <h1 className='heading'>Employee Management System</h1>
            <button className='add' onClick={handleAddEmp}>Add Employee</button>
        </div>
        <div className='bottom'>
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Date of Join</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                employees.map((emp)=>{
                  const formattedDate = new Date(emp.d_join).toISOString().split('T')[0];
                  return(
                  <tr key={emp.emp_id}>
                    <td>{emp.emp_id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.dept}</td>
                    <td>{formattedDate}</td>
                    <td>{emp.role}</td>
                    <td>
                      <button className='delt'onClick={(e)=>handleDelete(emp.emp_id,e)}>Delete</button>
                    </td>
                  </tr>
                )})
              }
            </tbody>
          </table>
        </div>
    </>
  )
}

export default Home