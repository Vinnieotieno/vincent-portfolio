// app/components/Scene3DWrapper.tsx
'use client';

import { useEffect, useState } from 'react';

export default function Scene3DWrapper() {
  const [Scene3D, setScene3D] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadScene = async () => {
      try {
        const module = await import('./Scene3D');
        setScene3D(() => module.default);
      } catch (err) {
        console.error('Failed to load 3D scene:', err);
        setError('Failed to load 3D scene');
      }
    };

    // Only load on client side
    if (typeof window !== 'undefined') {
      loadScene();
    }
  }, []);

  if (error) {
    return <div className="absolute inset-0 bg-gray-900/10" />;
  }

  if (!Scene3D) {
    return <div className="absolute inset-0 bg-gray-900/10 animate-pulse" />;
  }

  return <Scene3D />;
}