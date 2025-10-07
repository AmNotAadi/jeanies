import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const DesignSelector = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({
    style: null,
    fabric: null,
    embroidery: null
  });

  const steps = [
    {
      title: 'Choose Style',
      options: [
        { id: 'lehenga', name: 'Lehenga', icon: '👗', description: 'Traditional elegance' },
        { id: 'kurti', name: 'Kurti', icon: '👘', description: 'Modern comfort' },
        { id: 'blouse', name: 'Blouse', icon: '👚', description: 'Sophisticated charm' },
        { id: 'gown', name: 'Gown', icon: '👰', description: 'Timeless grace' }
      ]
    },
    {
      title: 'Choose Fabric',
      options: [
        { id: 'silk', name: 'Silk', icon: '✨', description: 'Luxurious drape' },
        { id: 'georgette', name: 'Georgette', icon: '🌊', description: 'Flowing elegance' },
        { id: 'cotton', name: 'Cotton', icon: '🌿', description: 'Natural comfort' },
        { id: 'chiffon', name: 'Chiffon', icon: '💫', description: 'Sheer sophistication' }
      ]
    },
    {
      title: 'Choose Embroidery',
      options: [
        { id: 'zardozi', name: 'Zardozi', icon: '👑', description: 'Royal artistry' },
        { id: 'thread', name: 'Thread', icon: '🧵', description: 'Delicate precision' },
        { id: 'beadwork', name: 'Beadwork', icon: '💎', description: 'Sparkling details' },
        { id: 'gota', name: 'Gota', icon: '🌟', description: 'Traditional charm' }
      ]
    }
  ];

  const handleSelection = (stepIndex, option) => {
    const stepKey = Object.keys(selections)[stepIndex];
    setSelections(prev => ({
      ...prev,
      [stepKey]: option
    }));

    if (stepIndex < steps.length - 1) {
      setTimeout(() => setCurrentStep(stepIndex + 1), 500);
    }
  };


  const isComplete = Object.values(selections).every(selection => selection !== null);

  return (
    <section id="design" className="py-20 bg-gradient-to-br from-ivory to-blush relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Design Your Dream Outfit</h2>
          <p className="section-subtitle">
            Create a bespoke piece that reflects your unique style and personality
          </p>
        </motion.div>

        {/* Step Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${
                    index <= currentStep ? 'bg-gold' : 'bg-gray-300'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {index + 1}
                </motion.div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 transition-all duration-500 ${
                    index < currentStep ? 'bg-gold' : 'bg-gray-300'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-charcoal mb-12 font-playfair">
                {steps[currentStep].title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {steps[currentStep].options.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleSelection(currentStep, option)}
                    className="group premium-card hover:-translate-y-3 border-2 border-transparent hover:border-gold/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
                        {option.icon}
                      </div>
                      <h4 className="text-xl font-bold text-charcoal font-playfair mb-2">
                        {option.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-light tracking-wide">
                        {option.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-gold/20 relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
                
                <motion.h3 
                  className="text-4xl font-bold text-charcoal mb-6 font-playfair"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Your Dream Outfit
                </motion.h3>
                
                <motion.p 
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  A beautiful <span className="font-semibold text-gold">{selections.fabric?.name}</span> {selections.style?.name.toLowerCase()} with intricate <span className="font-semibold text-gold">{selections.embroidery?.name.toLowerCase()}</span> — made just for you.
                </motion.p>
                
                <Link to="/contact" className="btn-primary">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a Design Session
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DesignSelector;
