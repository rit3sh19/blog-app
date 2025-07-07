import React, { useEffect, useRef } from 'react';

const ColorTrail = () => {
  const trailRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const lastDotTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX - 32; // tighter center offset
      mouse.current.y = e.clientY - 32;

      // Only create a dot every ~80ms
      const now = Date.now();
      if (now - lastDotTime.current > 80) {
        createTrailDot(e.clientX, e.clientY);
        lastDotTime.current = now;
      }
    };

    const animate = () => {
      // Follow mouse more tightly
      pos.current.x += (mouse.current.x - pos.current.x) * 0.3;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.3;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    const createTrailDot = (x, y) => {
      const dot = document.createElement('div');
      dot.className = 'trail-dot';
      dot.style.position = 'fixed';
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.width = '10px';
      dot.style.height = '10px';
      dot.style.borderRadius = '50%';
      dot.style.background = 'white';
      dot.style.opacity = '0.5';
      dot.style.pointerEvents = 'none';
      dot.style.zIndex = '9998';
      dot.style.transition = 'opacity 0.2s ease-out, transform 0.3s ease-out';
      dot.style.transform = 'translate(-50%, -50%) scale(1)';

      // ✅ Intense glowing blur
      dot.style.boxShadow = '0 0 20px 10px rgba(255, 255, 255, 0.5)';

      document.body.appendChild(dot);
      setTimeout(() => {
        dot.style.opacity = '0';
        dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
      }, 10);
      setTimeout(() => dot.remove(), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={trailRef}
      className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9999] blur-xl opacity-80"
      style={{
        background:
          'conic-gradient(from 0deg at 50% 50%, red, orange, yellow, green, blue, indigo, violet, red)',
        mixBlendMode: 'screen',
        transition: 'opacity 0.3s ease-out',
      }}
    ></div>
  );
};

export default ColorTrail;
