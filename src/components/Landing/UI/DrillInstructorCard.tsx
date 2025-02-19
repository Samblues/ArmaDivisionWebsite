import { TAWSEALLogo } from '../../../assets';

interface DrillInstructorCardProps {
  name: string;
  isMobile?: boolean;
}

export const DrillInstructorCard = ({ name, isMobile = false }: DrillInstructorCardProps) => (
  <div className={`bg-black bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg hover:bg-opacity-40 transition-all duration-300 flex flex-col items-center gap-2 ${
    isMobile ? 'p-2 gap-1' : 'p-4 gap-2'
  }`}>
    <img 
      src={TAWSEALLogo}
      alt={name}
      className={isMobile ? "h-12 w-12 object-contain" : "h-16 w-16 object-contain"}
    />
    <span className={`text-pure-white font-primary ${isMobile ? 'text-xs' : 'text-sm'}`}>{name}</span>
  </div>
); 