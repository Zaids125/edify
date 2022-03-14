import React, {useState} from "react";
import logo from "../Imgs/Logo.png"; 
import illust1 from "../Imgs/Illust1.png"; 
import icon from "../Imgs/icon.png"; 
import icon1 from "../Imgs/icon-1.png"; 
import icon2 from "../Imgs/icon-2.png"; 
import icon3 from "../Imgs/icon-3.png"; 



import "./Landing.css"
import Modal from "./Modal";
import Signup from "./Signup";
import Login from "./Login";

function Landing() {
    const [isSignOpen, setisSignOpen] = useState(false)
    const [isLogOpen, setisLogOpen] = useState(false)
  return (
    <div className="landing-body">
        <nav className="nav-container">
            <div className="logo">
                <img src={logo} alt=""  className="logoImg" height="20px" width="20px"/>
                <p className="logotxt">Edify</p>
            </div>
            <div className="Actions">
                <button onClick={()=> setisSignOpen(true)} className="signup-btn">Sign up</button>
                <button onClick={()=> setisLogOpen(true)} className="login-btn">Log in</button>
            </div>
        </nav>
        <Modal open={isSignOpen} onClose={()=> setisSignOpen(false)}>
            <Signup/>
        </Modal>
        <Modal open={isLogOpen} onClose={()=> setisLogOpen(false)}>
            <Login/>
        </Modal>
        <div className="section-1">
            <div className="texts">
                <p className="head">Make learning fun!!</p>
                <p className="caption">Any language, on any device, for all ages!</p>
                <button onClick={()=> setisSignOpen(true)} className="btn">Sign up for free</button>
            </div>
            <img src={illust1} alt="hello"/>
        </div>

        <div className="section-2">
            <p>Who edify is for?</p>
            <div className="row-cards">
                <div className="card">
                    <img alt="" src={icon}/>
                    <h3> At School</h3>
                    <p>Engaging group and distance learning for teachers and students.</p>
                </div>
                <div className="card">
                    <img alt="" src={icon1}/>
                    <h3> At Work</h3>
                    <p>For training, e-learning, interactive presentations and more.</p>
                </div>
                <div className="card">
                    <img alt="" src={icon2}/>
                    <h3> At Home</h3>
                    <p>Apps and games for family fun or home study.</p>
                </div>
                <div className="card">
                    <img alt="" src={icon3}/>
                    <h3>Learning App</h3>
                    <p>Engage kids with the Kahoot! family of learning apps</p>
                </div>
            </div>
            <div className="section-3">

            </div>
        </div>
    </div>

  );
}

export default Landing;
