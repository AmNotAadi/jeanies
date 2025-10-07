import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Founders = () => {
  const [hoveredFounder, setHoveredFounder] = useState(null);

  const founders = [
    {
      name: 'Tripti',
      title: 'Design Visionary',
      icon: '🎨',
      workingIcon: '✨',
      quote: 'Every design tells a story of the woman who will wear it.',
      description: 'With an eye for detail and a passion for timeless elegance, Tripti brings each design to life with artistic vision.',
      specialty: 'Creative Direction & Design'
    },
    {
      name: 'Pankaj',
      title: 'Detail Perfectionist',
      icon: '👨‍🎨',
      workingIcon: '🔧',
      quote: 'Perfection is not a destination, but a way of life.',
      description: 'Pankaj ensures every stitch, every detail, and every finish meets the highest standards of craftsmanship.',
      specialty: 'Technical Excellence & Craftsmanship'
    }
  ];

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
          <h2 className="section-title">Meet the Visionaries</h2>
          <p className="section-subtitle">
            The creative minds behind every masterpiece at Jeanie's Boutique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredFounder(founder.name)}
              onMouseLeave={() => setHoveredFounder(null)}
            >
              {/* Portrait Container */}
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl cursor-pointer premium-card">
                {/* Main Content */}
                <div className="h-full flex flex-col justify-center items-center p-8 text-center">
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center text-5xl"
                    animate={{
                      scale: hoveredFounder === founder.name ? 1.2 : 1,
                      rotate: hoveredFounder === founder.name ? 10 : 0
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    {founder.icon}
                  </motion.div>

                  <h3 className="text-3xl font-bold mb-2 font-playfair text-charcoal">
                    {founder.name}
                  </h3>
                  <h4 className="text-xl font-semibold mb-4 text-gold">
                    {founder.title}
                  </h4>
                  <p className="text-sm text-gold font-medium tracking-wider uppercase mb-6">
                    {founder.specialty}
                  </p>
                </div>

                {/* Working Icon Change */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white text-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: hoveredFounder === founder.name ? 1 : 0,
                    scale: hoveredFounder === founder.name ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {founder.workingIcon}
                </motion.div>
                
                {/* Quote Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gold/95 to-transparent rounded-b-3xl p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredFounder === founder.name ? 1 : 0,
                    y: hoveredFounder === founder.name ? 0 : 20
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <blockquote className="text-lg italic leading-relaxed text-center">
                    "{founder.quote}"
                  </blockquote>
                </motion.div>
              </div>

              {/* Description Card */}
              <motion.div
                className="mt-6 p-6 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 leading-relaxed">
                  {founder.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div 
          className="text-center mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-charcoal italic leading-relaxed mb-8">
            "Together, we create not just clothes, but dreams woven into reality."
          </blockquote>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-0.5 bg-gold mx-auto mb-2" />
              <p className="text-sm text-gray-500 tracking-widest">TRIPTI</p>
            </div>
            <div className="text-2xl text-gold">+</div>
            <div className="text-center">
              <div className="w-16 h-0.5 bg-gold mx-auto mb-2" />
              <p className="text-sm text-gray-500 tracking-widest">PANKAJ</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
