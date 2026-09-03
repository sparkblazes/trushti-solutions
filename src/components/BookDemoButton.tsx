'use client';

import React from 'react';

interface BookDemoButtonProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  product?: string;
}

export default function BookDemoButton({
  text = 'Book Free Demo',
  className = 'btn btn-accent',
  style,
  product = 'General'
}: BookDemoButtonProps) {

  const handleClick = () => {
    // Dispatch the custom event that DemoModal is listening for
    window.dispatchEvent(new CustomEvent('open-demo', { detail: product }));
  };

  return (
    <button className={className} style={style} onClick={handleClick}>
      {text}
    </button>
  );
}
