import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './components/Header';
import './App.css';
import Experiance from './Pages/Experiance';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {  
  const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  // bg-dark 
  return (
    <div className="App bg-dark text-white">
      <BrowserRouter> 
        <ScrollToTop>
          {/* <Header/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/experiance" element={<Experiance/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
