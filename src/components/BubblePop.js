import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from "./../Pages/Loader";
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import './BubblePop.css'; 

const BubblePop = (props) => {
  console.group(props.data,"porps")
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const size = Math.random() * 50 + 50; 
      const xPos = Math.random() * window.innerWidth; 
      const yPos = Math.random() * window.innerHeight;
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      return {
        size,
        xPos,
        yPos,
        color,
        id: Math.random().toString(36).substring(7), 
      };
    };
    const intervalId = setInterval(() => {
      setBubbles((prevBubbles) => [
        ...prevBubbles,
        createBubble(),
      ]);

  
      if (bubbles.length > 50) {
        setBubbles((prevBubbles) => prevBubbles.slice(1));
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [bubbles]);

  return (
    <div className="bubble-pop-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.xPos}px`,
            top: `${bubble.yPos}px`,
            backgroundColor: bubble.color,
          }}
        />
      ))}
      
          <Canvas style={{ width: '600px', height: '700px' }}>
            <OrbitControls enableZoom={false} />
            <directionalLight position={[2, 5, 2]} intensity={5} />
            <Sphere position={[0, 0, 0.5]} intensity={5}>
              <MeshDistortMaterial
                color="#0a69bb"
                distort={0.1}
                speed={50}
              />
            </Sphere>
            <ambientLight intensity={2} />
            <Loader />
          </Canvas>
          <div className="bubble-text">{props.data}</div>
  </div>
  );
};

export default BubblePop;
