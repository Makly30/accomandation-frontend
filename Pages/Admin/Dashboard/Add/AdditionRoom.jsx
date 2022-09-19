/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types"
import { useCallback } from "react";
import { useEffect } from "react";
const AdditionRoom=({closeModal,access_token,dorms})=>{
  const name=useRef(null);
  const price=useRef(null);
  const bed=useRef(null);
  const room_profile=useRef(null);
  const facilities=useRef(null);
  const dorm_id=useRef(null);

  const handleSubmit=useCallback(async(e)=>{
    e.preventDefault();
    await   axios.post("http://localhost:8000/api/admin/dorm/room",{
      name:name.current.value,
      price:price.current.value,
      bed:bed.current.value,
      facilities:facilities.current.value,
      room_profile:room_profile.current.value,
      dorm_id:dorm_id.current.value
    },{headers:{
      "Authorization":`Bearer ${access_token}`
    }}).then(response=>
    { 
      console.log(response)
      closeModal()
    }
    ).catch(error=>console.log(error.response))
  },[])
  return (
    <div className="position-absolute start-0 end-0 top-0 bottom-0 d-grid  align-content-center bg-dark bg-opacity-50">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex w-50 p-3 align-items-center justify-content-center bg-white rounded">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
              <h3>เพิ่มประเภทห้อง</h3>
              <button type="button" onClick={()=>{closeModal()}} className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
           
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row justify-content-start  align-items-center gap-3"> 
                <div className="d-flex flex-column ">
                  <div className="mb-3 ">
                    <select ref={dorm_id} id="dorm_id" className="form-control">
                      {dorms.map(dorm=>(
                        <option key={dorm.id} value={dorm.id}>{dorm.dorm_name}</option>
                      ))}
                    </select>
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="name" className="form-label">ชื่อห้อง</label>
                    <input type="text" ref={name} className="form-control" id="name" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="price" className="form-label">ราคา</label>
                    <input type="number" ref={price} className="form-control" id="price" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="bed" className="form-label">จำนวนเตียง</label>
                    <input type="number" ref={bed} className="form-control" id="bed" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="room_profile" className="form-label">รูปประกอบ</label>
                    <input type="text" ref={room_profile} className="form-control" id="room_profile" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="facilities" className="form-label">สิ่งอำน่วยความสะดวก</label>
                    <input type="text" ref={facilities} className="form-control" id="facilities" />
                  </div> 
                </div>
              </div>
              <div className="d-flex flex-row ">
                <div className="mb-3 text-center">
                  <button type="submit"  className="btn text-light fw-bold" style={{"backgroundColor":"#1814E1"}}>เพิ่ม</button>
                </div> 
              </div>
            </form>
          </div>
        </div>
      </div>
   
    </div>
    
  
  );
}
AdditionRoom.propTypes={
  closeModal:PropTypes.func.isRequired,
  access_token:PropTypes.string.isRequired,
  dorms:PropTypes.array.isRequired
}
export default AdditionRoom;