import { useEffect, useRef } from 'react';

export const useOracleDatabaseAnimation = (shouldReinit=false) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      try {
          if (vantaEffect.current) {
          vantaEffect.current.destroy();
          vantaEffect.current = null;
        }
        // Load p5.js first if not already loaded
        if (!window.p5) {
          const p5Script = document.createElement('script');
          p5Script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js';
          document.head.appendChild(p5Script);
          await new Promise((resolve, reject) => {
            p5Script.onload = resolve;
            p5Script.onerror = reject;
          });
        }

        // Load Vanta TRUNK script if not already loaded
        if (!window.VANTA || !window.VANTA.TRUNK) {
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.trunk.min.js';
          document.head.appendChild(vantaScript);
          await new Promise((resolve, reject) => {
            vantaScript.onload = resolve;
            vantaScript.onerror = reject;
          });
        }

        // Wait a bit more to ensure everything is loaded
        await new Promise(resolve => setTimeout(resolve, 100));

        // Initialize the TRUNK animation with database-themed colors
        if (vantaRef.current && window.VANTA && window.VANTA.TRUNK) {
          // Destroy any existing effect first
          if (vantaEffect.current) {
            vantaEffect.current.destroy();
          }

          vantaEffect.current = window.VANTA.TRUNK({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0f172a, // Deep blue-black for database theme
            color: 0xff4500,           // Oracle red/orange
            spacing: 0,
            chaos: 1.5                 // More dynamic for data flow effect
          });

          console.log('Oracle Database animation initialized successfully');
        } else {
          console.error('VANTA.TRUNK not available or element not ready');
        }
      } catch (error) {
        console.error('Error loading Vanta TRUNK:', error);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [shouldReinit]);

  return vantaRef;
};