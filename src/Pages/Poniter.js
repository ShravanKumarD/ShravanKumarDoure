import React, { useEffect } from 'react';
import './pages.css';

export default function HomePage() {
  const pointer = { x: 0, y: 0 };
  const trails = [];
  const colors = [
    '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'
  ];

  let canvas, ctx;
  
  const updateMousePosition = (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
  };

  const createTrail = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const trail = {
      x: pointer.x,
      y: pointer.y,
      color,
      radius: Math.random() * 10 + 5,
      alpha: 1.0,
      life: Math.random() * 20 + 20,
    };
    trails.push(trail);
  };

  const setupCanvas = () => {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const drawTrails = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    trails.forEach((trail, index) => {
      trail.alpha -= 0.02;
      trail.life -= 1;
      trail.radius += 0.2;
      
      if (trail.life <= 0) {
        trails.splice(index, 1);
      } else {
        ctx.fillStyle = `rgba(${hexToRgb(trail.color)}, ${trail.alpha})`;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, trail.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
  };

  const update = () => {
    createTrail();
    drawTrails();
    requestAnimationFrame(update);
  };

  useEffect(() => {
    setupCanvas();
    update();
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', setupCanvas);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', setupCanvas);
    };
  }, []);

  return (
    <div>
      <canvas id="canvas"></canvas>
      HomePage
    </div>
  );
}
