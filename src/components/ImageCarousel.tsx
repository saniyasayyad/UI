import React, { useState, useEffect } from 'react';

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Higher quality images with consistent dimensions
  
    const images = [
  'https://images.pexels.com/photos/14395447/pexels-photo-14395447.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/10238542/pexels-photo-10238542.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/4105330/pexels-photo-4105330.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/31708153/pexels-photo-31708153.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/16233913/pexels-photo-16233913.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/13471281/pexels-photo-13471281.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/7686352/pexels-photo-7686352.jpeg?auto=compress&cs=tinysrgb&w=1600',
];
  

  // Preload images for better performance
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await Promise.all(imagePromises);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[350px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0"></div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
      
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image}
            alt={`Devotional scene ${index + 1}`}
            className="w-full h-full object-cover"
            loading="eager"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-80 animate-pulse z-20" />
      <div className="absolute bottom-8 left-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 animate-bounce z-20" />
    </div>
  );
};

export default ImageCarousel;