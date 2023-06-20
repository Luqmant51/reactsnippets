import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import lax from 'lax.js';

const LaxDiv = ({ text = 'Speakers', dataPreset = 'driftRight' }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = ReactDOM.findDOMNode(elRef.current);
    lax.addElement(el);

    return () => {
      lax.removeElement(el);
    };
  }, []);

  return (
    <div className="bg-title lax" data-lax-preset={dataPreset} ref={elRef}>
      {text}
    </div>
  );
};

export default LaxDiv;
