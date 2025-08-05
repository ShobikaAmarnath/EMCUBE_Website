// src/hooks/useVantaRings.js
import { useEffect, useRef } from 'react';

export const useVantaRings = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (!window.THREE) {
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        document.head.appendChild(threeScript);
        await new Promise((resolve) => { threeScript.onload = resolve; });
      }

      if (!window.VANTA) {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.rings.min.js';
        document.head.appendChild(vantaScript);
        await new Promise((resolve) => { vantaScript.onload = resolve; });
      }

      if (vantaRef.current && window.VANTA) {
        vantaEffect.current = window.VANTA.RINGS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          color: 0x6366f1,
          backgroundColor: [0x2E003E],
          backgroundAlpha: 1,
        });
      }
    };

    loadVanta();
    return () => { if (vantaEffect.current) vantaEffect.current.destroy(); };
  }, []);

  return vantaRef;
};