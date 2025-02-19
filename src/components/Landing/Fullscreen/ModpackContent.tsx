import { Side } from '../../../types';
import { CloseButton } from '../UI';
import { getFullscreenContent } from './utils';
import { FullscreenWrapper } from './FullscreenWrapper';

interface ModpackContentProps {
  side: Side;
  onClose: () => void;
}

export const ModpackContent = ({ side, onClose }: ModpackContentProps) => {
  const { logo, altText } = getFullscreenContent(side, 'modpack');
  const isLeftSide = side === 'left';
  const modpackLinks = isLeftSide ? {
    modpack: "https://taw.net/reforger-modpack",
    title: "Reforger Modpack"
  } : {
    modpack: "https://taw.net/arma3-modpack",
    title: "Arma 3 Modpack"
  };

  return (
    <FullscreenWrapper side={side} type="modpack">
      <div className="relative z-10 h-screen p-8 flex flex-col items-center">
        <img 
          src={logo}
          alt={altText}
          className="h-16 w-[250px] object-contain mb-4"
        />
        <h2 className="text-4xl font-primary uppercase mb-8 text-pure-white">
          Modpack Setup
        </h2>

        <div className="w-full max-w-4xl flex flex-col items-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <button 
              className="bg-tactical-green p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all"
              onClick={() => window.open(modpackLinks.modpack, "_blank")}
            >
              Download {modpackLinks.title}
            </button>
            <button 
              className="bg-tactical-green p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all"
              onClick={() => window.open("https://teamspeak.com/en/downloads/", "_blank")}
            >
              Download TeamSpeak
            </button>
          </div>

          <button 
            className="bg-[#5865F2] p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all w-full"
            onClick={() => window.open("https://discord.gg/vAZ2QgwgJw", "_blank")}
          >
            Join Discord
          </button>
        </div>

        <CloseButton onClose={onClose} />
      </div>
    </FullscreenWrapper>
  );
}; 