import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { OrbitControls, Sphere, MeshDistortMaterial,Cone,Shape,Extrude} from '@react-three/drei';
import './Home.css'; 
import TypingText from "./TypingText";
import Loader from "./Loader";
import Header from "./../components/Header";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    setLoading(true); 

    setTimeout(() => {
      setLoading(false); 
      navigate('/about'); 
    }, 500); 
  };

  return (
    <div className="homepage">
      <Header />
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={5} />
        <Sphere visible args={[1, 100, 200]} scale={2.3}>
          <MeshDistortMaterial
            color="#1D3557"
            distort={0.5} 
            speed={2}
          />
        </Sphere>
      </Canvas>
      
      <div className="content">
        <h1>Shravan Kumar Doure</h1>
        <TypingText />
     <br/>
        <button
          className="btn btn-info btn-sm brand-hero-button"
          onClick={handleNavigate}
        >
          Want to Know More About Me?
        </button>
      </div>
      <div className='modal-container'>
      {loading && (
        <div className="modal-overlay">
          <div className="modal-content">
          <Canvas style={{ width: '150px', height: '150px' }}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={4.5} />
              <Loader/>     
            </Canvas> 

          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Home;