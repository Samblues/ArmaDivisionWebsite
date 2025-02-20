import { Side } from '../../../types';
import { CloseButton } from '../UI';
import { getFullscreenContent } from './utils';
import { FullscreenWrapper } from './FullscreenWrapper';
import { 
  fearothy,
  cosmicpanda,
  adriancowan,
  alabbs 
} from '../../../assets';

interface TrainingContentProps {
  side: Side;
  onClose: () => void;
}

interface StaffCardProps {
  name: string;
  role: string;
  image: string;
  className?: string;
}

const StaffCard = ({ name, role, image, className = '' }: StaffCardProps) => (
  <div 
    className={`bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-3 sm:p-4 hover:bg-opacity-70 transition-all duration-300 cursor-pointer transform hover:scale-105 ${className}`}
    onClick={() => window.open(`https://www.taw.net/member/${name}.aspx`, "_blank")}
  >
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <img 
        src={image}
        alt={name}
        className="h-32 w-32 sm:h-48 sm:w-48 object-cover rounded-full"
      />
      <div className="text-center">
        <h4 className="text-lg sm:text-xl font-primary text-[#5865F2] mb-0">{name}</h4>
        <p className="text-xs sm:text-sm text-gray-300">{role}</p>
      </div>
    </div>
  </div>
);

export const TrainingContent = ({ side, onClose }: TrainingContentProps) => {
  const { logo, altText } = getFullscreenContent(side, 'training');
  const isLeftSide = side === 'left';

  if (!isLeftSide) {
    return (
      <FullscreenWrapper side={side} type="training">
        <div className="relative z-10 min-h-screen h-screen p-4 sm:p-8 flex flex-col items-center overflow-y-auto">
          {/* Sticky Header - no background or effects */}
          <div className="sticky top-0 w-full py-2 -mt-4 mb-4">
            <img 
              src={logo}
              alt={altText}
              className="h-10 sm:h-12 w-[180px] sm:w-[200px] object-contain mx-auto"
            />
          </div>

          {/* Scrollable Content */}
          <div className="w-full max-w-4xl flex flex-col items-center gap-4 sm:gap-6 pb-16">
            {/* Staff Section */}
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl font-primary uppercase mb-3 text-pure-white text-center">
                Training Staff
              </h2>
              <div className="flex flex-col items-center gap-3">
                <StaffCard 
                  name="CosmicPanda"
                  role="Training Specialist"
                  image={cosmicpanda}
                  className="w-[220px] sm:w-[240px]"
                />
                <div className="flex flex-row gap-2 overflow-x-auto pb-2 w-full sm:justify-center">
                  {/* Staff cards with reduced size */}
                  <StaffCard 
                    name="AdrianCowan"
                    role="Training Instructor"
                    image={adriancowan}
                    className="w-[200px] sm:w-[220px] shrink-0 sm:shrink"
                  />
                  <StaffCard 
                    name="Alabbs"
                    role="Training Instructor"
                    image={alabbs}
                    className="w-[200px] sm:w-[220px] shrink-0 sm:shrink"
                  />
                  <StaffCard 
                    name="Fearothy"
                    role="Training Instructor"
                    image={fearothy}
                    className="w-[200px] sm:w-[220px] shrink-0 sm:shrink"
                  />
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="w-full px-2">
              <h2 className="text-xl sm:text-2xl font-primary uppercase mb-3 text-pure-white text-center">
                Quick Links
              </h2>
              <div className="space-y-2">
                {/* Buttons with reduced padding */}
                <button 
                  className="w-full bg-tactical-green p-3 sm:p-4 rounded text-lg sm:text-xl text-pure-white font-primary hover:bg-opacity-80 transition-all"
                  onClick={() => window.open("https://drive.google.com/file/d/1K2TwPenBsqtq12SMJF8XcLkoUG4K-QEh/view", "_blank")}
                >
                  CTC Training Mission Download
                </button>
                <button 
                  className="w-full bg-crimson-red p-3 sm:p-4 rounded text-lg sm:text-xl text-pure-white font-primary hover:bg-opacity-80 transition-all"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdykee7E-75ldEvuQ4SYBT1H1dG2v4sFCG5j85dDJYcPVDgUA/formResponse", "_blank")}
                >
                  CTC Badge Request Form
                </button>
                <button 
                  className="w-full bg-crimson-red p-3 sm:p-4 rounded text-lg sm:text-xl text-pure-white font-primary hover:bg-opacity-80 transition-all"
                  onClick={() => window.open("https://docs.google.com/document/d/1rtELGnYTfM9dW2kp0tbCfAKMAJw7Cv9-uMH9NKj2x3c/edit?tab=t.0", "_blank")}
                >
                  AM2 Badge Requirements
                </button>
              </div>
            </div>
          </div>

          <CloseButton onClose={onClose} />
        </div>
      </FullscreenWrapper>
    );
  }

  // Reforger content
  return (
    <FullscreenWrapper side={side} type="training">
      <div className="relative z-10 h-screen p-8 flex flex-col items-center justify-center">
        <img 
          src={logo}
          alt={altText}
          className="h-16 w-[250px] object-contain mb-12"
        />
        
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl sm:text-5xl font-primary uppercase text-pure-white text-center animate-pulse">
            COMING SOON ...
          </h2>
          <div className="w-24 h-1 bg-crimson-red animate-[pulse_2s_ease-in-out_infinite]" />
        </div>

        <div className="absolute bottom-8">
          <CloseButton onClose={onClose} />
        </div>
      </div>
    </FullscreenWrapper>
  );
}; 