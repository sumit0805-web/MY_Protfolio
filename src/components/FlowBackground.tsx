import { useEffect, useRef } from 'react';

interface FlowBackgroundProps {
  darkMode: boolean;
}

export function FlowBackground({ darkMode }: FlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle interactive ripple / deflection
    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Number of interactive fluid wave ribbon lines
    const lineCount = 18;
    let time = 0;

    const render = () => {
      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      time += 0.0035;

      const baseAlpha = darkMode ? 0.14 : 0.09;
      const strokeStyleBase = darkMode
        ? 'rgba(160, 185, 205, '
        : 'rgba(30, 41, 59, ';

      // Render smooth flowing trigonometric streamlines
      for (let i = 0; i < lineCount; i++) {
        const progress = i / lineCount;
        const lineOffset = i * 0.35;
        const yBase = height * 0.15 + progress * (height * 0.7);

        ctx.beginPath();
        const alpha = baseAlpha * (1 - Math.abs(progress - 0.5) * 1.2);
        ctx.strokeStyle = `${strokeStyleBase}${Math.max(0.02, alpha)})`;
        ctx.lineWidth = 1.2;

        const step = 24;
        for (let x = 0; x <= width + step; x += step) {
          // Complex harmonious sine curves to mimic natural laminar fluid flow
          const wave1 = Math.sin(x * 0.002 + time * 1.2 + lineOffset) * 45;
          const wave2 = Math.cos(x * 0.0035 - time * 0.9 + lineOffset * 0.7) * 28;
          const wave3 = Math.sin((x + yBase) * 0.0015 + time * 0.6) * 20;

          // Gentle mouse interaction deflection
          const distToMouse = Math.hypot(x - mouseX, yBase - mouseY);
          const mouseEffect = Math.max(0, 1 - distToMouse / 380) * 35;
          const mouseDeflect = Math.sin(distToMouse * 0.02 - time * 3) * mouseEffect;

          const y = yBase + wave1 + wave2 + wave3 + mouseDeflect;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      id="flow-canvas-background"
      className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-700"
      style={{ opacity: darkMode ? 0.85 : 0.75 }}
    />
  );
}
