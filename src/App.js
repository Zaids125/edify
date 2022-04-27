import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import PublicRoutes from "./routes/PublicRoute";
import Navbar from "./Component/Navbar/Navbar";
import PrivateRoutes from "./routes/PrivateRoute";
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Sidebar from './Component/SideBar';

function App() {
  const authReducer = useSelector((state) => state.authReducer);

  return (
    <div className="App">
      {/* <Landing /> */}
      <Navbar />
      {authReducer.token ? <PrivateRoutes /> : <PublicRoutes />}
      <div className="main-content">
        {/* <SideBar /> */}
        {/* <Lesson /> */}
      </div>
      {/* <CourseCard /> */}
    </div>
  );
}

export default App;
