// Sports.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import sp1 from '../assets/sp1.jpg'; // Import your sports images

const Sports = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const photos = [
    {
      id: 1,
      url: sp1,
      title: 'National Championship',
      description: 'Secured gold medal in the national championship tournament.',
      year: '2023'
    },
    // Add 8 more similar objects with your sp1-sp9 images
  ];

  return (
    <section className="min-h-screen py-16 bg-black/60" id="sports">
      <div className="container mx-auto">
        <motion.h2 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-[32px] lg:text-[36px] font-secondary font-semibold text-accent mb-12 text-center"
        >
          Sports <span className="text-white">Achievements</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 px-4">
          {/* Gallery Grid */}
          <motion.div 
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
          >
            <div className="grid grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(index)}
                  className={`relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg 
                    transform transition-all duration-300 hover:scale-105 group
                    ${selectedPhoto === index ? 'ring-2 ring-accent' : ''}`}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="text-accent text-sm font-secondary">{photo.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              {photos[selectedPhoto] && (
                <div className="flex flex-col h-[400px] gap-6">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={photos[selectedPhoto].url}
                      alt={photos[selectedPhoto].title}
                      className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <motion.div
                    variants={fadeIn('up', 0.2)}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl font-secondary font-semibold text-accent">
                      {photos[selectedPhoto].title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-light">
                      {photos[selectedPhoto].description}
                    </p>
                    <span className="text-sm text-accent/80">
                      {photos[selectedPhoto].year}
                    </span>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sports;