interface RequirementCardProps {
  title: string;
  onClick?: () => void;
}

export const RequirementCard = ({ title, onClick }: RequirementCardProps) => (
  <div 
    className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-60 transition-all duration-300 text-center cursor-pointer hover:scale-105"
    onClick={onClick}
  >
    <h4 className="text-pure-white font-primary text-lg mb-2">{title}</h4>
  </div>
); 