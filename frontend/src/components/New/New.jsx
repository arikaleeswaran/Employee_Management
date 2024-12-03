import React, { useState } from 'react'
// import './new.css'

function New() {
const [data,setData] = useState({
  name:"",
  emp_id:"",
  email:"",
  phone:"",
  dept:"",
  d_join:"",
  role:""
})

  const handleSubmit = (e)=>{
    e.preventDefault();
    

  }

  const handleChange = (e)=>{
    setData((prev)=>({...prev,[e.target.name]:e.target.value}));
    console.log(data);
    
  }
  return (
    <div className=''>
        <h2 className='head'>
          Add New Employee
        </h2>
        <div className='inputfield'>
          <div className='title'>
            New Employee
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className='inputitems'>
              <div className='inputcol'>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Employee ID: </label>
                <input type="text" onChange={handleChange} placeholder='Enter Employee ID' className='item' name='emp_id' />
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Name: </label>
                <input type="text" onChange={handleChange} placeholder='Enter Name' className='item' name='name' />
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Email: </label>
                <input type="email" onChange={handleChange} placeholder='Enter email' className='item' name='email' />
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Phone: </label>
                <input type="number" onChange={handleChange} placeholder='Enter Phone No.' className='item' name='phone' />
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Choose Department: </label>
                <select name="dept" id="" onChange={handleChange} >
                    <option value="HR" >HR</option>
                    <option value="Engineering" >Engineering</option>
                    <option value="Product Development">Product Development</option>
                    <option value="Research & Development">Research & Development</option>
                    <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Date of Joining: </label>
                <input type="date" onChange={handleChange} placeholder='Select Date' className='item' name='d_join'/>
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Role: </label>
                <input type="text" onChange={handleChange} placeholder='Enter role' className='item' name='role' />
              </div>
              </div>
            </div>
            <button type='submit' className='submit'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default New