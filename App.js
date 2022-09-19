
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import "./index.css";
import "./sass/App.scss"
function App() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center" style={{"height":"700px"}}>
        <div className="d-flex flex-column card justify-content-center align-items-center gap-4 " style={{"height":"500px","width":"1000px","backgroundColor":"#071a52"}} >
          <div className="d-flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" style={{"color":"#16b978"}} width="48" height="48" fill="currentColor" className="bi bi-map-fill indigo" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
            </svg>
            <h1 className="fw-bold mx-5 text-light">ระบบค้นหาหอพักนักศึกษาอยู่ใกล้ RBRU</h1> 
          </div>
          <div className="d-flex flex-column justify-content-center mt-5">
            <Link to="/welcome" className="btn text-light fw-bold" style={{"backgroundColor":"#16b978"}}>เข้าชมเว็บไซต์</Link>
          </div>
          <div className="d-flex flex-columnd justify-content-center mt-4">
            <Link to="/admin" className="btn text-light fw-bold" style={{"backgroundColor":"#16b978"}}>Admin</Link>
          </div> 
        </div>
      
      </div>
    </div>
      
  );
}

export default App;
