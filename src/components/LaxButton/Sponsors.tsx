import React, { useEffect, useRef } from 'react';
import lax from 'lax.js';

const Sponsors = ({ text }: { text: string }) => {
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      lax.addElement(element);
    }

    return () => {
      if (element) {
        lax.removeElement(element);
      }
    };
  }, []);
  
  return (
    <h3 data-lax-preset="driftLeft">
      {text}
    </h3>
  );
};

export default Sponsors;
