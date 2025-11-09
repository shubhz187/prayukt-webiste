import React from 'react';
import './IndianDecor.css';

const IndianDecor = () => {
  return (
    <div className="indian-decor">
      {/* Large Peacock Feathers instead of Mandalas */}
      <div className="peacock-feather feather-large-1"></div>
      <div className="peacock-feather feather-large-2"></div>
      <div className="peacock-feather feather-large-3"></div>
      <div className="peacock-feather feather-large-4"></div>
      <div className="peacock-feather feather-large-5"></div>
      
      {/* Peacock Eye Patterns */}
      <div className="peacock-eye eye-1"></div>
      <div className="peacock-eye eye-2"></div>
      <div className="peacock-eye eye-3"></div>
      
      {/* Accent Feathers */}
      <div className="feather-accent feather-accent-1"></div>
      <div className="feather-accent feather-accent-2"></div>
      <div className="feather-accent feather-accent-3"></div>
    </div>
  );
};

export default IndianDecor;

