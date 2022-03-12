import React from 'react';
import employeeupdate from './Employeedb';
import './EmployeeUpdate.css';
import EmployeeUpdateform from './EmpUpdateform';
import {Link} from 'react-router-dom';
import AdminNav from '../header/AdminNav';
import Footer from '../footer/Footer';

function EmployeeUpdate() {
  return (
    <div>
      <div>
        <AdminNav />
        <img className='empimage' src='https://www.cmarix.com/blog/wp-content/uploads/2021/12/Blog-01-6-1.jpg' alt="cover" />
        <h3 style={{textAlign:'center'}}>EMPLOYEES</h3>
        {employeeupdate.map((i,key)=>(
        <>
          <div className='alldetails'>
            <img src={i.image} className="image" alt="" />
            <div className='details'>
              <span style={{color:'green',fontWeight:'bold'}}>{i.empname}</span>
              <br></br>
              <span>{i.role}</span>
              <br></br>
              <span>{i.emailid}</span> 
            </div>
          </div>
          <div className='button'>
            <Link to={'/emp-updateform/'+i.empname}><button className='edit'>{i.edit}</button></Link>
            <button className='delete'>{i.delete}</button>
          </div>
        </>
      ))}
        
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default EmployeeUpdate;