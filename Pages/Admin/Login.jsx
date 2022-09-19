/* eslint-disable no-unused-vars */
import axios from "axios";
import React, {  useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login=()=>{
  const email=useRef(null);
  const password=useRef(null);

  const [adminData,setAdminData]=useState([]);
  const Login=useCallback((e)=>{
    e.preventDefault();
    axios.get("http://localhost:8000/sanctum/csrf-cookie",{"headers":{"Accept": "application/json"}}).then(response => {

      axios.post("http://localhost:8000/api/login",
        {  email:email.current.value,
          password:password.current.value,
        },{
          "headers":{
            "Content-Type":"Application/json","Accept": "application/json"},
          withCredentials:true
        }).then(response=>{
        setAdminData(response.data)
      }).catch(error=>console.error());
    })},[]);

  console.log(adminData)

  return (<div style={{"height":"600px"}} className="d-flex justify-content-center align-items-center">
    <div className="d-flex flex-column  align-items-center mx-5 my-5">
      <div className="d-flex flex-row container1 justify-content-center p-5" style={{height:"200px",width:"500px"}}>
        
      </div>
      <div className="  p-2 my-3">
        <h4>เข้าสู่ระบบ</h4>
      </div>
      {(adminData.login===false&& !adminData.login)&&(<div className="alert alert-danger" role={alert}>
        กรุณาตรวจสอบ Email หรือ Password
      </div>)}
      <div className="d-flex flex-row justify-content-center align-content-center ">
        <form onSubmit={Login}>
          <div className="d-flex flex-column ">
            <div className="mb-3 ">
              <label htmlFor="Email" className="form-label">Email</label>
              <input type="email" ref={email} className="form-control" id="email" placeholder="example@gmail.com"/>
            </div> 
            <div className="mb-3 ">
              <label htmlFor="Password" className="form-label">Password</label>
              <input type="password" ref={password} className="form-control" id="password" placeholder="password"/>
            </div> 
            <div className="mb-3 text-center">
              <button type="submit"  className="btn text-light fw-bold" style={{"backgroundColor":"#1814E1"}}>Login</button>
            </div> 
          </div>
        </form>
      </div>
    </div>
   
    {adminData.login&&<Navigate to="/admin/dashboard" replace={true} state={{admin:adminData}} />}
  </div>)
}
export default Login;