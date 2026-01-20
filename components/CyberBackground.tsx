import React, { useEffect, useRef } from 'react';

const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = 0;
    let mouseY = 0;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    // Configuration
    const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 10000), 150);
    const CONNECT_DISTANCE = 180;
    const PULSE_SPEED = 0.5;
    
    // Hexagon Grid
    const hexSize = 60;
    
    // State
    const particles: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      size: number;
      pulse: number; 
    }[] = [];

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        pulse: 0
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() / 1000;
      
      // Theme Detection
      const isDark = document.documentElement.classList.contains('dark');
      
      // Light mode: Dark Slate/Indigo for a "Technical Blueprint" look
      // Dark mode: Cyan/Blue neon look
      const r = isDark ? 6 : 71;
      const g = isDark ? 182 : 85;
      const b = isDark ? 212 : 105;
      
      const gridOpacity = isDark ? 0.05 : 0.04;
      const hexOpacity = isDark ? 0.03 : 0.05;

      // 1. Draw Moving Grid (Vertical Scan)
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${gridOpacity})`;
      ctx.lineWidth = 1;
      const gridSize = 100;
      const yOffset = (time * 20) % gridSize; 

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      for (let y = yOffset - gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Subtle Hexagons (Occasional)
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${hexOpacity})`;
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x += hexSize * 3) {
        for (let y = 0; y < height; y += hexSize * 1.732) {
          if (Math.random() > 0.995) { // Flicker effect
             drawHexagon(ctx, x + (Math.sin(time) * 20), y, hexSize * 0.8);
          }
        }
      }

      // 3. Scanline Effect
      const scanY = (time * 100) % height;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.03)`;
      ctx.fillRect(0, scanY, width, 50);

      // 4. Update and Draw Particles
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < 300) {
           ctx.beginPath();
           ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.4 * (1 - distMouse / 300)})`;
           ctx.lineWidth = 1;
           ctx.moveTo(p.x, p.y);
           ctx.lineTo(mouseX, mouseY);
           ctx.stroke();
        }

        // Pulse
        if (p.pulse === 0 && Math.random() < 0.002) p.pulse = 1;
        if (p.pulse > 0) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.pulse, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0, 0.8 - p.pulse / 50)})`;
            ctx.stroke();
            p.pulse += PULSE_SPEED;
            if (p.pulse > 50) p.pulse = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DISTANCE) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.15 * (1 - dist / CONNECT_DISTANCE)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Data Packets
            if ((i + j) % 8 === 0) {
                const packetPhase = ((time * 2) + (i * 0.5)) % 1; 
                const packetX = p.x + (p2.x - p.x) * packetPhase;
                const packetY = p.y + (p2.y - p.y) * packetPhase;
                
                ctx.beginPath();
                ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
                ctx.fillStyle = isDark ? '#fff' : '#1e293b'; // White in dark mode, Slate in light
                ctx.fill();
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`; // Reset
            }
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const drawHexagon = (c: CanvasRenderingContext2D, x: number, y: number, r: number) => {
      c.beginPath();
      for (let i = 0; i < 6; i++) {
        c.lineTo(x + r * Math.cos(i * 2 * Math.PI / 6), y + r * Math.sin(i * 2 * Math.PI / 6));
      }
      c.closePath();
      c.stroke();
    }

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[-1] bg-white dark:bg-[#020617] transition-colors duration-500 pointer-events-none"
    />
  );
};

export default CyberBackground;