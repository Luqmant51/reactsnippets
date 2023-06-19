import React, { useState, useEffect } from "react";

function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const renderGoTopIcon = () => {
    return (
      <div className="back-to-top" onClick={scrollToTop}>
        Top
      </div>
    );
  };

  return <>{isVisible && renderGoTopIcon()}</>;
}

export default GoTop;
