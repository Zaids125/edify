import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import LogoFull  from '../Imgs/logofull.png'

function Navbar() {

  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}
        <div>

        <img src={LogoFull}/>
        <nav className={'nav-menu'}>
          <ul className='nav-menu-items' >
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;