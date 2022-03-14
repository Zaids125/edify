import React from 'react'
import './App.css';
import Landing from "./Component/Landing";
import Lesson from './Component/Lesson';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Sidebar from './Component/Navbar';

function App() {

  return (
    <div className="App">

        <div className='main-content'>
                <Navbar/>
          <Router>
            <div>
              <Routes>
                <Router path='/' element={<Landing/>}/>
                <Route path='courses' element={<Lesson/>}/>
              </Routes>
            </div>
          </Router>
        </div>
    </div>
  );
}

export default App;
