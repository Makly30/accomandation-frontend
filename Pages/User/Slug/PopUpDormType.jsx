import React from "react";
import PropTypes from "prop-types";
import  "../../../css/User/PopUpDormType.css"
import { useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
const temporaryData=[
  {id:1,dormName:"ห้องเล็ก", dormSlug:"DormSOKSABAY", profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqj1KuGp-LUNeJunZKT_jaHht0dzjZfdghw&usqp=CAU"},
  {id:2,dormName:"ห้องกลาง", dormSlug:"DormSOKSAN", profile:"https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/hotels/19000000/18360000/18354900/18354839/c817f90a_z.jpg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit"},
  {id:3,dormName:"ห้องใหญ่", dormSlug:"DormChan",profile:"https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2013/06/thumb_720_450_dreamstime_xxl_20152679-Custom.jpg" },
]
const PopUpDormType=({closeModal,dorm_id})=>{
  const handleClose=(e)=>{
    e.preventDefault();
    closeModal(false);
  }
  const [rooms,setRooms]=useState([]);
  const getRoom=useCallback(async()=>{
    try {
      const response=await axios.get(`http://localhost:8000/api/accomadation/dorm/${dorm_id}/room`);
      console.log(response.data)
      setRooms(response.data.data)
    } catch (error) {
      console.error(error)
    }
  },[]);
  useEffect(()=>{getRoom()},[]);
  return (<div>
    <div className="position-fixed start-0 end-0 top-0 bottom-0 d-grid  align-content-center bg-dark bg-opacity-50" >
      <div className="container w-50 animate__animated animate__zoomIn  bg-light my-5 rounded overflow-auto ">
        <div className="">
          <div className="d-flex flex-row my-2">
            <div className=" d-flex flex-column w-50"></div>
            <div className="d-flex flex-column w-50">
              <div className="d-flex flex-row gap-4 justify-content-between">
                <div className="d-flex flex-column w-50 text-start fs-4 fw-bold ">ประเภทห้อง</div>
                <div className="d-flex flex-column align-items-end w-50 text-end">
                  <button type="button" onClick={handleClose} className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button></div>
              </div>
            </div>
          </div>  
          {rooms.length>0&&rooms.map((room)=>(
            <div key={room.id}>
              <div className="d-flex flex-row my-2 gap-3 p-2">
                <div className="d-flex flex-column  text-center">
                  <img src={room.room_profile} alt={room.name} width="250" height="150" />
                </div>
                <div className="d-flex flex-column align-items-center text-left  ">
                  <p className="fw-bold fs-5 text-primary">{room.name}</p>
                  <p className="fw-bold text-danger">รายละเอียด</p>
                  <p className="">ราคา: {room.price} บาท</p>
                  <p>สิ่งอำน่วยความสะดวก: {room.facilities}</p>
                </div>
              </div>
            </div> 
          ))}  
          {
            ( rooms.length==0)&&(
              <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="my-5 text-center alert alert-danger" role={alert}>
              ยังไม่พบข้อมูล
                </div>
              </div>
            )
          }
        </div>
        
        
      </div>
    </div>
  </div>)
}

PopUpDormType.propTypes={
  closeModal:PropTypes.func.isRequired,
  dorm_id:PropTypes.number.isRequired
}
export default PopUpDormType;