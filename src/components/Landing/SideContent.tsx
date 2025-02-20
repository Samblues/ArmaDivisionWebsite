import { motion } from 'framer-motion';
import { SideContentProps, Side } from '@/types';
import { RequirementCard } from './UI';
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
      ? "Weekly Events"
      : "Weekly Events",
    altText: isLeftSide ? "Arma Reforger" : "Arma 3"
  };
};

interface EventCardProps {
  day: string;
  time: string;
  name?: string;
  type?: string;
  battalion?: string;
}

const EventCard = ({ day, time, name, type, battalion }: EventCardProps) => (
  <div className={`bg-black bg-opacity-40 backdrop-blur-sm rounded-lg shadow-md ${battalion ? 'pt-2 pb-3 px-3' : 'p-2'}`}>
    <div className="flex flex-col">
      {battalion && (
        <span className="text-[#5865F2] font-bold text-sm mb-2 border-b border-[#5865F2] pb-1">
          {battalion}
        </span>
      )}
      <div className="flex items-center gap-2">
        {type && (
          <span className="font-bold text-[#FF6B6B] text-sm">
            {type}
          </span>
        )}
        <span className="text-pure-white font-secondary text-sm">
          {`${day} - ${time}`}
        </span>
      </div>
      {name && (
        <span className="text-pure-white font-secondary text-sm">
          {name}
        </span>
      )}
    </div>
  </div>
);

interface SideContentProps {
  side: Side;
  width: MotionValue<string>;
  hoveredSide: Side | null;
  isCenterHovered: boolean;
  onSetFullscreenContent: (content: { type: ContentType; side: Side }) => void;
  className?: string;
}

export const SideContent = ({
  side,
  width,
  hoveredSide,
  isCenterHovered,
  onSetFullscreenContent,
  className = ''
}: SideContentProps) => {
  const { background, logo, title, subtitle, altText } = getSideContent(side);

  const renderEvents = () => {
    const isLeftSide = side === 'left';
    
    if (isLeftSide) {
      return (
        <div className="w-[300px] mx-auto space-y-1">
          <EventCard 
            battalion="AM 1 [EU] (CEST)"
            day="Sunday"
            time="20:30 - 22:30"
            type="(Optional PvP)"
          />
          <EventCard 
            day="Tuesday"
            time="20:30 - 22:30"
            type="(Modded PvE)"
          />
          <EventCard 
            day="Thursday"
            time="20:30 - 22:30"
            type="(Vanilla PvE)"
          />
          <div className="mt-3">
            <EventCard 
              battalion="AM 4 [NA] (EST)"
              day="Friday"
              time="19:00 - 21:30"
              type="(Modded PvE)"
            />
          </div>
        </div>
      );
    }
    
    return (
      <>
        <div className="w-[300px] mx-auto space-y-1">
          <EventCard 
            battalion="AM 2 [EU] (CEST)"
            day="Sunday"
            time="20:00 - 22:30"
             type="(Modded PvE)"
          />
          <EventCard 
            day="Thursday"
            time="20:00 - 22:30"
             type="(Modded PvE)"
          />
        </div>
        <div className="w-[300px] mx-auto space-y-2 md:space-y-4 mt-4">
          <EventCard 
            battalion="AM 3 [NA] (EST)"
            day="Saturday"
            time="19:00 - 21:30"
             type="(Modded PvE)"
          />
        </div>
      </>
    );
  };

  return (
    <motion.div
      className={`h-full flex flex-col items-center pt-[20vh] relative ${className}`}
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
      <div className={`relative z-10 text-white transition-opacity duration-300 flex flex-col items-center gap-3 sm:gap-4 md:gap-8 w-full px-2 sm:px-4 md:px-8 ${
        isCenterHovered ? 'opacity-50' : 
        hoveredSide === side ? 'opacity-100' : 'opacity-50'
      }`}>
        <img 
          src={logo}
          alt={altText}
          className="h-16 sm:h-20 md:h-24 w-[200px] sm:w-[250px] md:w-[300px] object-contain mb-2 sm:mb-4"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-primary uppercase mb-1 sm:mb-2 text-pure-white text-center">{title}</h2>
        <h3 className="text-xl sm:text-2xl font-primary uppercase text-center">{subtitle}</h3>

        {/* Events */}
        {renderEvents()}

        {/* Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <RequirementCard 
            title="Bootcamp and Modpack"
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