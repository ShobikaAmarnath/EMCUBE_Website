import { useEffect, useRef } from 'react';

export const useVantaNet = (shouldReinit=false) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      try {
          if (vantaEffect.current) {
          vantaEffect.current.destroy();
          vantaEffect.current = null;
        }
        // Load THREE.js first if not already loaded
        if (!window.THREE) {
          const threeScript = document.createElement('script');
          threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
          document.head.appendChild(threeScript);
          await new Promise((resolve, reject) => {
            threeScript.onload = resolve;
            threeScript.onerror = reject;
          });
        }

        // Load Vanta NET script if not already loaded
        if (!window.VANTA || !window.VANTA.NET) {
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js';
          document.head.appendChild(vantaScript);
          await new Promise((resolve, reject) => {
            vantaScript.onload = resolve;
            vantaScript.onerror = reject;
          });
        }

        // Wait a bit more to ensure everything is loaded
        await new Promise(resolve => setTimeout(resolve, 100));

        // Initialize the NET animation
        if (vantaRef.current && window.VANTA && window.VANTA.NET) {
          // Destroy any existing effect first
          // if (vantaEffect.current) {
          //   vantaEffect.current.destroy();
          // }

          vantaEffect.current = window.VANTA.NET({
               el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x1a1a2e,

            color: 0xff3f81,
            points: 10.00,
            maxDistance: 23.00,
            spacing: 17.00
          });

          console.log('NET animation initialized successfully');
        } else {
          console.error('VANTA.NET not available or element not ready');
        }
      } catch (error) {
        console.error('Error loading Vanta NET:', error);
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