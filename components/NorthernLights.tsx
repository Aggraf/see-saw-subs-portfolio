
import React, { useEffect, useRef } from 'react';

const NorthernLights: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const drawGradient = (xOffset: number, yOffset: number, color1: string, scale: number) => {
        const x = Math.sin(time + xOffset) * (canvas.width / 3) + canvas.width / 2;
        const y = Math.cos(time + yOffset) * (canvas.height / 3) + canvas.height / 2;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, canvas.width * scale);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };

      ctx.globalCompositeOperation = 'screen';
      // New palette colors
      drawGradient(0, 0, 'rgba(227, 83, 66, 0.15)', 0.9); // Primary #E35342
      drawGradient(2, 1.5, 'rgba(242, 227, 207, 0.1)', 0.8); // Accent #F2E3CF
      drawGradient(4, 0.5, 'rgba(227, 83, 66, 0.1)', 1.2);
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};

export default NorthernLights;
