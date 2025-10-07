import React from 'react';
import { motion } from 'framer-motion';

const FabricGallery = () => {
  const fabrics = [
    {
      id: 1,
      name: 'Banarasi Silk',
      icon: '👑',
      description: 'Luxurious handwoven silk from Varanasi',
      details: 'Traditional brocade with intricate patterns',
      color: 'Deep Gold'
    },
    {
      id: 2,
      name: 'Pure Silk',
      icon: '✨',
      description: 'Finest quality mulberry silk',
      details: 'Smooth texture with natural sheen',
      color: 'Pearl White'
    },
    {
      id: 3,
      name: 'Georgette',
      icon: '🌊',
      description: 'Flowing and elegant drape',
      details: 'Lightweight with beautiful movement',
      color: 'Soft Rose'
    },
    {
      id: 4,
      name: 'Organza',
      icon: '💫',
      description: 'Sheer and sophisticated',
      details: 'Crisp texture with transparent quality',
      color: 'Ivory Cream'
    },
    {
      id: 5,
      name: 'Chiffon',
      icon: '🦋',
      description: 'Lightweight and graceful',
      details: 'Delicate fabric with flowing drape',
      color: 'Blush Pink'
    },
    {
      id: 6,
      name: 'Cotton',
      icon: '🌿',
      description: 'Comfortable and breathable',
      details: 'Natural fiber with soft feel',
      color: 'Natural Beige'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blush to-ivory relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4b483' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
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
          <h2 className="section-title">Feel the Luxury</h2>
          <p className="section-subtitle">
            Experience the textures that define our craft through this curated collection of premium fabrics
          </p>
        </motion.div>

        {/* Premium Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {fabrics.map((fabric, index) => (
            <motion.div
              key={fabric.id}
              className="group premium-card hover:-translate-y-5 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Fabric Icon */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
                  {fabric.icon}
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2 font-playfair">
                  {fabric.name}
                </h3>
                <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {fabric.description}
                </p>
                
                <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-4">
                  <p className="text-sm text-gold font-medium tracking-wider uppercase mb-2">
                    {fabric.details}
                  </p>
                  <p className="text-charcoal font-semibold">
                    Available in {fabric.color}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-4 border-gold opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              
              {/* Hover Details Overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gold/95 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center text-white">
                  <motion.p 
                    className="text-sm font-medium tracking-wider uppercase mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {fabric.details}
                  </motion.p>
                  <motion.p 
                    className="text-white/90 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Available in {fabric.color}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-8">
            Want to feel these luxurious fabrics in person?
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('consultation');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Schedule a Visit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FabricGallery;
