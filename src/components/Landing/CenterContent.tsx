import { motion } from 'framer-motion';
import { CenterContentProps } from '@/types';
import { TAWSEALLogo, ReforgerLogo } from '@/assets';

export const CenterContent = ({ 
  isCenterHovered, 
  setIsCenterHovered, 
  centerOffset 
}: CenterContentProps) => {
  return (
    <motion.div 
      className="absolute top-4 sm:top-6 md:top-8 left-1/2 z-30 flex flex-col items-center gap-4 sm:gap-6 min-h-[85vh] justify-between w-full max-w-[90vw] lg:max-w-[70vw]"
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
        <h1 className="text-lg sm:text-xl lg:text-2xl font-primary font-bold text-pure-white uppercase tracking-wide text-shadow-glow hover:text-shadow-glow-intense transition-all duration-300 text-center">
          The Art of Warfare – ARMA Division
        </h1>
      </div>

      {/* YouTube Video */}
      <div className="h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[60vh] w-[min(280px,70vw)] sm:w-[min(320px,75vw)] md:w-[min(360px,75vw)] lg:w-[min(400px,80vw)] bg-deep-black rounded-lg shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-110 hover:z-50">
        <div className="relative w-full h-full">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/ExqPui_UU-s?si=SVymjQ8dOie7blbP"
            title="TAW ARMA Division"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

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