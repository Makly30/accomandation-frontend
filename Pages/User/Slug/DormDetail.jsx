/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PopUpDormType from "./PopUpDormType";

const DormDetail=()=>{
  const currentRouteParam=useParams();
  const [showPopUp,setShowPopUp]=useState(false);
  const location=useLocation();
  const data=location.state.dorm;
  const handleOpenPopUp=(e)=>{
    e.preventDefault();
    setShowPopUp(true);
  }
  return(<div>
    <div className="d-flex flex-row justify-content-center align-content-center fs-3 mt-5 mb-3">ระบบค้นหาข้อมูลหอพักนักศึกษาที่ใกล้ RBRU</div>
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-5"><Link to="/welcome">หน้าหลัก</Link></li>
          <li className="breadcrumb-item active fs-5" aria-current="page">{currentRouteParam.dormName}</li>
        </ol>
      </nav>
    </div>
    <div className="container">
      <div className="d-flex flex-row my-5 justify-content-between">
        <div className="d-flex flex-column mx-5 w-50 align-items-center">
          <div className="card" style={{"width": "18rem"}}>
            <img src={data.dorm_profile} className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text text-center">{data.dorm_name}</p>
            </div>
          </div>
          {/* <div className="d-flex flex-column">
            <div className="d-flex flex-row align-content-center my-3">
              <div className="d-flex flex-column text-warning"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg></div><div className="mx-2 d-flex flex-column"> {data.like} like</div></div>
          </div> */}
        </div>
        <div className="d-flex flex-column w-50 flex-fill align-items-start ">
          <h3 className="fw-bold">รายละเอียด</h3>
          <div className="d-flex flex-column align-items-start">
            <p>ค่ามัดจำ: {data.dorm_deposition} บาท</p>
            <p>สัญญาเช่า: {data.dorm_contract} เดือน</p>
            <p>ค่าไฟ้: {data.dorm_electric} บาท/ต่อหน่วย</p>
            <p>ค่าน้ำ: {data.dorm_water} บาท/ต่อหน่วย</p>
            <p>ค่าอินเตอร์เน็ต (wifi) : {data.dorm_wifi} บาท</p>
          </div>
          <button className="btn text-light" onClick={handleOpenPopUp} style={{"backgroundColor":"#1814E1"}}>ประเภทห้อง</button>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column ">
          <h5>Contact</h5>
          <div className="d-flex flex-row my-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg><span className="mx-2"><a style={{"textDecoration":"none"}}>{data.dorm_name}</a></span></div>
          <div className="d-flex flex-row my-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg><span className="mx-2">{data.dorm_address}</span></div>
          <div className="d-flex flex-row my-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg><span className="mx-2">{data.phone}</span></div>
        </div>
      </div>
    </div>
    {showPopUp==true&&(
      <PopUpDormType closeModal={setShowPopUp} dorm_id={data.id}/>
    )}
  </div>)
}

export default DormDetail;