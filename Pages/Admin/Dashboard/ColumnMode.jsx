/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import EditDorm from "./Edit/EditDorm";

const ColumnMode=({dorms,access_token,manageDorm})=>{
 
  const [showEditPopUpModal,setShowEditPopUpModal]=useState(false);
  const [dorm,setDorm]=useState()
  const handleDeleteDorm=(requestDormId)=>(e)=>{
    e.preventDefault();
    axios.delete("http://localhost:8000/api/admin/dorm",{params:{id:`${requestDormId}`}, headers:{"Authorization":`Bearer ${access_token}`}}).then(response=>{console.log(response);
      manageDorm(true)
     
    }).catch(console.error)
  }
  const handleCloseModal=()=>{
    setShowEditPopUpModal(false)
  };
  const handleOpenModal=(requestDorm)=>(e)=>{
    e.preventDefault()
    setDorm(requestDorm)
    setShowEditPopUpModal(true)
   
  }
  return (<div className="d-flex flex-row gap-2">
    {dorms.map((dorm)=>(
      <div key={dorm.id} className ="d-flex flex-column w-25">
        <div>
          <Link to={{pathname :`/admin/dorm/${dorm.dorm_name}`}} state={{dorm:dorm,access_token:access_token}} style={{textDecoration:"none"}}>
            <div className="card">
              <img src={dorm.dorm_profile} className="card-img-top" alt="..." width="150" height="150"/>
              <div className="card-body">
                <h5 className="card-title text-center">{dorm.dorm_name}</h5>
              </div>
            </div></Link>
          <div className="d-flex flex-row justify-content-center">
            <button className="rounded mt-2 mx-2 bg-warning text-white  border-white" onClick={handleOpenModal(dorm)}>
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button className="rounded mt-2 mx-2 bg-danger text-white border-white " onClick={handleDeleteDorm(dorm.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button> 
          </div>  
        </div>
      </div>
    ))}
    {showEditPopUpModal&&(<EditDorm closeModal={handleCloseModal} access_token={access_token} dorm={dorm}/>)}
  </div>)
}
ColumnMode.propTypes={
  dorms:PropTypes.array.isRequired,
  access_token:PropTypes.string.isRequired,
  manageDorm:PropTypes.func.isRequired
}
export default ColumnMode;