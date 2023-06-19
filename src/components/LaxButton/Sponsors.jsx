import React, { useEffect, useRef } from "react";
import lax from "lax.js";

const Sponsors = ({ text }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    lax.addElement(element);

    return () => {
      lax.removeElement(element);
    };
  }, []);

  return (
    <h3 ref={elementRef} className="lax" data-lax-preset="driftLeft">
      {text}
    </h3>
  );
};

export default Sponsors;
