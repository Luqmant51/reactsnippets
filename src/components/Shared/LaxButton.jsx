import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';

const LaxButton = ({ buttonText = 'Explore More About' }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const element = buttonRef.current;
    lax.addElement(element);

    return () => {
      lax.removeElement(element);
    };
  }, []);

  return (
    <Link to="#" ref={buttonRef} className="btn btn-primary lax" data-lax-preset="driftLeft">
      {buttonText}
    </Link>
  );
};

export default LaxButton;
