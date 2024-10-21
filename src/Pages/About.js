import React from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from "./Loader";
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Header from '../components/Header';

export default function About() {
  return (
    <>
    <Header/>
    <div className="container">
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <directionalLight position={[0, 0, 2]} intensity={1} />
        <Sphere position={[0, 0, 0.5]} args={[1, 10, 10]}>
          <MeshDistortMaterial color="#6c757d" distort={0.4} speed={1} />
        </Sphere>
        <ambientLight intensity={1} />
        <Loader />
      </Canvas>
      <div className="about-content">
        <p>
          Hello, I am Shravan Kumar. I completed my B.Tech in Computer Science, and while I initially found programming concepts challenging, I often questioned my path. However, my true passion lies in becoming a game developer. This passion ignited when I attended a workshop at IIT Hyderabad, where I discovered the art of game development and realized the importance of programming in creating immersive gaming experiences.
        </p>
        <p>
          Motivated by this revelation, I dove into the world of coding. I tackled complex problems on LeetCode, which honed my skills and built my confidence. I also enrolled in Unacademy's 180 Days of Learning program, where I gained a solid grasp of programming fundamentals and advanced techniques.
        </p>
        <p>
          My dedication paid off when I secured a 6-month internship at Loansride Multichannel Pvt. Ltd. There, I applied my newfound knowledge in a real-world setting, contributing to meaningful projects and learning from experienced professionals. My hard work and passion were recognized, and I became a permanent employee at the same company, furthering my journey in the tech industry.
        </p>
     
  <p className='empty'></p>
      
      </div>
    </div>
    </>
  );
}
