import { motion } from 'framer-motion';
import { SideContentProps, Side } from '@/types';
import { EventCard, RequirementCard } from './UI';
import { 
  ArmaReforgerLogo, 
  Arma3Logo, 
  ReforgerBackground, 
  Arma3Background, 
  DiscordLogo 
} from '@/assets';

const getSideContent = (side: Side) => {
  const isLeftSide = side === 'left';
  return {
    background: isLeftSide ? ReforgerBackground : Arma3Background,
    logo: isLeftSide ? ArmaReforgerLogo : Arma3Logo,
    title: isLeftSide 
      ? "1st Battalion [EU] & 4th Battalion [NA]"
      : "2nd Battalion [EU] & 3rd Battalion [NA]",
    subtitle: isLeftSide 
      ? "Arma Reforger - Event"
      : "Arma III - Events",
    altText: isLeftSide ? "Arma Reforger" : "Arma 3"
  };
};

export const SideContent = ({
  side,
  width,
  hoveredSide,
  isCenterHovered,
  onSetFullscreenContent
}: SideContentProps) => {
  const { background, logo, title, subtitle, altText } = getSideContent(side);

  return (
    <motion.div
      className="h-full flex flex-col items-center pt-[20vh] relative"
      style={{ width }}
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-white transition-opacity duration-300 flex flex-col items-center gap-4 md:gap-8 w-full px-4 md:px-8 ${
        isCenterHovered ? 'opacity-50' : 
        hoveredSide === side ? 'opacity-100' : 'opacity-50'
      }`}>
        <img 
          src={logo}
          alt={altText}
          className="h-24 w-[300px] object-contain mb-4"
        />
        <h2 className="text-4xl font-primary uppercase mb-2 text-pure-white">{title}</h2>
        <h3 className="text-2xl font-primary uppercase">{subtitle}</h3>

        {/* Events */}
        <div className="w-[300px] mx-auto space-y-2 md:space-y-4">
          <EventCard type="[PVE]" day="Tuesday" time="19:30" name="[TAW] Public Casual Milsim" />
          <EventCard type="[PVP]" day="Thursday" time="19:30" name="[TAW] Sieze and Secure" />
          <EventCard type="[PVP]" day="Sunday" time="19:30" name="[TAW] Sieze and Secure" />
        </div>

        {/* Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <RequirementCard 
            title="Modpack" 
            onClick={() => onSetFullscreenContent({ type: 'modpack', side })}
          />
          <RequirementCard 
            title="Rules" 
            onClick={() => onSetFullscreenContent({ type: 'rules', side })}
          />
          <RequirementCard 
            title="Training Office" 
            onClick={() => onSetFullscreenContent({ type: 'training', side })}
          />
        </div>

        {/* Discord Logo */}
        <img 
          src={DiscordLogo}
          alt="Discord"
          className="h-[8vh] object-contain filter drop-shadow-[0_0_8px_rgba(12,64,62,0.6)] hover:drop-shadow-[0_0_12px_rgba(12,64,62,0.8)] animate-[pulse-glow_3s_ease-in-out_infinite] cursor-pointer mt-4"
          onClick={() => window.open("https://discord.gg/vAZ2QgwgJw", "_blank", "noopener,noreferrer")}
        />
      </div>
    </motion.div>
  );
}; 