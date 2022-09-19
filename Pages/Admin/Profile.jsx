import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EditProfile from "./Dashboard/Edit/EditProfile";
import PropTypes from "prop-types"
const Profile=({access_token,closeModal})=>{
  console.log(access_token)
  const [profile,setProfile]=useState({});
  const [showEditProfile,setShowEditProfile]=useState(false)
  const getProfile=async()=>{
    try {
      const response=await axios.get("http://localhost:8000/api/admin/profile",{
        headers:{
          "Authorization":`Bearer ${access_token}`},
      
      });
      setProfile(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{getProfile();},[])
  useEffect(()=>{getProfile();},[showEditProfile])
  // const handleShowChangePassword=(e)=>{
  //   e.preventDefault()
  // }
  const handleShowEditProfile=(e)=>{
    e.preventDefault()
    setShowEditProfile(true)
  }
  const handleCloseModal=()=>{
    setShowEditProfile(false)
  }
  return (
    <div className="position-absolute start-0 end-0 top-0 bottom-0 d-grid  align-content-center bg-dark bg-opacity-75">
      {!showEditProfile&&(
        <div className="d-flex  gap-3 align-items-center justify-content-center   " >
          <div className="d-flex flex-column bg-light gap-2">
            <div className="card ">
              <div className="d-flex flex-column gap-2 mx-2 my-2">
                <div className="d-flex flex-row justify-content-center justify-content-center">
                  {(profile.image&&(<img src={profile.image} width="120"/>))||(!profile.image&&(<img src="https://via.placeholder.com/300.png/09f/fff" className="rounded rounded-circle"  width="120" alt="..."/>))}
                  <button type="button" onClick={()=>{closeModal()}} className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="px-3 py-2">
                  <p>username: {profile.username}</p>
                  <p>email: {profile.email}</p>
                  <p>Thai ID: {profile.thai_id}</p>
                  <p>Join Date: {profile.created_at}</p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center gap-2 my-2">
              <button className="btn btn-warning text-primary " onClick={handleShowEditProfile}>Edit Profile</button>
              {/* <button className="btn btn-primary " onClick={handleShowChangePassword}>Change Password</button> */}
            </div>    
          </div>

        </div>
      )}

      {showEditProfile&&(<EditProfile access_token={access_token} profile={profile} closeModal={handleCloseModal}/>)}
    </div>)
}
Profile.propTypes={
  access_token:PropTypes.string.isRequired,
  closeModal:PropTypes.func.isRequired
}
export default Profile;