import { motion } from 'framer-motion';
import { useState } from 'react';
import { CenterContentProps } from '@/types';
import { TAWSEALLogo, ReforgerLogo } from '@/assets';

export const CenterContent = ({ 
  isCenterHovered, 
  setIsCenterHovered, 
  centerOffset 
}: CenterContentProps) => {
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  return (
    <motion.div 
      className="absolute top-4 sm:top-6 md:top-8 left-1/2 z-30 flex flex-col items-center gap-4 sm:gap-6 min-h-[85vh] justify-between w-fit"
      style={{ 
        transform: 'none',
        x: centerOffset,
      }}
      onMouseEnter={() => setIsCenterHovered(true)}
      onMouseLeave={() => setIsCenterHovered(false)}
    >
      {/* Logo and Title */}
      <div className="flex flex-col items-center gap-2 sm:gap-4">
        <img 
          src={ReforgerLogo}
          alt="The Art of Warfare – ARMA Division"
          className="h-[8vh] sm:h-[10vh] md:h-[12vh] min-h-[60px] max-h-[120px] object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300"
        />
        <h1 className="text-lg sm:text-xl lg:text-2xl font-primary font-bold text-pure-white uppercase tracking-wide text-shadow-glow hover:text-shadow-glow-intense transition-all duration-300 whitespace-nowrap">
          The Art of Warfare – ARMA Division
        </h1>
      </div>

      {/* YouTube Video with Close Button */}
      {isVideoVisible ? (
        <div className="relative">
          <button
            onClick={() => setIsVideoVisible(false)}
            className="absolute -top-2 -right-2 w-8 h-8 bg-deep-black rounded-full flex items-center justify-center text-pure-white hover:bg-red-600 transition-colors duration-300 z-50"
            aria-label="Close video"
          >
            <span className="text-xl">&times;</span>
          </button>
          <div className="h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[60vh] w-[calc(35vh*9/16)] sm:w-[calc(40vh*9/16)] md:w-[calc(45vh*9/16)] lg:w-[calc(60vh*9/16)] bg-deep-black rounded-lg shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-110 hover:z-50 pointer-events-auto">
            <div className="relative w-full h-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/y7sRYs4sGkU?si=s510k6VULGcTjz36"
                title="TAW ARMA Division"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsVideoVisible(true)}
          className="px-4 py-2 bg-deep-black text-pure-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Show Video
        </button>
      )}

      {/* TAW Seal Logo */}
      <img 
        src={TAWSEALLogo}
        alt="TAW"
        className="h-[8vh] sm:h-[9vh] md:h-[10vh] min-h-[50px] max-h-[90px] object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300 cursor-pointer mt-auto"
        onClick={() => window.open("https://www.taw.net", "_blank", "noopener,noreferrer")}
      />
    </motion.div>
  );
}; 