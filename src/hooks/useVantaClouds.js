import { useEffect, useRef } from 'react';

export const useVantaClouds = (shouldReinit = false) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }

      if (!window.THREE) {
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        document.head.appendChild(threeScript);
        await new Promise((resolve) => { threeScript.onload = resolve; });
      }

      if (!window.VANTA || !window.VANTA.CLOUDS) {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.clouds.min.js';
        document.head.appendChild(vantaScript);
        await new Promise((resolve) => { vantaScript.onload = resolve; });
      }

      await new Promise(resolve => setTimeout(resolve, 100));

      if (vantaRef.current && window.VANTA && window.VANTA.CLOUDS) {
        vantaEffect.current = window.VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundColor: 0x1e3a8a,
          skyColor: 0x68b8ff,
          cloudColor: 0xadc5ed,
          speed: 0.80
        });
      }
    };

    loadVanta();
    return () => { if (vantaEffect.current) vantaEffect.current.destroy(); };
  }, [shouldReinit]);

  return vantaRef;
};