/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { Link,  Navigate,  Outlet, useLocation } from "react-router-dom";

import { useCallback } from "react";
import axios from "axios";
import ColumnMode from "./ColumnMode";
import AdditionDorm from "./Add/AdditionDorm";
import AdditionRoom from "./Add/AdditionRoom";
import Profile from "../../Admin/Profile"
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dashboard=()=>{
  const location=useLocation();
  const admin=location.state.admin;
  const access_token=admin.token;
  const admin_id=admin.data.id;
  const [manageDorm,setManageDorm]=useState(false);
  const [dorms,setDorms]=useState([]);
  const [nextToProfile,setNextToProfile]=useState(false);
  const [logout,setLogout]=useState(false);
  const [profile,setProfile]=useState({});
  const [showGroupAddButton, setShowGroupAddButton]=useState(false);
  const [showAddPopUpModal,setShowAddPopUpModal]=useState({addDorm:false,addRoom:false});
  const getDorm=useCallback(async()=>{
    try {
      const response=await axios.get(`http://localhost:8000/api/admin/${admin_id}/dorm`,{
        headers:{
          "Authorization":`Bearer ${access_token}`},
      
      });
      setDorms(response.data.data)
      setManageDorm(false)
    } catch (error) {
      setLogout(true)
      console.error(error)
    }
  },[]);
  const getProfile=async()=>{
    try {
      const response=await axios.get("http://localhost:8000/api/admin/profile",{
        headers:{
          "Authorization":`Bearer ${access_token}`},
      
      });
      setProfile(response.data.data)
    } catch (error) {
      setLogout(true)
      console.error(error)
    }
  }
  useEffect(()=>{getDorm()},[showAddPopUpModal,manageDorm]);
  useEffect(()=>{getDorm();getProfile();},[]);
  useEffect(()=>{getProfile();},[nextToProfile])
  const handleShowDropdowns=useCallback((e)=>{
    e.preventDefault();
    if(showGroupAddButton){
      setShowGroupAddButton(false)
    }else{setShowGroupAddButton(true)}
  },[showGroupAddButton])
  const handleOpenPopUp=useCallback((requestValue)=>(e)=>{
    e.preventDefault()
    if(requestValue==="dorm"){
      setShowAddPopUpModal({addDorm:true,addRoom:true})
    }else{
      setShowAddPopUpModal({addDorm:false,addRoom:true})
    }
  },[showAddPopUpModal])
  const handleCloseModal=()=>{
    setShowAddPopUpModal({addDorm:false,addRoom:false})
  };
  const handleLogOut=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8000/api/logout",{},{headers:{"Authorization":`Bearer ${access_token}`}}).then(response=>{console.log(response);
      setLogout(true);
     
    }).catch(console.error)
  }
  const handleCloseProfile=()=>{
   
    setNextToProfile(false)
  }
  return (
    <div>
      <div className="d-flex flex-column my-5">
        <div className="d-flex flex-row">
          <div className="d-flex flex-column w-25 align-items-center">
            <div className="btn-group w-25">
              <button type="button" className="btn btn-primary" onClick={handleShowDropdowns} >
                เพิ่ม
              </button>
              
            </div>
            {showGroupAddButton&&(
              <div className="d-flex flex-column mt-5 gap-3">
                <button type="button" className="btn btn-primary" onClick={handleOpenPopUp("room")} >
                เพิ่มประเภทห้อง
                </button>
                <button type="button" className="btn btn-primary" onClick={handleOpenPopUp("dorm")} >
                เพิ่มหอพัก
                </button>
              </div>
            )}
          </div>
          <div className="d-flex flex-column w-75">
            <div className="d-flex flex-row w-100 ">
              <div className="d-flex flex-column w-75">
                <h4>Dashboard</h4>
              </div>
              <div className="d-flex flex-column ">
                <div className="d-flex felx-row">
                  <div className="d-flex flex-column">
                    <button type="button" className="btn" onClick={()=>{setNextToProfile(true)}}>
                      {(profile.image&&( <img src={profile.image} className="rounded rounded-circle"  width="70" height="50" alt="..."/>))||(!profile.image&&( <img src="https://via.placeholder.com/300.png/09f/fff" className="rounded rounded-circle"  width="50" alt="..."/>))}
                     
                    </button>
                    <p className="text-center">{profile.username}</p>
                  </div>
                  <div className="d-flex flex-column">
                    <button className="btn" onClick={handleLogOut}><FontAwesomeIcon icon={faSignOut}/></button>
                  </div>

                </div>
               
              </div>
            </div>
            <ColumnMode dorms={dorms} access_token={access_token} manageDorm={setManageDorm}/>
          </div>
        </div>
        {
          ( ( showGroupAddButton&&showAddPopUpModal.addDorm)&&(<AdditionDorm closeModal={handleCloseModal} access_token={access_token}/>))
        ||(
          ( showGroupAddButton&&showAddPopUpModal.addRoom)&&(<AdditionRoom closeModal={handleCloseModal} access_token={access_token} dorms={dorms}/>))
        }
      </div>
      {(logout||admin===null)&&<Navigate to="/admin"/>}
      {nextToProfile&&(<Profile access_token={access_token} closeModal={handleCloseProfile} />)}
    </div>)
}
export default Dashboard;