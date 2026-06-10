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
    let mouseX = width / 2; // Default center
    let mouseY = height / 2;

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
    const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 12000), 80);
    const CONNECT_DISTANCE = 160;
    const DEFENSE_RADIUS = 200; // Radius of the "Firewall" around mouse
    const HEX_SIZE = 50;
    
    // State
    interface Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        pulse: number;
        isThreat: boolean;
        recovering: number; // Cooldown frames after being neutralized
    }

    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        pulse: 0,
        isThreat: Math.random() > 0.85, // 15% start as threats
        recovering: 0
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() / 1000;
      
      // Theme Detection
      const isDark = document.documentElement.classList.contains('dark');
      
      // --- COLOR PALETTE CONFIGURATION ---
      // Light Mode: Darker Cyan for visibility on white background (matches Logo)
      // Dark Mode: "Cyber Matrix" - Neon Cyan
      
      const safeColor = isDark 
          ? { r: 6, g: 182, b: 212 }   // Cyan-400 (Dark Mode - Neon)
          : { r: 8, g: 145, b: 178 };  // Cyan-600 (Light Mode - Darker)

      const threatColor = isDark
          ? { r: 239, g: 68, b: 68 }   // Red-500
          : { r: 220, g: 38, b: 38 };  // Red-600

      // Opacity Tuning - significantly increased for Light Mode to be visible against white
      const gridOpacity = isDark ? 0.05 : 0.08; 
      const hexOpacity = isDark ? 0.03 : 0.06;
      const lineOpacity = isDark ? 0.12 : 0.22; 

      // 1. Draw Moving Grid (Vertical Scan)
      // Light Mode: Greyish grid lines so it doesn't look like graph paper, but visible
      const gridR = isDark ? safeColor.r : 148;
      const gridG = isDark ? safeColor.g : 163;
      const gridB = isDark ? safeColor.b : 184; // Slate-400

      ctx.strokeStyle = `rgba(${gridR}, ${gridG}, ${gridB}, ${gridOpacity})`;
      ctx.lineWidth = 1;
      const gridSize = 120;
      const yOffset = (time * 15) % gridSize; 

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

      // 2. Hybrid Scanning Effect
      const scanSpeed = 120; 
      const scanY = (time * scanSpeed) % (height + 300) - 150; 
      
      // A. The Line
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      
      // Stronger line in light mode
      ctx.strokeStyle = `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, ${isDark ? 0.35 : 0.3})`; 
      ctx.lineWidth = 2;
      ctx.stroke();

      // B. The Glow
      const gradient = ctx.createLinearGradient(0, scanY - 100, 0, scanY + 100);
      gradient.addColorStop(0, `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, 0)`);
      gradient.addColorStop(0.5, `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, ${isDark ? 0.1 : 0.08})`); 
      gradient.addColorStop(1, `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 100, width, 200);

      // 3. Draw Hexagons
      ctx.lineWidth = 1.5;
      for (let x = 0; x < width; x += HEX_SIZE * 3) {
        for (let y = 0; y < height; y += HEX_SIZE * 1.732) {
          const distToScan = Math.abs(y - scanY);
          
          if (distToScan < 120) {
             const activeOpacity = (1 - distToScan/120) * (isDark ? 0.2 : 0.25);
             ctx.strokeStyle = `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, ${activeOpacity})`;
             drawHexagon(ctx, x + (Math.sin(time * 0.8) * 5), y, HEX_SIZE * 0.8);
          } else if (Math.random() > 0.998) { 
             ctx.strokeStyle = `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, ${hexOpacity})`;
             drawHexagon(ctx, x, y, HEX_SIZE * 0.8);
          }
        }
      }

      // 4. Update and Draw Particles
      // Draw Defense Perimeter
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, DEFENSE_RADIUS, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, ${isDark ? 0.05 : 0.12})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wall bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interaction with Scan Line
        if (Math.abs(p.y - scanY) < 30) {
           p.pulse = Math.min(p.pulse + 3, 25);
        } else {
           p.pulse = Math.max(0, p.pulse - 0.5);
        }

        // Threat Logic
        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        // Defense Zone
        if (distMouse < DEFENSE_RADIUS) {
            if (p.isThreat) {
                // NEUTRALIZE THREAT
                p.isThreat = false;
                p.recovering = 120; // Immunity frames
                p.pulse = 30; // Flash
                
                // Repel effect
                const angle = Math.atan2(dyMouse, dxMouse);
                p.vx = Math.cos(angle) * 2.5;
                p.vy = Math.sin(angle) * 2.5;

                // Zap Effect
                ctx.beginPath();
                ctx.moveTo(mouseX, mouseY);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, 0.6)`;
                ctx.lineWidth = 2;
                ctx.stroke();
            } else {
                // Connection for safe particles
                 ctx.beginPath();
                 ctx.strokeStyle = `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, ${0.2 * (1 - distMouse / DEFENSE_RADIUS)})`;
                 ctx.lineWidth = 0.5;
                 ctx.moveTo(p.x, p.y);
                 ctx.lineTo(mouseX, mouseY);
                 ctx.stroke();
            }
        }

        // Random Compromise
        if (distMouse > DEFENSE_RADIUS + 100 && p.recovering <= 0 && !p.isThreat && Math.random() > 0.997) {
            p.isThreat = true;
            p.vx *= 1.2;
            p.vy *= 1.2;
        }

        if (p.recovering > 0) p.recovering--;

        // Render Particle
        ctx.beginPath();
        const currentSize = p.size + (p.pulse * 0.1); 
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        
        // Color Switching
        if (p.isThreat) {
            ctx.fillStyle = `rgba(${threatColor.r}, ${threatColor.g}, ${threatColor.b}, ${isDark ? 0.8 : 0.9})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${threatColor.r}, ${threatColor.g}, ${threatColor.b}, 0.5)`;
        } else {
            // Higher base opacity for Light Mode (0.9 start) so it's clearly visible on white
            const currentOpacity = Math.min(1, (isDark ? 0.4 : 0.9) + (p.pulse * 0.03));
            ctx.fillStyle = `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, ${currentOpacity})`;
            ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0; // Reset

        // Connections
        if (!p.isThreat) {
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              if (!p2.isThreat) {
                  const dx = p.x - p2.x;
                  const dy = p.y - p2.y;
                  const dist = Math.sqrt(dx * dx + dy * dy);

                  if (dist < CONNECT_DISTANCE) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${safeColor.r}, ${safeColor.g}, ${safeColor.b}, ${lineOpacity * (1 - dist / CONNECT_DISTANCE)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                  }
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
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default CyberBackground;