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
      className="absolute top-8 left-1/2 z-30 flex flex-col items-center gap-6 h-[85vh] justify-between"
      style={{ 
        transform: 'none',
        x: centerOffset,
      }}
      onMouseEnter={() => setIsCenterHovered(true)}
      onMouseLeave={() => setIsCenterHovered(false)}
    >
      {/* Logo and Title */}
      <div className="flex flex-col items-center gap-4">
        <img 
          src={ReforgerLogo}
          alt="The Art of Warfare – ARMA Division"
          className="h-[15vh] object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300"
        />
        <h1 className="text-2xl font-primary font-bold text-pure-white uppercase tracking-wide text-shadow-glow hover:text-shadow-glow-intense transition-all duration-300">
          The Art of Warfare – ARMA Division
        </h1>
      </div>

      {/* YouTube Video - Portrait mode with increased width */}
      <div className="w-[500px] bg-deep-black rounded-lg shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-125 hover:z-50">
        <div className="relative w-full" style={{ paddingTop: '140%' }}> {/* More portrait but not as extreme as before */}
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
        className="h-[12vh] object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300 cursor-pointer"
        onClick={() => window.open("https://www.taw.net", "_blank", "noopener,noreferrer")}
      />
    </motion.div>
  );
}; 