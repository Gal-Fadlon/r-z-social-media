import React from 'react';

const DownArrowIcon = ({ width = 7, height = 6 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 5"
      fill="none"
      style={{ 
        display: 'block',
        width: '100%',
        height: '100%'
      }}
      preserveAspectRatio="none"
    >
      <path 
        d="M3.5 5L0 0H7L3.5 5Z" 
        fill="#505050" 
      />
    </svg>
  );
};

export default DownArrowIcon;
