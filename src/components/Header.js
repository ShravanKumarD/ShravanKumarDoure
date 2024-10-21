import React,{useState  } from 'react';
import "./Header.css";
import toggleKey from './../assets/toggleky.png';
import close from './../assets/close.png';
import { Link } from 'react-router-dom';
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">Blogs</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
        </nav>
      )}
    </div>
  )
}
