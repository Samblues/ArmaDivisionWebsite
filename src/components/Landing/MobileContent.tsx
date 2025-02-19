import { useState } from 'react';
import { Side, ContentType } from '@/types';
import { EventCard, RequirementCard } from './UI';
import { 
  TAWSEALLogo, 
  ReforgerLogo,
  ArmaReforgerLogo,
  Arma3Logo,
  AmBackground
} from '@/assets';

interface MobileContentProps {
  setFullscreenContent: (content: { type: ContentType; side: Side }) => void;
}

export const MobileContent = ({ setFullscreenContent }: MobileContentProps) => {
  const [activeTab, setActiveTab] = useState<Side | null>(null);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-deep-black relative">
      {/* Background when no tab is selected */}
      {!activeTab && (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center min-h-screen"
            style={{ backgroundImage: `url(${AmBackground})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 min-h-screen" />
          </div>
        </div>
      )}

      {/* Central Content */}
      <div className="h-full flex flex-col items-center justify-between p-3 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-3">
          <img 
            src={TAWSEALLogo}
            alt="TAW"
            className="h-[8vh] object-contain cursor-pointer"
            onClick={() => window.open("https://www.taw.net", "_blank", "noopener,noreferrer")}
          />
          
          <h1 className="text-lg font-primary font-bold text-pure-white uppercase tracking-wide text-shadow-glow whitespace-nowrap scale-[0.85]">
            The Art of Warfare - ARMA Division
          </h1>

          <img 
            src={ReforgerLogo}
            alt="The Art of Warfare – ARMA Division"
            className="h-[15vh] object-contain"
          />
        </div>

        {/* Game Selection */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-xl font-primary text-pure-white uppercase text-shadow-glow mb-2">
            Choose Game
          </h2>
          <div className="flex w-full gap-3 px-2 h-[18vh]">
            <button
              className={`flex-1 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 ${
                activeTab === 'left' ? 'bg-opacity-70' : ''
              }`}
              onClick={() => setActiveTab('left')}
            >
              <img 
                src={ArmaReforgerLogo}
                alt="Arma Reforger"
                className="h-full w-full object-contain"
              />
            </button>
            <button
              className={`flex-1 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 ${
                activeTab === 'right' ? 'bg-opacity-70' : ''
              }`}
              onClick={() => setActiveTab('right')}
            >
              <img 
                src={Arma3Logo}
                alt="Arma 3"
                className="h-full w-full object-contain"
              />
            </button>
          </div>
        </div>

        {/* Requirements */}
        {activeTab && (
          <div className="grid grid-cols-3 gap-2 w-full">
            <RequirementCard 
              title="Modpack" 
              onClick={() => setFullscreenContent({ type: 'modpack', side: activeTab })}
            />
            <RequirementCard 
              title="Rules" 
              onClick={() => setFullscreenContent({ type: 'rules', side: activeTab })}
            />
            <RequirementCard 
              title="Training" 
              onClick={() => setFullscreenContent({ type: 'training', side: activeTab })}
            />
          </div>
        )}
      </div>
    </div>
  );
}; 