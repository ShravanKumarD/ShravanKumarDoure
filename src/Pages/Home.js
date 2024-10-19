import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import './Home.css'; 
import bgImg from "./../assets/house.jpg"
import TypingText from "./TypingText";
import { Button } from 'react-bootstrap';
const Home= () => {

  return (
    <div className="homepage">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Sphere visible args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#8352FD"
            attach="material"
            distort={0.5}
            speed={2}/>
        </Sphere>
      </Canvas>
      
      <div className="content">
        <h1>Shravan Kumar Doure</h1>
        <TypingText/>
        <p></p>
        <button className='btn btn-info btn-sm brand-hero-button' onClick={()=>{'/'}}>Want to Know More About Me?</button>
      </div>
    </div>
  );
};

export default Home;


{/* <p>Dynamic and driven MERN Stack Developer with hands-on experience, 
leveraging 2.6 months of expertise in building scalable web applications. 
Proficient in AWS cloud services and passionate about coding, 
I am always eager to learn and adapt to new technologies. 
My enthusiasm for innovation and continuous improvement 
fuels my drive to deliver efficient and impactful solutions.</p> */}