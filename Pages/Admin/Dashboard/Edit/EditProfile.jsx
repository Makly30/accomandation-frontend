/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import PropTypes from "prop-types"
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
const EditProfile=({closeModal,access_token,profile})=>{
  console.log(access_token)
  const [admin,setAdmin]=useState(profile);
  const username=useRef(null);
  const email=useRef(null);
  const thai_id=useRef(null);
  const image=useRef(null)
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("hello edit profile")
    axios.put(`http://localhost:8000/api/admin/profile/${profile.id}`,{
      username:username.current.value,
      email:email.current.value,
      thai_id:thai_id.current.value,
      image:image.current.value,
    },{headers:{"Authorization":`Bearer ${access_token}`}}).then(response=>
    { 
      console.log(response)
      closeModal()
    }
    ).catch(error=>console.log(error.response))
  };
  const onInput=(requestValue)=>(e)=>{
    e.preventDefault();
    switch(requestValue){
    case "username":
      admin.username=username.current.value;
      setAdmin({...admin})
      break
    case "email":
      admin.email=email.current.value;
      setAdmin({...admin})
      break
    case "image":
      admin.image=image.current.value;
      setAdmin({...admin})
      break;
    default:
      admin.thai_id=thai_id.current.value;
      setAdmin({...admin})
      break;
    }
    
  }
  return (<div className="position-absolute start-0 end-0 top-0 bottom-0 d-grid  align-content-center bg-dark bg-opacity-25">
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex w-50 p-3 align-items-center justify-content-center bg-white rounded">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <h3>แก้ไขข้อมูส่วนตัว</h3>
            <button type="button" onClick={()=>{closeModal()}} className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
     
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row justify-content-start  align-items-center gap-3"> 
              <div className="d-flex flex-column ">
                <div className="mb-3 ">
                  <label htmlFor="username" className="form-label">ชื่อ</label>
                  <input type="text" ref={username} className="form-control" id="username" onInput={onInput("username")} value={admin.username}/>
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" ref={email} className="form-control" id="email" onInput={onInput("email")} value={admin.email}/>
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_name" className="form-label">Thai ID</label>
                  <input type="number" ref={thai_id} className="form-control" id="thai_id" onInput={onInput("thai_id")} value={admin.thai_id}/>
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="image" className="form-label">Profile Image</label>
                  <input type="text" ref={image} className="form-control" id="image" onInput={onInput("image")} value={admin.image}/>
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

  </div>)
}
EditProfile.propTypes={
  closeModal:PropTypes.func.isRequired,
  access_token:PropTypes.string.isRequired,
  profile:PropTypes.object.isRequired
}
export default EditProfile;