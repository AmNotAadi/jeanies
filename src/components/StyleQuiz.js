import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const questions = [
    {
      question: "Which vibe matches your personality?",
      options: [
        {
          id: 'pastel',
          name: 'Soft & Romantic',
          description: 'Delicate pastels and flowing fabrics',
          icon: '🌸',
          color: 'from-pink-100 to-pink-200'
        },
        {
          id: 'royal',
          name: 'Regal & Opulent',
          description: 'Rich colors and luxurious embellishments',
          icon: '👑',
          color: 'from-yellow-100 to-yellow-200'
        },
        {
          id: 'modern',
          name: 'Contemporary & Clean',
          description: 'Minimalist designs with modern silhouettes',
          icon: '💎',
          color: 'from-gray-100 to-gray-200'
        },
        {
          id: 'earthy',
          name: 'Natural & Earthy',
          description: 'Warm tones and organic textures',
          icon: '🌿',
          color: 'from-green-100 to-green-200'
        }
      ]
    },
    {
      question: "What's your preferred occasion?",
      options: [
        {
          id: 'wedding',
          name: 'Wedding',
          description: 'The most special day of your life',
          icon: '👰',
          color: 'from-rose-100 to-rose-200'
        },
        {
          id: 'party',
          name: 'Festival/Party',
          description: 'Celebrating with style and joy',
          icon: '🎉',
          color: 'from-orange-100 to-orange-200'
        },
        {
          id: 'formal',
          name: 'Formal Event',
          description: 'Elegant and sophisticated gatherings',
          icon: '🎩',
          color: 'from-blue-100 to-blue-200'
        },
        {
          id: 'casual',
          name: 'Casual Elegance',
          description: 'Everyday luxury and comfort',
          icon: '☕',
          color: 'from-purple-100 to-purple-200'
        }
      ]
    },
    {
      question: "Which fabric appeals to you most?",
      options: [
        {
          id: 'silk',
          name: 'Pure Silk',
          description: 'Luxurious and smooth',
          icon: '✨',
          color: 'from-yellow-100 to-yellow-200'
        },
        {
          id: 'georgette',
          name: 'Georgette',
          description: 'Flowing and elegant',
          icon: '🌊',
          color: 'from-cyan-100 to-cyan-200'
        },
        {
          id: 'cotton',
          name: 'Cotton',
          description: 'Comfortable and breathable',
          icon: '🌿',
          color: 'from-green-100 to-green-200'
        },
        {
          id: 'chiffon',
          name: 'Chiffon',
          description: 'Light and airy',
          icon: '🦋',
          color: 'from-indigo-100 to-indigo-200'
        }
      ]
    }
  ];

  const results = {
    'pastel-wedding-silk': {
      style: 'Romantic Bride',
      description: 'You embody timeless elegance with a soft, romantic touch. Perfect for intimate celebrations and classic beauty.',
      recommendations: ['Soft pink lehengas', 'Delicate thread work', 'Pearl embellishments']
    },
    'royal-wedding-silk': {
      style: 'Royal Majesty',
      description: 'You are destined for regal elegance. Rich colors and luxurious details define your sophisticated taste.',
      recommendations: ['Deep red and gold lehengas', 'Zardozi embroidery', 'Heavy jewelry styling']
    },
    'modern-formal-georgette': {
      style: 'Contemporary Classic',
      description: 'You appreciate clean lines and modern sophistication while honoring traditional craftsmanship.',
      recommendations: ['Minimalist silhouettes', 'Subtle embellishments', 'Modern color palettes']
    },
    'earthy-casual-cotton': {
      style: 'Natural Grace',
      description: 'You find beauty in simplicity and comfort, with a love for organic textures and warm tones.',
      recommendations: ['Earthy color palettes', 'Natural fabrics', 'Subtle embroidery']
    }
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 500);
    } else {
      // Calculate result
      const answerKey = newAnswers.join('-');
      const finalResult = results[answerKey] || {
        style: 'Timeless Classic',
        description: 'You appreciate traditional elegance with a modern touch, perfect for any occasion.',
        recommendations: ['Versatile designs', 'Quality fabrics', 'Classic silhouettes']
      };
      
      setResult(finalResult);
      setTimeout(() => setShowResult(true), 500);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
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
          <h2 className="section-title">Discover Your Style</h2>
          <p className="section-subtitle">
            Take our style quiz to find your perfect aesthetic match
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-center space-x-2">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          index <= currentQuestion ? 'bg-gold' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                </div>

                {/* Question */}
                <h3 className="text-3xl font-bold text-charcoal mb-12 font-playfair">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={option.id}
                      onClick={() => handleAnswer(option.id)}
                      className="group premium-card hover:-translate-y-3 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-full h-32 mb-6 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <div className="text-6xl">
                          {option.icon}
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-charcoal mb-3 font-playfair">
                        {option.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {option.description}
                      </p>
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
                className="text-center"
              >
                <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-gold/20 relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-4xl font-bold text-charcoal mb-6 font-playfair"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      You're a {result.style}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-xl text-gray-600 mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {result.description}
                    </motion.p>

                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <h4 className="text-lg font-semibold text-gold mb-4">Perfect for you:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {result.recommendations.map((rec, index) => (
                          <span 
                            key={index}
                            className="bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {rec}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                    
                    <div className="flex justify-center space-x-4">
                      <motion.button
                        onClick={() => {
                          const element = document.getElementById('consultation');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="btn-primary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore Styles for You
                      </motion.button>
                      
                      <motion.button
                        onClick={resetQuiz}
                        className="btn-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Retake Quiz
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StyleQuiz;
