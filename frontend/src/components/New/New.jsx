import React, { useState } from 'react'
import Validate from '../Validation';
import { useNavigate } from 'react-router-dom'
import './new.css'
import axios from 'axios'

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
const[errors,setErrors] = useState({})

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const validateError = Validate(data);
    setErrors(validateError)
    const hasNoErrors = Object.keys(validationErrors).length === 0;
    if(hasNoErrors){
      console.log(data);
      axios.post("http://localhost:8800/newemp",data).then(
        res => {
         navigate('/') 
        }
      ).catch(err => console.log(err))
    }
    
  }

  const handleReset =()=>{
    setData({
      name:"",
      emp_id:"",
      email:"",
      phone:"",
      dept:"",
      d_join:"",
      role:""
    });
    setErrors({})
  };

  const handleChange = (e)=>{
    const {name,value} = e.target;
    const newData = {...data,[name]:value}
    setData(newData);
    console.log(data);

    const validationErrors = new Validate(newData);
    setErrors(validationErrors);
    
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
                <input type="text" required onChange={handleChange} placeholder='Enter Employee ID' className='item' name='emp_id' value={data.emp_id}/>
               
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Name: </label>
                <input type="text" required onChange={handleChange} placeholder='Enter Name' className='item' name='name' value={data.name}/>
                {errors.name && <span className='error'>{errors.name}</span>}
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Email: </label>
                <input type="text" required onChange={handleChange} placeholder='Enter email' className='item' name='email' value={data.email} />
                {errors.email && <span className='error'>{errors.email}</span>}
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Phone: </label>
                <input type="number" required onChange={handleChange} placeholder='Enter Phone No.' className='item' name='phone' value={data.phone} />
                {errors.phone && <span className='error'>{errors.phone}</span>}
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Department: </label>
                <select name="dept" required id="" onChange={handleChange} >
                    <option value="">Select Department</option>
                    <option value="HR" >HR</option>
                    <option value="Engineering" >Engineering</option>
                    <option value="Product Development">Product Development</option>
                    <option value="Research & Development">Research & Development</option>
                    <option value="Marketing">Marketing</option>
                </select>
                {errors.dept && <span className='error'>{errors.dept}</span>}
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Date of Joining: </label>
                <input type="date" required onChange={handleChange} placeholder='Select Date' className='item' name='d_join' value={data.d_join}/>
                {errors.d_join && <span className='error'>{errors.d_join}</span>}
              </div>
              <div className='input-item'>
                <label htmlFor="" className='input-label'>Role: </label>
                <input type="text" required onChange={handleChange} placeholder='Enter role' className='item' name='role' value={data.role}/>
                {errors.role && <span className='error'>{errors.role}</span>}
              </div>
              </div>
            </div>
            <div className='btn'>
              <button type='reset' className='reset' onClick={handleReset}>Reset</button>
              <button type='submit' className='submit'>Submit</button>
            </div>
            </form>

        </div>
    </div>
  )
}

export default New