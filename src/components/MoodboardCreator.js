import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const MoodboardCreator = () => {
  const [canvasItems, setCanvasItems] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const canvasRef = useRef(null);

  const styleElements = [
    {
      id: 'color1',
      type: 'color',
      name: 'Blush Pink',
      value: '#fbe8eb',
      icon: '🌸'
    },
    {
      id: 'color2',
      type: 'color',
      name: 'Gold',
      value: '#d4b483',
      icon: '✨'
    },
    {
      id: 'color3',
      type: 'color',
      name: 'Ivory',
      value: '#fff9f4',
      icon: '🤍'
    },
    {
      id: 'fabric1',
      type: 'fabric',
      name: 'Silk',
      icon: '👑',
      description: 'Luxurious drape'
    },
    {
      id: 'fabric2',
      type: 'fabric',
      name: 'Georgette',
      icon: '🌊',
      description: 'Flowing elegance'
    },
    {
      id: 'embroidery1',
      type: 'embroidery',
      name: 'Zardozi',
      icon: '💎',
      description: 'Royal artistry'
    },
    {
      id: 'embroidery2',
      type: 'embroidery',
      name: 'Thread Work',
      icon: '🧵',
      description: 'Delicate precision'
    }
  ];

  const handleDragStart = (e, element) => {
    e.dataTransfer.setData('application/json', JSON.stringify(element));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const element = JSON.parse(e.dataTransfer.getData('application/json'));
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCanvasItems([...canvasItems, {
      ...element,
      id: `${element.id}_${Date.now()}`,
      x: x - 50,
      y: y - 50
    }]);
  };

  const analyzeStyle = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const colorCount = canvasItems.filter(item => item.type === 'color').length;
      const fabricCount = canvasItems.filter(item => item.type === 'fabric').length;
      const embroideryCount = canvasItems.filter(item => item.type === 'embroidery').length;
      
      let style = 'Classic Elegance';
      let description = 'You lean toward timeless silhouettes and refined details.';
      
      if (colorCount >= 2 && embroideryCount >= 1) {
        style = 'Royal Opulence';
        description = 'You adore luxurious fabrics with intricate embellishments and rich colors.';
      } else if (fabricCount >= 2 && colorCount <= 1) {
        style = 'Modern Minimalist';
        description = 'You prefer clean lines and sophisticated simplicity with focus on fabric quality.';
      } else if (embroideryCount >= 2) {
        style = 'Artisan Heritage';
        description = 'You celebrate traditional craftsmanship and detailed handwork.';
      }
      
      setSelectedStyle({ style, description });
      setIsAnalyzing(false);
    }, 2000);
  };

  const clearCanvas = () => {
    setCanvasItems([]);
    setSelectedStyle(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-ivory to-blush relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Create Your Style Moodboard</h2>
          <p className="section-subtitle">
            Drag and drop elements to discover your unique style personality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Style Elements Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-charcoal mb-6 font-playfair">
              Style Elements
            </h3>
            
            <div className="space-y-4">
              {/* Colors */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">
                  Colors
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {styleElements.filter(el => el.type === 'color').map((element) => (
                    <motion.div
                      key={element.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, element)}
                      className="w-20 h-20 rounded-2xl cursor-grab active:cursor-grabbing shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-2xl"
                      style={{ backgroundColor: element.value }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-full h-full rounded-2xl border-2 border-white/50 flex items-center justify-center">
                        {element.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Fabrics */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">
                  Fabrics
                </h4>
                <div className="space-y-3">
                  {styleElements.filter(el => el.type === 'fabric').map((element) => (
                    <motion.div
                      key={element.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, element)}
                      className="flex items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-grab active:cursor-grabbing border border-gold/10"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-xl mr-4">
                        {element.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-charcoal block">
                          {element.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {element.description}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Embroidery */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">
                  Embroidery
                </h4>
                <div className="space-y-3">
                  {styleElements.filter(el => el.type === 'embroidery').map((element) => (
                    <motion.div
                      key={element.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, element)}
                      className="flex items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-grab active:cursor-grabbing border border-gold/10"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-xl mr-4">
                        {element.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-charcoal block">
                          {element.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {element.description}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="lg:col-span-2">
            <div 
              ref={canvasRef}
              className="relative h-96 bg-white rounded-3xl border-4 border-gold/20 shadow-xl overflow-hidden"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4b483' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}
                />
              </div>

              {/* Canvas Items */}
              {canvasItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="absolute"
                  style={{ left: item.x, top: item.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-gold text-white text-xs px-2 py-1 rounded-full font-medium">
                      {item.name}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Canvas Instructions */}
              {canvasItems.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Drag elements here</p>
                    <p className="text-sm">Create your unique style combination</p>
                  </div>
                </div>
              )}
            </div>

            {/* Canvas Actions */}
            <div className="flex justify-center space-x-4 mt-6">
              <motion.button
                onClick={analyzeStyle}
                disabled={canvasItems.length === 0 || isAnalyzing}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Style'}
              </motion.button>
              <motion.button
                onClick={clearCanvas}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear
              </motion.button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-charcoal mb-6 font-playfair">
              Your Style
            </h3>
            
            {selectedStyle ? (
              <motion.div 
                className="bg-white rounded-3xl p-6 shadow-xl border-4 border-gold/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold text-gold mb-4 font-playfair">
                  {selectedStyle.style}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedStyle.description}
                </p>
                <motion.button
                  className="w-full btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('consultation');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Book Consultation
                </motion.button>
              </motion.div>
            ) : (
              <div className="bg-gray-100 rounded-3xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-gray-500">
                  Add elements to discover your style
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodboardCreator;
