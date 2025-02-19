import { Side } from '../../../types';
import { CloseButton } from '../UI';
import { getFullscreenContent } from './utils';
import { FullscreenWrapper } from './FullscreenWrapper';

interface TrainingContentProps {
  side: Side;
  onClose: () => void;
}

export const TrainingContent = ({ side, onClose }: TrainingContentProps) => {
  const { logo, altText } = getFullscreenContent(side, 'training');

  return (
    <FullscreenWrapper side={side} type="training">
      <div className="relative z-10 h-screen p-8 flex flex-col items-center">
        <img 
          src={logo}
          alt={altText}
          className="h-16 w-[250px] object-contain mb-4"
        />
        <h2 className="text-4xl font-primary uppercase mb-8 text-pure-white">
          Training Office
        </h2>

        <div className="w-full max-w-4xl flex flex-col items-center gap-8">
          {/* Training Schedule */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg w-full">
            <h3 className="text-2xl font-primary uppercase text-pure-white mb-4">
              Training Schedule
            </h3>
            {/* Add training schedule */}
          </div>

          {/* Contact Information */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg w-full">
            <h3 className="text-2xl font-primary uppercase text-pure-white mb-4">
              Training Staff
            </h3>
            {/* Add staff contacts */}
          </div>

          <button 
            className="bg-[#5865F2] p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all w-full"
            onClick={() => window.open("https://discord.gg/vAZ2QgwgJw", "_blank")}
          >
            Contact Training Office
          </button>
        </div>

        <CloseButton onClose={onClose} />
      </div>
    </FullscreenWrapper>
  );
}; 