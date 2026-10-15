import React, { useEffect, useRef } from 'react';
import lottie, { type AnimationItem } from 'lottie-web';

interface WindChimeProps {
  className?: string;
  mirrored?: boolean;
}

export const WindChime: React.FC<WindChimeProps> = ({ className = '', mirrored = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Destroy existing animation if any
    if (animRef.current) {
      animRef.current.destroy();
    }

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/gallery/Christmas%20wind%20chimes.json',
      rendererSettings: {
        preserveAspectRatio: 'xMidYMin meet',
      },
    });

    return () => {
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none select-none transition-transform duration-700 ${className}`}
      style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
    />
  );
};
