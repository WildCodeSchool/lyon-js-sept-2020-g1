import React, { useState } from 'react';
import './BackToTop.css';

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div>
      <button
        type="button"
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 50, display: showScroll ? 'flex' : 'none' }}
      >
        <span className="chevron">Back to top</span>
      </button>
    </div>
  );
};

export default ScrollTopArrow;
