import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <section className="py-20 bg-gradient-to-br from-blush to-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">From Fabric to Fabulous</h2>
          <p className="section-subtitle">
            Witness the magical transformation as raw materials become works of art
          </p>
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Slider Container */}
          <div 
            ref={containerRef}
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize premium-card"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {/* Before Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"
              style={{ 
                clipPath: `inset(0 ${sliderPosition}% 0 0)`
              }}
            >
              <div className="h-full flex items-center justify-start pl-8">
                <div className="text-left p-8">
                  <div className="text-6xl mb-4">🧵</div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2 font-playfair">Raw Materials</h3>
                  <p className="text-gray-600">Pure fabrics awaiting transformation</p>
                </div>
              </div>
              <div className="absolute top-6 left-6 bg-gold text-white px-6 py-3 rounded-full text-sm font-medium tracking-wider">
                BEFORE
              </div>
            </div>

            {/* After Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold-deep/30"
              style={{ 
                clipPath: `inset(0 0 0 ${100 - sliderPosition}%)`
              }}
            >
              <div className="h-full flex items-center justify-end pr-8">
                <div className="text-right p-8">
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2 font-playfair">Finished Masterpiece</h3>
                  <p className="text-gray-700">Elegant creation ready to wear</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-gold text-white px-6 py-3 rounded-full text-sm font-medium tracking-wider">
                AFTER
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-gold cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Line */}
              <div className="w-full h-full bg-gradient-to-b from-gold-deep via-gold to-gold-deep relative">
                {/* Shimmer Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Handle Knob */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gold rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
                
                {/* Orbiting Sparkles */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-2" />
                </motion.div>
              </div>
            </div>

            {/* Drag Instructions */}
            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              ← Drag to reveal transformation →
            </motion.div>
          </div>

          {/* Caption */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 italic">
              "Every masterpiece begins with a single thread of inspiration"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
