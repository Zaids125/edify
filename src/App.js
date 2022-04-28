import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import PublicRoutes from "./routes/PublicRoute";
import Navbar from "./Component/Navbar/Navbar";
import PrivateRoutes from "./routes/PrivateRoute";
import Alert from "./Component/Alert/Alert";
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Sidebar from './Component/SideBar';

function App() {
  const authReducer = useSelector((state) => state.authReducer);
  const alertReducer = useSelector((state) => state.alertReducer);

  useEffect(() => {
    console.log({ alertReducer });
  }, [alertReducer]);

  return (
    <div className="App">
      {/* <Landing /> */}

      <Navbar />

      {alertReducer.error ? (
        <Alert
          type="error"
          alertMessage={alertReducer.error}
          location={alertReducer.errorLocation}
        />
      ) : alertReducer.success ? (
        <Alert
          type="success"
          alertMessage={alertReducer.success}
          location={alertReducer.errorLocation}
        />
      ) : alertReducer.info ? (
        <Alert
          type="info"
          alertMessage={alertReducer.info}
          location={alertReducer.errorLocation}
        />
      ) : null}

      {authReducer.token ? <PrivateRoutes /> : <PublicRoutes />}
      <div className="main-content"></div>
    </div>
  );
}

export default App;
