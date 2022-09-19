/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const OptionContainer=()=>{
  return (
    <div className="d-flex flex-row align-items-center  h-100 justify-content-center">
      <div className="d-flex flex-column ">
        <Link className="btn btn-primary my-1" to="/admin/dashboard/add/dorm">เพิ่มหอพัก</Link>
        <Link className="btn btn-primary my-1" to="/admin/dashboard/add/room">เพิ่มประเภทห้อง</Link>
      </div>
    </div>
   
  );
}
OptionContainer.propType={

}
export default OptionContainer;