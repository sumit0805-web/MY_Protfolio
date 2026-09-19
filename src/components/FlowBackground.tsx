import { useEffect, useRef } from 'react';

interface FlowBackgroundProps {
  darkMode: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  hueOffset: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

export function FlowBackground({ darkMode }: FlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Dynamic mouse physics
    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let mouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    // Ripples on click
    const ripples: Ripple[] = [];
    const handlePointerDown = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 8,
        maxRadius: Math.min(width, height) * 0.45,
        alpha: darkMode ? 0.35 : 0.25,
        speed: 3.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handlePointerDown);

    // Floating particles constellation
    const particleCount = Math.min(55, Math.floor((width * height) / 22000));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        baseRadius: Math.random() * 1.5 + 1,
        alpha: Math.random() * 0.4 + 0.2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
        hueOffset: Math.random() * 40 - 20,
      });
    }

    // Dynamic undulating flow streamlines
    const waveCount = 7;
    let time = 0;

    const render = () => {
      time += 0.007;

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // --- 1. RENDER ACTIVE EXPANDING RIPPLES ---
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha *= 0.965;

        if (r.alpha < 0.01 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = darkMode
          ? `rgba(56, 189, 248, ${r.alpha})`
          : `rgba(37, 99, 235, ${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // --- 2. RENDER LIVING FLUID FLOW STREAMLINES ---
      for (let w = 0; w < waveCount; w++) {
        const waveProgress = w / (waveCount - 1);
        const yCenter = height * (0.18 + waveProgress * 0.68);
        const freqMultiplier = 0.0018 + w * 0.0003;
        const speed = 0.9 + w * 0.15;
        const phase = w * 1.25;

        ctx.beginPath();

        const step = 20;
        let prevX = 0;
        let prevY = yCenter;

        for (let x = 0; x <= width + step; x += step) {
          // Harmonic wave equation
          const wave1 = Math.sin(x * freqMultiplier + time * speed + phase) * (32 + w * 4);
          const wave2 = Math.cos(x * (freqMultiplier * 1.8) - time * (speed * 0.8) + phase * 0.5) * (18 + w * 2);
          const wave3 = Math.sin((x + yCenter) * 0.001 + time * 0.5) * 12;

          // Mouse deflection
          let mouseDisplacement = 0;
          if (mouseActive) {
            const dx = x - mouseX;
            const dy = yCenter - mouseY;
            const dist = Math.hypot(dx, dy);
            if (dist < 320) {
              const influence = (1 - dist / 320);
              mouseDisplacement = Math.sin(dist * 0.035 - time * 4) * influence * 38;
            }
          }

          // Ripple displacement
          let rippleDisplacement = 0;
          for (const rip of ripples) {
            const dx = x - rip.x;
            const dy = yCenter - rip.y;
            const dist = Math.hypot(dx, dy);
            const distFromWave = Math.abs(dist - rip.radius);
            if (distFromWave < 50) {
              rippleDisplacement += Math.cos((distFromWave / 50) * Math.PI) * rip.alpha * 30;
            }
          }

          const y = yCenter + wave1 + wave2 + wave3 + mouseDisplacement + rippleDisplacement;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            // Smooth curve
            const cpX = (prevX + x) / 2;
            const cpY = (prevY + y) / 2;
            ctx.quadraticCurveTo(prevX, prevY, cpX, cpY);
          }

          prevX = x;
          prevY = y;
        }

        // Color and stroke
        const lineAlpha = darkMode
          ? 0.18 + Math.sin(time + w) * 0.06
          : 0.14 + Math.sin(time + w) * 0.04;

        if (darkMode) {
          // Alternating cyan and soft violet luminous lines
          const isCyan = w % 2 === 0;
          ctx.strokeStyle = isCyan
            ? `rgba(56, 189, 248, ${lineAlpha})`
            : `rgba(129, 140, 248, ${lineAlpha * 0.9})`;
        } else {
          // Vibrant royal blue & deep slate ribbons
          const isBlue = w % 2 === 0;
          ctx.strokeStyle = isBlue
            ? `rgba(37, 99, 235, ${lineAlpha})`
            : `rgba(79, 70, 229, ${lineAlpha * 0.85})`;
        }

        ctx.lineWidth = 1.35;
        ctx.stroke();
      }

      // --- 3. RENDER FLOATING PARTICLES & CONSTELLATION FILAMENTS ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse gentle repulsion
        if (mouseActive) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.hypot(dx, dy);
          if (dist < 180 && dist > 1) {
            const force = (1 - dist / 180) * 0.8;
            p.x += (dx / dist) * force * 3;
            p.y += (dy / dist) * force * 3;
          }
        }

        // Pulsing radius
        p.pulsePhase += p.pulseSpeed;
        const currentRadius = p.baseRadius + Math.sin(p.pulsePhase) * 0.6;

        // Connect close particles with delicate filaments
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 120) {
            const filamentAlpha = (1 - dist / 120) * (darkMode ? 0.16 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = darkMode
              ? `rgba(99, 102, 241, ${filamentAlpha})`
              : `rgba(37, 99, 235, ${filamentAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Render particle point
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);

        if (darkMode) {
          const glowAlpha = p.alpha * (0.8 + Math.sin(p.pulsePhase) * 0.3);
          ctx.fillStyle = `rgba(56, 189, 248, ${glowAlpha})`;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
          ctx.shadowBlur = 6;
        } else {
          const glowAlpha = p.alpha * (0.7 + Math.sin(p.pulsePhase) * 0.25);
          ctx.fillStyle = `rgba(37, 99, 235, ${glowAlpha})`;
          ctx.shadowColor = 'rgba(37, 99, 235, 0.25)';
          ctx.shadowBlur = 4;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handlePointerDown);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      id="flow-canvas-background"
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full"
      style={{
        opacity: darkMode ? 0.95 : 0.88,
      }}
    />
  );
}
