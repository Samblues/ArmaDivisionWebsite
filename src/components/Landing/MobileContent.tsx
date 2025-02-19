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

      {/* Content Container - Lower z-index */}
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

        {/* YouTube Video */}
        <div className="w-full bg-deep-black rounded-lg shadow-2xl overflow-hidden mb-6">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ExqPui_UU-s"
              title="TAW ARMA Division"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Game Selection */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <h2 className="text-lg font-primary text-pure-white uppercase text-shadow-glow">
            Choose Game
          </h2>
          <div className="flex w-full gap-3">
            <button
              className={`flex-1 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 ${
                activeTab === 'left' ? 'bg-opacity-70' : ''
              }`}
              onClick={() => setActiveTab('left')}
            >
              <img 
                src={ArmaReforgerLogo}
                alt="Arma Reforger"
                className="h-12 w-full object-contain"
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
                className="h-12 w-full object-contain"
              />
            </button>
          </div>
        </div>

        {/* Requirements - Only show when a tab is selected */}
        {activeTab && (
          <div className="grid grid-cols-3 gap-2 w-full mb-6">
            <RequirementCard 
              title="Modpack" 
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

        {/* TAW Seal Logo at bottom */}
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