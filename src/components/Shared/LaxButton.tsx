import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';

interface LaxButtonProps {
  buttonText?: string;
}

const LaxButton = ({ buttonText }: LaxButtonProps) => {
  const linkRef = useRef(null);

  useEffect(() => {
    lax.addElement(linkRef.current)
    // linkRef.curre = ReactDOM.findDOMNode(this)

    const handleScroll = () => {
        lax.update(window.scrollY);
    };

    document.addEventListener('scroll', handleScroll, false);
    lax.update(window.scrollY);

    return () => {
        document.removeEventListener('scroll', handleScroll, false);
        lax.removeElement(linkRef)
    };
}, []);

  return (
    <Link ref={linkRef} to="#" className="btn btn-primary lax" data-lax-preset="driftLeft">
      {buttonText}
    </Link>
  );
};

export default LaxButton;
