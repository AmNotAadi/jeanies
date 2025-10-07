import React, { useEffect, useState } from 'react';

const ThreadCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Hide cursor on scroll
    let scrollTimeout;
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsVisible(true), 150);
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className={`thread-cursor ${!isVisible ? 'hidden' : ''} ${isClicking ? 'click' : ''}`}
      style={{
        left: cursorPosition.x - 1,
        top: cursorPosition.y - 10,
      }}
    >
      {/* Sparkle particles on click */}
      {isClicking && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full animate-ping"
              style={{
                left: `${Math.random() * 20 - 10}px`,
                top: `${Math.random() * 20 - 10}px`,
                animationDelay: `${Math.random() * 0.3}s`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreadCursor;
