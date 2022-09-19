/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const User=()=>{
  // eslint-disable-next-line no-unused-vars
  const [data,setData]=useState([]);
  const dorm_name=useRef(null);
  const getData=useCallback(async()=>{
    try {
      const response=await axios.get("http://localhost:8000/api/accomadation/dorm");
      console.log(response.data);
      setData(response.data.data)
    } catch (error) {
      console.error(error);
    }
  },[]);
  console.log(data)
  useEffect(()=>{getData()},[])
  const handleSubmit=useCallback((e)=>{
    e.preventDefault();
    axios.get("http://localhost:8000/api/accomadation/findDorm",{
      params:{
        dorm_name:dorm_name.current.value
      }
    }).then(resposne=>{console.log(resposne); setData(resposne.data.data)}).catch(console.error)
  },[]);
 
  return <div>
    <div className="d-flex flex-row justify-content-center my-5 fw-bold fs-2">ระบบค้นหาข้อมูลหอพักใกล้ RBRU</div>
    <div className="d-flex flex-row justify-content-center">
      <form className="d-flex flex-column w-25" onSubmit={handleSubmit}>
        <input type="search" ref={dorm_name} id="search" className="form-control " name="search" placeholder="search"/>
      </form> 
    </div>
    <div className="d-flex flex-row gap-3 mx-5 my-5 gap-3">
      {data.map(value=>(
        // eslint-disable-next-line react/jsx-key
        <div className="d-flex flex-column w-25 ">
          <Link to={{pathname :`/dorm/${value.dorm_name}`}} state={{dorm:value}} style={{textDecoration:"none"}}>
            <div className="card">
              <img src={value.dorm_profile} className="card-img-top" alt="..." width="150" height="150"/>
              <div className="card-body">
                <h5 className="card-title text-center">{value.dorm_name}</h5>
              </div>
            </div></Link>
        </div>
      ))} 
    </div>
    {
      data.length<=0&&(
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="my-5 text-center alert alert-danger" role={alert}>
              ยังไม่พบข้อมูล
          </div>
        </div>)
    } 
  </div>;
}
export default User;