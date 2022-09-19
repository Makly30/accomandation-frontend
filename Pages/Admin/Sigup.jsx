/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
const SignUp=()=>{
  const userName=useRef(null);
  const password=useRef(null);
  const thaiId=useRef(null);
  const email=useRef(null);
  const confirmPassword=useRef(null);
  const [adminData,setAdminData]=useState([]);

  const SignUp=useCallback((e)=>{
    e.preventDefault();
    axios.get("http://localhost:8000/sanctum/csrf-cookie",{"headers":{"Accept": "application/json"}}).then(async response => {
  
      await axios.post("http://localhost:8000/api/signup",{username:userName.current.value,
        thai_id:thaiId.current.value,
        password:password.current.value,
        password_confirmation:confirmPassword.current.value,
        email:email.current.value
      },{
        "headers":{
          "Content-Type":"Application/json","Accept": "application/json"},
        withCredentials:true
      }).then(response=>{
    
      }).catch(error=>console.error());
      await   axios.post("http://localhost:8000/api/login",
        {  email:email.current.value,
          password:password.current.value,
        },{
          "headers":{
            "Content-Type":"Application/json","Accept": "application/json"},
          withCredentials:true
        }).then(response=>{
        setAdminData(response.data)
      }).catch(error=>console.error());
    },[]);});
  
  
  return (<div>
    <div className="d-flex flex-column  align-items-center mx-5 my-5">
      <div className="d-flex flex-row container1 justify-content-center p-5" style={{height:"200px",width:"500px"}}>
        
      </div>
      <div className="  p-2 my-3">
        <h4>ลงทะเบียนเป็น Admin</h4>
      </div>
      <div>
        <form onSubmit={SignUp}>
          <div className="d-flex flex-row justify-content-center align-content-center ">
            <div className="d-flex flex-column mx-5 w-auto">
              <div className="mb-3 ">
                <label htmlFor="userName" className="form-label">Username</label>
                <input ref={userName} type="text" className="form-control" id="userName" placeholder="username"/>
              </div> 
              <div className="mb-3 ">
                <label htmlFor="password" className="form-label">Password</label>
                <input ref={password} type="password" className="form-control" id="password" placeholder="password"/>
              </div> 
              <div className="mb-3 ">
                <label htmlFor="confirmPassword" className="form-label">Confirm-Password</label>
                <input ref={confirmPassword} type="password" className="form-control" id="confirmPassword" placeholder="Re-password"/>
              </div> 
            </div>
            <div className="d-flex flex-column mx-5 w-auto">
              <div className="mb-3 ">
                <label htmlFor="Email" className="form-label">Email</label>
                <input type="email" ref={email} className="form-control" id="email" placeholder="example@gmail.com"/>
              </div> 
              <div className="mb-3 ">
                <label htmlFor="thai_id" className="form-label">Thai ID</label>
                <input type="number" ref={thaiId} className="form-control" id="thai_id" placeholder="thai id card"/>
              </div> 
              <div className="mb-3 text-center">
                <button type="submit"  className="btn text-light fw-bold" style={{"backgroundColor":"#1814E1"}}>Sign Up</button>
              </div> 
            </div>
          </div>  
        </form>
      </div>
    </div>
    {adminData.data&&<Navigate to="/admin/dashboard" replace={true} state={{"admin":adminData}}/>}
  </div>)
}
export default SignUp;