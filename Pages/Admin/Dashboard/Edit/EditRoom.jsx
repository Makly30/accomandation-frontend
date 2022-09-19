/* eslint-disable no-unused-vars */
import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const EditRoom=({access_token,closeModal, room})=>{
  const name=useRef(null);
  const bed=useRef(null);
  const price=useRef(null);
  const room_profile=useRef(null);
  const facilities=useRef(null);
  const [roomEdit,setRoomEdit]=useState( room)
  console.log(roomEdit)
  const handleSubmit=useCallback(async(e)=>{
    e.preventDefault();
    await   axios.put(`http://localhost:8000/api/admin/dorm/room/${room.id}`,{
      name:name.current.value,
      bed:bed.current.value,
      price:price.current.value,
      room_profile:room_profile.current.value,
      facilities:facilities.current.value,
    },{headers:{"Authorization":`Bearer ${access_token}`}}).then(response=>
    { 
      console.log(response)
      closeModal()
    }
    ).catch(error=>console.log(error.response))
  },[])
  const onInput=useCallback((requestElement)=>(e)=>{
    switch(requestElement){
    case "name":
      roomEdit[requestElement]=name.current.value
      setRoomEdit({...roomEdit})
      break
    case "price":
      roomEdit[requestElement]=price.current.value
      setRoomEdit({...roomEdit})
      break
    case "bed":
      roomEdit[requestElement]=bed.current.value
      setRoomEdit({...roomEdit})
      break
    case "room_profile":
      roomEdit[requestElement]=room_profile.current.value
      setRoomEdit({...roomEdit})
      break
    case "facilities":
      roomEdit[requestElement]=facilities.current.value
      setRoomEdit({...roomEdit})
      break
 
    }
  },[]);
  return   <div className="position-absolute start-0 end-0 top-0 bottom-0 d-grid  align-content-center bg-dark bg-opacity-50">
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex w-50 p-3 align-items-center justify-content-center bg-white rounded">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <h3>แก้ไขข้อมูห้อง</h3>
            <button type="button" onClick={()=>{closeModal()}} className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
       
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row justify-content-start  align-items-center gap-3"> 
              <div className="d-flex flex-column ">
                <div className="mb-3 ">
                  <label htmlFor="dorm_name" className="form-label">ชื่อห้อง</label>
                  <input type="text" ref={name} className="form-control" id="name" onInput={onInput("name")} value={roomEdit.name}/>
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_address" className="form-label">จำนวนเตียง</label>
                  <input type="number" ref={bed} className="form-control" id="bed" onInput={onInput("bed")} value={roomEdit.bed} />
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_facebook" className="form-label">ราคา</label>
                  <input type="number" ref={price} className="form-control" id="price" onInput={onInput("price")} value={roomEdit.price} />
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="dorm_profile" className="form-label">ภาพประกอบ</label>
                  <input type="text" ref={room_profile} className="form-control" id="room_profile" onInput={onInput("room_profile")} value={roomEdit.room_profile} />
                </div> 
                <div className="mb-3 ">
                  <label htmlFor="phone" className="form-label">สิ่งอำน่วยความสะดวก</label>
                  <input type="text" ref={facilities} className="form-control" id="facilities" onInput={onInput("facilities")} value={roomEdit.facilities}/>
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
EditRoom.propTypes={
  access_token:PropTypes.string.isRequired,
  closeModal:PropTypes.func.isRequired,
  room:PropTypes.object.isRequired
}
export default EditRoom;