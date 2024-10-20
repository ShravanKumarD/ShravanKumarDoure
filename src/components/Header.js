import React,{useState  } from 'react';
import "./Header.css";
import toggleKey from './../assets/toggleky.png';
import close from './../assets/close.png';

export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavbar = () => {
      setIsNavVisible(!isNavVisible);
    };
  return (
     <div className='toggle-container'>  
      <button className="toggle-btn" onClick={toggleNavbar}>
        {isNavVisible ? (
          <img src={close} alt="Close" className='toggleClose'/>
        ) : (
          <img src={toggleKey} alt="Open" className='toggleImg' />
        )}
      </button>
      {isNavVisible && (
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/experiance">Experience</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  )
}
