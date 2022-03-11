import React from 'react'
import Footer from '../footer/Footer';
import AdminNav from '../header/AdminNav';
// import image from '../../assets/profile.png';
import './EmpApprove.css';
import empapprove from './EmpapproveDB'
const EmpApprove = () => {
  return (
    <div>
      <AdminNav />
   
      <div>
        <img className='empimage' src='https://wallpaperaccess.com/full/4321941.jpg' alt="" />
        <h3 style={{textAlign:'center'}}>PENDING LIST</h3>
        {empapprove.map((i)=>(
        <>
          <div className='alldetails'>
            <img src={i.image} className="image" alt="" />
              <div className='details'>
                <span style={{color:'darkcyan',fontWeight:'bold'}}>{i.empname}</span>
                <br></br>
                <span>{i.role}</span>
                <br></br>
                <span>{i.emailid}</span> 
              </div>
          </div>
          <div className='button'>
            <button className='approve'>{i.approve}</button>
            <button className='reject'>{i.reject}</button>
          </div>
        </>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default EmpApprove;