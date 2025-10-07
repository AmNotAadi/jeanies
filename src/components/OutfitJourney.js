import React from 'react';
import { motion } from 'framer-motion';

const OutfitJourney = () => {
  const steps = [
    {
      id: 1,
      title: 'Bring Your Fabric',
      description: 'Share your vision and favorite fabrics with us',
      icon: '🧵',
      details: 'Consultation & Material Selection'
    },
    {
      id: 2,
      title: 'Discuss Your Design',
      description: 'We collaborate to create your perfect design',
      icon: '💭',
      details: 'Design Development & Planning'
    },
    {
      id: 3,
      title: 'Our Artisans Craft',
      description: 'Master craftsmen bring your vision to life',
      icon: '👨‍🎨',
      details: 'Handcrafted Creation Process'
    },
    {
      id: 4,
      title: 'You Wear Confidence',
      description: 'Step out feeling beautiful and empowered',
      icon: '✨',
      details: 'Final Fitting & Delivery'
    }
  ];

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
          <h2 className="section-title">Your Outfit Journey</h2>
          <p className="section-subtitle">
            From concept to creation, follow the magical process of bringing your dream outfit to life
          </p>
        </motion.div>

        {/* Journey Path */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-deep to-gold transform -translate-y-1/2 z-0" />
          
          {/* Steps */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-white rounded-full shadow-xl border-4 border-gold mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
                <div className="premium-card hover:-translate-y-3 group">
                  {/* Icon Header */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                    </div>
                    <div className="bg-gold/10 rounded-2xl p-4 mb-6">
                      <h3 className="text-xl font-bold text-charcoal mb-2 font-playfair">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gold font-medium tracking-wider uppercase">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 text-center leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Gold Accent */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to begin your journey with us?
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
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OutfitJourney;
