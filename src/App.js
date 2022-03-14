import React from 'react'
import './App.css';
import Landing from "./Component/Landing";
import Lesson from './Component/Lesson';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SidebarData } from './Component/SidebarData';
// import Sidebar from './Component/Navbar';

function App() {

  return (
    <div className="App">

        <div className='main-content'>
                <Navbar/>
          <Router>
            <div>
              <Routes>
                <Router path='/' component={<Landing/>}/>
                <Route path='courses' component={<Lesson/>}/>
              </Routes>
              {/* <Lesson/> */}

            </div>
          </Router>
        </div>
    </div>
  );
}

export default App;
