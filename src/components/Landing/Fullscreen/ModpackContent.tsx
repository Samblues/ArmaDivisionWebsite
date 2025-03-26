import { Side } from '../../../types';
import { CloseButton } from '../UI';
import { getFullscreenContent } from './utils';
import { FullscreenWrapper } from './FullscreenWrapper';
import { 
  tyran,
  prophet,
  fearothy,
  ReforgerLogo,
  ARMods
} from '../../../assets';

interface ModpackContentProps {
  side: Side;
  onClose: () => void;
}

interface DrillInstructorCardProps {
  name: string;
  role: string;
  image: string;
  className?: string;
}

const DrillInstructorCard = ({ name, role, image, className = '' }: DrillInstructorCardProps) => (
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

export const ModpackContent = ({ side, onClose }: ModpackContentProps) => {
  const { logo, altText } = getFullscreenContent(side, 'modpack');
  const isLeftSide = side === 'left';
  const modpackLinks = isLeftSide ? {
    modpack: "https://steamcommunity.com/sharedfiles/filedetails/?id=2293037577",
    title: "Reforger Modpack"
  } : {
    modpack: "https://steamcommunity.com/sharedfiles/filedetails/?id=2293038398",
    title: "Arma 3 Modpack"
  };

  // Different DIs based on side
  const getDrillInstructors = () => {
    if (isLeftSide) {
      return {
        head: {
          name: "EvilKim",
          role: "Staff Officer",
          image: ReforgerLogo // Using Reforger_V4.png temporarily
        },
        instructors: [
          {
            name: "Tapasje",
            role: "Drill Instructor",
            image: ReforgerLogo
          },
          {
            name: "SternbildUK",
            role: "Drill Instructor / PIA",
            image: ReforgerLogo
          }
        ]
      };
    }
    return {
      head: {
        name: "Fear",
        role: "Head Drill Instructor",
        image: fearothy
      },
      instructors: [
        {
          name: "Prophet",
          role: "Drill Instructor",
          image: prophet
        },
        {
          name: "TyrannesRex",
          role: "Drill Instructor",
          image: tyran

        }
      ]
    };
  };

  const drillInstructors = getDrillInstructors();

  const renderDownloadsSection = () => {
    if (isLeftSide) {
      return (
        <div className="w-full max-w-4xl mb-12">
          <h2 className="text-3xl font-primary uppercase mb-4 text-pure-white text-center">
            How To Download The Mods
          </h2>
          <h3 className="text-xl font-primary text-pure-white text-center mb-8">
            Just connect to the server
          </h3>
          <div className="w-full flex justify-center mb-8">
            <img 
              src={ARMods}
              alt="AR Mods"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
          <button 
            className="w-full bg-crimson-red p-6 rounded-lg text-2xl text-pure-white font-primary hover:bg-opacity-80 transition-all"
            onClick={() => window.open("https://docs.google.com/presentation/d/1AmUn0BdCad051XVw3gQ7Ou7HJr3ziLuQ/edit#slide=id.p1", "_blank")}
          >
            Joining us (Bootcamp) documentation
          </button>
        </div>
      );
    }

    return (
      <>
        <div className="w-full max-w-4xl mb-12">
          <h2 className="text-3xl font-primary uppercase mb-8 text-pure-white text-center">
            Required Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              className="bg-tactical-green p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all"
              onClick={() => window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=2293037577", "_blank")}
            >
              Battalion Modpack
            </button>
            <button 
              className="bg-tactical-green p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all"
              onClick={() => window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=2293038398", "_blank")}
            >
              Clientside Modpack
            </button>
            <button 
              className="bg-tactical-green p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all"
              onClick={() => window.open("https://www.teamspeak.com/en/downloads/#ts3client", "_blank")}
            >
              Download TeamSpeak
            </button>
          </div>
        </div>

        {/* Bootcamp Section with video for Arma 3 only */}
        <div className="w-full max-w-4xl">
          <button 
            className="w-full bg-crimson-red p-6 rounded-t-lg text-2xl text-pure-white font-primary hover:bg-opacity-80 transition-all"
            onClick={() => window.open("https://docs.google.com/presentation/d/1dDtyTir3zYu2-WcO2FcGjVdAgG3leYBYG8NbADHObps/present?slide=id.p1", "_blank")}
          >
            Joining us (Bootcamp) documentation
          </button>
          <div className="w-full bg-deep-black rounded-b-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/TW86ziWCG_o"
                title="TAW Bootcamp"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <FullscreenWrapper side={side} type="modpack">
      <div className="relative z-10 h-screen p-4 sm:p-8 flex flex-col items-center overflow-y-auto">
        <img 
          src={logo}
          alt={altText}
          className="h-12 sm:h-16 w-[200px] sm:w-[250px] object-contain mb-2 sm:mb-4"
        />

        {/* Drill Instructors Section */}
        <div className="w-full max-w-4xl mb-4 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-primary uppercase mb-2 sm:mb-4 text-pure-white text-center">
            Our Recruitment staff (Drill Instructors) are here to help you
          </h2>
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            {/* Top Card */}
            <DrillInstructorCard 
              name={drillInstructors.head.name}
              role={drillInstructors.head.role}
              image={drillInstructors.head.image}
              className="w-[240px] sm:w-[280px]"
            />
            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              {drillInstructors.instructors.map((instructor, index) => (
                <DrillInstructorCard 
                  key={index}
                  name={instructor.name}
                  role={instructor.role}
                  image={instructor.image}
                  className="w-[240px] sm:w-[280px]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Rest of content with responsive adjustments */}
        <div className="w-full max-w-4xl space-y-4">
          {isLeftSide ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-primary uppercase mb-2 sm:mb-4 text-pure-white text-center">
                How To Download The Mods
              </h2>
              <h3 className="text-lg sm:text-xl font-primary text-pure-white text-center mb-4 sm:mb-8">
                Just connect to the server
              </h3>
              <div className="w-full flex justify-center mb-4 sm:mb-8">
                <img 
                  src={ARMods}
                  alt="AR Mods"
                  className="max-w-full rounded-lg shadow-lg"
                />
              </div>
              <button 
                className="w-full bg-crimson-red p-4 sm:p-6 rounded-lg text-xl sm:text-2xl text-pure-white font-primary hover:bg-opacity-80 transition-all"
                onClick={() => window.open("https://docs.google.com/presentation/d/1AmUn0BdCad051XVw3gQ7Ou7HJr3ziLuQ/edit#slide=id.p1", "_blank")}
              >
                Joining us (Bootcamp) documentation
              </button>
            </>
          ) : (
            <>
              <div className="w-full max-w-4xl mb-6 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-primary uppercase mb-4 sm:mb-8 text-pure-white text-center">
                  Required Downloads
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <button 
                    className="bg-tactical-green p-3 sm:p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all text-sm sm:text-base"
                    onClick={() => window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=2293038398", "_blank")}
                  >
                    Battalion Modpack
                  </button>
                  <button 
                    className="bg-tactical-green p-3 sm:p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all text-sm sm:text-base"
                    onClick={() => window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=2293038398", "_blank")}
                  >
                    Clientside Modpack
                  </button>
                  <button 
                    className="bg-tactical-green p-3 sm:p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all text-sm sm:text-base"
                    onClick={() => window.open("https://www.teamspeak.com/en/downloads/#ts3client", "_blank")}
                  >
                    Download TeamSpeak
                  </button>
                </div>
              </div>

              {/* Bootcamp Section with video for Arma 3 only */}
              <div className="w-full max-w-4xl">
                <button 
                  className="w-full bg-crimson-red p-4 sm:p-6 rounded-t-lg text-xl sm:text-2xl text-pure-white font-primary hover:bg-opacity-80 transition-all"
                  onClick={() => window.open("https://docs.google.com/presentation/d/1dDtyTir3zYu2-WcO2FcGjVdAgG3leYBYG8NbADHObps/present?slide=id.p1", "_blank")}
                >
                  Joining us (Bootcamp) documentation
                </button>
                <div className="w-full bg-deep-black rounded-b-lg overflow-hidden">
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/TW86ziWCG_o"
                      title="TAW Bootcamp"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <CloseButton onClose={onClose} />
      </div>
    </FullscreenWrapper>
  );
}; 