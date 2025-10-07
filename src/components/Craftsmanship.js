import React from 'react';
import { motion } from 'framer-motion';

const Craftsmanship = () => {
  const crafts = [
    {
      id: 1,
      title: 'Zardozi by Hand',
      icon: '👑',
      quote: 'Perfection lives in the patience of a single stitch.',
      description: 'Each Zardozi piece is hand-stitched with pure metal threads, creating regal patterns that catch every ray of light.',
      details: 'Traditional metal embroidery technique using gold and silver threads'
    },
    {
      id: 2,
      title: 'Stitching Perfection',
      icon: '💎',
      quote: 'Every thread tells a story of dedication and love.',
      description: 'Intricate beadwork adds dimension and sparkle, with each bead placed by skilled hands for perfect symmetry.',
      details: 'Hand-placed sequins and beads for dimensional artistry'
    },
    {
      id: 3,
      title: 'Master Tailoring',
      icon: '✂️',
      quote: 'The perfect cut is the foundation of every masterpiece.',
      description: 'Precision cutting ensures the perfect drape and fit, with every cut made to enhance your natural silhouette.',
      details: 'Expert pattern making and precision cutting techniques'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="craftsmanship" className="py-20 bg-ivory relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4b483' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Artisan Craftsmanship</h2>
          <p className="section-subtitle">
            Every piece tells a story of patience, skill, and passion passed down through generations
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {crafts.map((craft) => (
            <motion.div
              key={craft.id}
              className="group relative premium-card hover:-translate-y-5 cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon Header */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">
                  {craft.icon}
                </div>
                <h3 className="text-3xl font-bold text-charcoal mb-4 font-playfair">
                  {craft.title}
                </h3>
              </div>

              {/* Content */}
              <div className="text-center">
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {craft.description}
                </p>
                
                <div className="border-t border-gold/20 pt-6">
                  <p className="text-sm text-gold font-medium tracking-wider uppercase mb-4">
                    {craft.details}
                  </p>
                  <blockquote className="text-xl italic text-charcoal font-light leading-relaxed">
                    "{craft.quote}"
                  </blockquote>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-4 border-gold opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              
              {/* Hover Quote Overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gold/95 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center text-white">
                  <motion.p 
                    className="text-lg italic leading-relaxed font-light"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    "{craft.quote}"
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div 
          className="text-center mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-charcoal italic leading-relaxed">
            "In our atelier, time stands still. Each creation is a meditation, 
            a conversation between tradition and innovation."
          </blockquote>
          <cite className="block mt-6 text-lg text-gold font-medium">
            — Tripti & Pankaj, Master Artisans
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default Craftsmanship;
