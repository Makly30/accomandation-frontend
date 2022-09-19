/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types"
import { useCallback } from "react";
const AdditionDorm=({closeModal,access_token})=>{
  const dorm_name=useRef(null);
  const dorm_address=useRef(null);
  const dorm_facebook=useRef(null);
  const phone=useRef(null);
  const dorm_deposition=useRef(null);
  const dorm_contract=useRef(null);
  const dorm_electric=useRef(null);
  const dorm_water=useRef(null);
  const dorm_wifi=useRef(null);
  const dorm_profile=useRef(null);


  const handleSubmit=useCallback(async(e)=>{
    e.preventDefault();
    await   axios.post("http://localhost:8000/api/admin/dorm",{
      dorm_name:dorm_name.current.value,
      dorm_address:dorm_address.current.value,
      dorm_facebook:dorm_facebook.current.value,
      dorm_wifi:dorm_wifi.current.value,
      dorm_water:dorm_water.current.value,
      dorm_deposition:dorm_deposition.current.value,
      dorm_contract:dorm_contract.current.value,
      dorm_electric:dorm_electric.current.value,
      phone:phone.current.value,
      dorm_profile:dorm_profile.current.value,
 
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
              <h3>เพิ่มหอพัก</h3>
              <button type="button" onClick={()=>{closeModal()}} className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
           
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row justify-content-start  align-items-center gap-3"> 
                <div className="d-flex flex-column ">
                  <div className="mb-3 ">
                    <label htmlFor="dorm_name" className="form-label">ชื่อหอพัก</label>
                    <input type="text" ref={dorm_name} className="form-control" id="dorm_name" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="dorm_address" className="form-label">ที่อยู่</label>
                    <input type="text" ref={dorm_address} className="form-control" id="dorm_address" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="dorm_facebook" className="form-label">ชื่อ Facebook</label>
                    <input type="text" ref={dorm_facebook} className="form-control" id="dorm_facebook" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="dorm_profile" className="form-label">ภาพประกอบ</label>
                    <input type="text" ref={dorm_profile} className="form-control" id="dorm_profile" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="number" ref={phone} className="form-control" id="phone" />
                  </div> 
                </div>
                <div className="d-flex flex-column">
                  <div className="mb-3 ">
                    <label htmlFor="dorm_deposition" className="form-label">ค่ามัดจำ</label>
                    <input type="number" ref={dorm_deposition} className="form-control" id="dorm_deposition" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="dorm_contract" className="form-label">สัญญาเช่า ( เดือน )</label>
                    <input type="number" ref={dorm_contract} className="form-control" id="dorm_contract" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="dorm_electric" className="form-label">ค่าไฟ้ ต่อหน่วย </label>
                    <input type="number" ref={dorm_electric} step="0.1" className="form-control" id="dorm_electrict" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="dorm_water" className="form-label">ค่านำ้ ต่อหน่วย </label>
                    <input type="number" ref={dorm_water} step="0.1"  className="form-control" id="dorm_water" />
                  </div> 
                  <div className="mb-3 ">
                    <label htmlFor="dorm_wifi" className="form-label">ค่า Wifi ต่อเดือน </label>
                    <input type="number" ref={dorm_wifi} step="0.1"  className="form-control" id="dorm_wifi" />
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
AdditionDorm.propTypes={
  closeModal:PropTypes.func.isRequired,
  access_token:PropTypes.string.isRequired
}
export default AdditionDorm;