import { useState } from 'react';
import { Side, ContentType } from '../../types';
import { EventCard, RequirementCard } from './UI';
import { 
  TAWSEALLogo, 
  ReforgerLogo,
  ArmaReforgerLogo,
  Arma3Logo,
  AmBackground,
  ReforgerBackground,
  Arma3Background
} from '../../assets';

interface MobileContentProps {
  setFullscreenContent: (content: { type: ContentType; side: Side }) => void;
}

export const MobileContent = ({ setFullscreenContent }: MobileContentProps) => {
  const [activeTab, setActiveTab] = useState<Side | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-deep-black relative z-0">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${
              activeTab === 'left' 
                ? ReforgerBackground 
                : activeTab === 'right' 
                  ? Arma3Background 
                  : AmBackground
            })`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen p-4">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <img 
            src={ReforgerLogo}
            alt="The Art of Warfare – ARMA Division"
            className="h-[12vh] object-contain"
          />
          <h1 className="text-xl font-primary font-bold text-pure-white uppercase tracking-wide text-shadow-glow text-center">
            The Art of Warfare – ARMA Division
          </h1>
        </div>

        {/* Show YouTube Video only when no tab is selected */}
        {!activeTab && (
          <div className="w-full aspect-[9/16] bg-deep-black rounded-lg shadow-2xl overflow-hidden mb-6">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/y7sRYs4sGkU?si=s510k6VULGcTjz36"
              title="TAW ARMA Division"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Game Selection */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <h2 className="text-lg font-primary text-pure-white uppercase text-shadow-glow">
            Choose Game
          </h2>
          <div className="flex w-full gap-3">
            <button
              className={`flex-1 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 
                ${activeTab === 'left' ? 'bg-opacity-70 border-2 border-crimson-red' : 'border-2 border-transparent'}`}
              onClick={() => setActiveTab('left')}
            >
              <img 
                src={ArmaReforgerLogo}
                alt="Arma Reforger"
                className="h-12 w-full object-contain"
              />
            </button>
            <button
              className={`flex-1 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 
                ${activeTab === 'right' ? 'bg-opacity-70 border-2 border-crimson-red' : 'border-2 border-transparent'}`}
              onClick={() => setActiveTab('right')}
            >
              <img 
                src={Arma3Logo}
                alt="Arma 3"
                className="h-12 w-full object-contain"
              />
            </button>
          </div>
        </div>

        {/* Show Events when a tab is selected */}
        {activeTab && (
          <div className="mb-6">
            <EventList side={activeTab} />
          </div>
        )}

        {/* Requirements */}
        {activeTab && (
          <div className="grid grid-cols-3 gap-2 w-full mb-6">
            <RequirementCard 
              title="Bootcamp and Modpack"
              onClick={() => {
                setFullscreenContent({ type: 'modpack', side: activeTab });
              }}
            />
            <RequirementCard 
              title="Rules" 
              onClick={() => {
                setFullscreenContent({ type: 'rules', side: activeTab });
              }}
            />
            <RequirementCard 
              title="Training" 
              onClick={() => {
                setFullscreenContent({ type: 'training', side: activeTab });
              }}
            />
          </div>
        )}

        {/* TAW Seal Logo */}
        <div className="mt-auto pt-4">
          <img 
            src={TAWSEALLogo}
            alt="TAW"
            className="h-[8vh] object-contain mx-auto cursor-pointer"
            onClick={() => window.open("https://www.taw.net", "_blank", "noopener,noreferrer")}
          />
        </div>
      </div>
    </div>
  );
};

// Create a new EventList component to handle the events display
const EventList = ({ side }: { side: Side }) => {
  if (side === 'left') {
    return (
      <div className="w-full space-y-1">
        <EventCard 
          battalion="AM 1 [EU] (CEST)"
          day="Sunday"
          time="20:30 - 22:30"
          type="(Optional PvP)"
          name="Weekly Event"
        />
        <EventCard 
          day="Tuesday"
          time="20:30 - 22:30"
          type="(Modded PvE)"
          name="Weekly Event"
        />
        <EventCard 
          day="Thursday"
          time="20:30 - 22:30"
          type="(Vanilla PvE)"
          name="Weekly Event"
        />
        <div className="mt-3">
          <EventCard 
            battalion="AM 4 [NA] (EST)"
            day="Friday"
            time="19:00 - 21:30"
            type="(Modded PvE)"
            name="Weekly Event"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-1">
      <EventCard 
        battalion="AM 2 [EU] (CEST)"
        day="Sunday"
        time="20:00 - 22:30"
        type="(Modded PvE)"
        name="Weekly Event"
      />
      <EventCard 
        day="Thursday"
        time="20:00 - 22:30"
        type="(Modded PvE)"
        name="Weekly Event"
      />
      <div className="mt-3">
        <EventCard 
          battalion="AM 3 [NA] (EST)"
          day="Saturday"
          time="19:00 - 21:30"
          type="(Modded PvE)"
          name="Weekly Event"
        />
      </div>
    </div>
  );
};