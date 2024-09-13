import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-bg fixed inset-0 z-[-1]">
      <div className="layer-1"></div>
      <div className="layer-2"></div>
      <div className="layer-3"></div>
    </div>
  );
};

export default AnimatedBackground;