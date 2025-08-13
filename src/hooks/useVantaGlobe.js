import { useEffect, useRef } from 'react';

export const useVantaGlobe = (shouldReinit=false) => {
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

        // Load Vanta GLOBE script if not already loaded
        if (!window.VANTA || !window.VANTA.GLOBE) {
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.globe.min.js';
          document.head.appendChild(vantaScript);
          await new Promise((resolve, reject) => {
            vantaScript.onload = resolve;
            vantaScript.onerror = reject;
          });
        }

        // Wait a bit more to ensure everything is loaded
        await new Promise(resolve => setTimeout(resolve, 100));

        // Initialize the GLOBE animation
        if (vantaRef.current && window.VANTA && window.VANTA.GLOBE) {
          // Destroy any existing effect first
          // if (vantaEffect.current) {
          //   vantaEffect.current.destroy();
          // }

          vantaEffect.current = window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0f172a,
color: 0xf91c7c,     // Bright magenta
color2: 0xd81b60,    // Darker magenta
            size: 1.00,
            distance: 1.50
          });

          console.log('GLOBE animation initialized successfully');
        } else {
          console.error('VANTA.GLOBE not available or element not ready');
        }
      } catch (error) {
        console.error('Error loading Vanta GLOBE:', error);
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