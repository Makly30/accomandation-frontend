import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import User from "./Pages/User/User";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Admin/Login";
import SignUp from "./Pages/Admin/Sigup";
import DormDetail from "./Pages/User/Slug/DormDetail";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import AdditionDorm from "./Pages/Admin/Dashboard/Add/AdditionDorm"
import AdditionRoom from "./Pages/Admin/Dashboard/Add/AdditionRoom";
import OptionContainer from "./Pages/Admin/Dashboard/Add/Option";
import DormDetailAdmin from "./Pages/Admin/Dashboard/DormDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      {/* client */}
      <Route path="welcome" element={<User/>}/>
      <Route path="dorm/:dormName" element={<DormDetail />}/>
      {/* admin */}
      <Route path="admin" element={<Admin/>}/>
      <Route path="admin/login" element={<Login/>}/>
      <Route path="admin/signup" element={<SignUp/>}/>
      <Route path="admin/dashboard" element={<Dashboard/>}>
        <Route path="add" element={<OptionContainer/>}/>
        <Route path="add/dorm" element={<AdditionDorm/>}/>
        <Route path="add/room" element={<AdditionRoom/>}/>
      </Route>
      <Route path="admin/dorm/:dormName" element={<DormDetailAdmin/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
