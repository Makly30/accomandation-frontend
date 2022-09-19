/* eslint-disable no-unused-vars */
import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const EditDorm=({access_token,closeModal,dorm})=>{
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
  const [dormEdit,setDormEdit]=useState( dorm)

  const handleSubmit=useCallback(async(e)=>{
    e.preventDefault();
    await   axios.put(`http://localhost:8000/api/admin/dorm/${dorm.id}`,{
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
  const onInput=useCallback((requestElement)=>(e)=>{
    switch(requestElement){
    case "dorm_name":
      dormEdit[requestElement]=dorm_name.current.value
      setDormEdit({...dormEdit})
      break
    case "dorm_address":
      dormEdit[requestElement]=dorm_address.current.value
      setDormEdit({...dormEdit})
      break
    case "dorm_facebook":
      dormEdit[requestElement]=dorm_facebook.current.value
      setDormEdit({...dormEdit})
      break
    case "dorm_deposition":
      dormEdit[requestElement]=dorm_deposition.current.value
      setDormEdit({...dormEdit})
      break
    case "dorm_electric":
      dormEdit[requestElement]=dorm_electric.current.value
      setDormEdit({...dormEdit})
      break
    case "dorm_water":
      dormEdit[requestElement]=dorm_water.current.value
      setDormEdit({...dormEdit})
      break
    case "dorm_wifi":
      dormEdit[requestElement]=dorm_wifi.current.value
      setDormEdit({...dormEdit})
      break
    case "phone":
      dormEdit[requestElement]=phone.current.value
      setDormEdit({...dormEdit})
      break
    case "dorm_profile":
      dormEdit[requestElement]=dorm_profile.current.value
      setDormEdit({...dormEdit})
      break
    case "dorm_contract":
      dormEdit[requestElement]=dorm_contract.current.value
      setDormEdit({...dormEdit})
      break
    }
  },[]);
  return   <div className="position-absolute start-0 end-0 top-0 bottom-0 d-grid  align-content-center bg-dark bg-opacity-50">
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex w-50 p-3 align-items-center justify-content-center bg-white rounded">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <h3>แก้ไขข้อมูลหอพัก</h3>
            <button type="button" onClick={()=>{closeModal()}} className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
       
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row justify-content-start  align-items-center gap-3"> 
              <div className="d-flex flex-column ">
                <div className="mb-3 ">
                  <label htmlFor="dorm_name" className="form-label">ชื่อหอพัก</label>
                  <input type="text" ref={dorm_name} className="form-control" id="dorm_name" onInput={onInput("dorm_name")} value={dormEdit.dorm_name}/>
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_address" className="form-label">ที่อยู่</label>
                  <input type="text" ref={dorm_address} className="form-control" id="dorm_address" onInput={onInput("dorm_address")} value={dormEdit.dorm_address} />
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_facebook" className="form-label">ชื่อ Facebook</label>
                  <input type="text" ref={dorm_facebook} className="form-control" id="dorm_facebook" onInput={onInput("dorm_facebook")} value={dormEdit.dorm_facebook} />
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_profile" className="form-label">ภาพประกอบ</label>
                  <input type="text" ref={dorm_profile} className="form-control" id="dorm_profile" onInput={onInput("dorm_profile")} value={dormEdit.dorm_profile} />
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="number" ref={phone} className="form-control" id="phone" onInput={onInput("phone")} value={dormEdit.phone}/>
                </div> 
              </div>
              <div className="d-flex flex-column">
                <div className="mb-3 ">
                  <label htmlFor="dorm_deposition" className="form-label">ค่ามัดจำ</label>
                  <input type="number" ref={dorm_deposition} className="form-control" id="dorm_deposition" onInput={onInput("dorm_deposition")} value={dormEdit.dorm_deposition}/>
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_contract" className="form-label">สัญญาเช่า ( เดือน )</label>
                  <input type="number" ref={dorm_contract} className="form-control" id="dorm_contract" onInput={onInput("dorm_contract")} value={dormEdit.dorm_contract}/>
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_electric" className="form-label">ค่าไฟ้ ต่อหน่วย </label>
                  <input type="number" ref={dorm_electric} step="0.1" className="form-control" id="dorm_electrict" onInput={onInput("dorm_electric")} value={dormEdit.dorm_electric}/>
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_water" className="form-label">ค่านำ้ ต่อหน่วย </label>
                  <input type="number" ref={dorm_water} step="0.1"  className="form-control" id="dorm_water" onInput={onInput("dorm_water")} value={dormEdit.dorm_water}/>
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_wifi" className="form-label">ค่า Wifi ต่อเดือน </label>
                  <input type="number" ref={dorm_wifi} step="0.1"  className="form-control" id="dorm_wifi" onInput={onInput("dorm_wifi")} value={dormEdit.dorm_wifi}/>
                </div> 
              </div>
            </div>
            <div className="d-flex flex-row ">
              <div className="mb-3 text-center">
                <button type="submit"  className="btn text-light fw-bold" style={{"backgroundColor":"#1814E1"}}>แก้ไข</button>
              </div> 
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
}
EditDorm.propTypes={
  access_token:PropTypes.string.isRequired,
  closeModal:PropTypes.func.isRequired,
  dorm:PropTypes.array.isRequired
}
export default EditDorm;