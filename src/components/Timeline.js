import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const milestones = [
    {
      year: '1999',
      title: 'The Beginning',
      description: 'Our first bridal client walked through our doors, beginning a journey of creating timeless elegance.',
      icon: '🌱',
      achievement: 'First Client'
    },
    {
      year: '2005',
      title: 'Growing Family',
      description: 'Expanded our team with master artisans, each bringing generations of traditional craftsmanship.',
      icon: '👥',
      achievement: 'Team Expansion'
    },
    {
      year: '2010',
      title: 'New Atelier',
      description: 'Moved to our current location, a space designed to inspire creativity and celebrate heritage.',
      icon: '🏛️',
      achievement: 'New Studio'
    },
    {
      year: '2015',
      title: 'Recognition',
      description: 'Featured in leading fashion magazines for our innovative approach to traditional designs.',
      icon: '🏆',
      achievement: 'Media Recognition'
    },
    {
      year: '2020',
      title: 'Digital Era',
      description: 'Launched our online presence while maintaining the personal touch that defines our brand.',
      icon: '💻',
      achievement: 'Digital Launch'
    },
    {
      year: '2024',
      title: '25 Years Strong',
      description: 'Celebrating 25 years of creating memories, one beautiful outfit at a time.',
      icon: '🎉',
      achievement: 'Silver Jubilee'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        const progress = Math.max(0, Math.min(1, 
          (scrollTop + windowHeight - elementTop) / (elementHeight + windowHeight)
        ));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <h2 className="section-title">Our Journey Through Time</h2>
          <p className="section-subtitle">
            Twenty-five years of passion, dedication, and countless beautiful memories
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-gold-deep to-gold">
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold-deep to-gold"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: '0 0 20px rgba(212, 180, 131, 0.5)'
              }}
              initial={{ height: '0%' }}
              animate={{ height: `${scrollProgress * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-32">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gold rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {milestone.year.slice(-2)}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <motion.div 
                    className="premium-card hover:-translate-y-5 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Icon Header */}
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
                        {milestone.icon}
                      </div>
                      <div className="bg-gold/10 rounded-2xl p-4 mb-6">
                        <h3 className="text-3xl font-bold text-charcoal mb-2 font-playfair">
                          {milestone.year}
                        </h3>
                        <p className="text-sm text-gold font-medium tracking-wider uppercase">
                          {milestone.achievement}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-2xl font-semibold text-gold mb-6 font-playfair">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Gold Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Anniversary Celebration */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gold to-gold-deep rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-4xl md:text-5xl font-bold mb-4 font-playfair"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                25 Years of Excellence
              </motion.h3>
              <motion.p 
                className="text-xl mb-8 opacity-90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Thank you for being part of our beautiful journey
              </motion.p>
              <motion.button
                className="bg-white text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-ivory transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('consultation');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Join Our Story
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
