// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link ,Navigate,Outlet, Route } from "react-router-dom";
import "../../css/Admin/Admin.css"
const Admin=()=>{
  return <div className="d-flex justify-content-center align-items-center" style={{"height":"700px"}}>
 
    <div className="d-flex flex-column  align-items-center mx-5 my-5">
      <div className="d-flex flex-row container1 justify-content-center p-5" style={{height:"200px",width:"500px"}}>
        
      </div>
      <div className="  p-2 my-3">
        <h4>ระบบเพิ่มข้อมูลหอพักนักศึกษาใกล้ RBRU</h4>
      </div>
      <div className="  mb-3">
        <Link to="/admin/login"   className="btn fw-bold" style={{"borderColor":"#1814E1","color":"#1814E1"}}>Login</Link>
      </div>
      <div className=" mb-5">
        <Link to="/admin/signup"  className="btn text-light fw-bold" style={{"backgroundColor":"#1814E1"}}>Sign Up</Link>
      </div>
    </div>
  </div>
}
export default Admin;