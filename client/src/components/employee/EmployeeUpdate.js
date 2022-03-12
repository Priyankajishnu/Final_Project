import React, { useEffect, useState } from 'react';
//import { useNavigate,useParams } from 'react-router-dom';
//import employeeupdate from './Employeedb';
import './EmployeeUpdate.css';
import EmpUpdateform from './EmpUpdateform';
import {Link,useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import AdminNav from '../header/AdminNav';

function EmployeeUpdate() {

  let navigate=useNavigate();

  const [employee,setEmployee]=useState([]);
  
  useEffect( async()=>{
    await fetchapi();
  },[])

  const fetchapi=async()=>{
      const response=await axios.get('http://localhost:5000/routes/api/employee')
      console.log(response.data);
      setEmployee(response.data)    
        
  }

  function deleteEmpData(event){
     
     console.log(event.target.getAttribute("name"))
      axios.delete(`http://localhost:5000/routes/api/delete-emp`, { id: event.target.getAttribute("name") })
            .then((res) => {
                alert("Successfully Deleted");

                navigate("../emp-update", { replace: true })

            }
            )
    
  }


  return (
    <div>
      <AdminNav />
      <img className='empimage' src='https://www.cmarix.com/blog/wp-content/uploads/2021/12/Blog-01-6-1.jpg' alt="cover" />
      <h3 style={{textAlign:'center'}}>Employees</h3>
      {employee.map((i,key)=>(
        <>
          <div className='alldetails'>
            <img src={i.image} className="image" alt="" />
            <div className='details'>
              <span style={{fontWeight:'bold,',color:'blue'}}>{i.name}</span>
              <br></br>
              <span>{i.role}</span>
              <br></br>
              <span>{i.email}</span>
              <hr /> 
            </div>
          </div>
          <div className='button'>
            <Link key={key} to={`/emp-updateform/${i._id}`}><button className='edit'>EDIT</button></Link>
            <button className='delete' name={i._id} onClick={deleteEmpData}>DELETE</button>
          </div>
        </>
     ))}
    </div>
  )
}

export default EmployeeUpdate;