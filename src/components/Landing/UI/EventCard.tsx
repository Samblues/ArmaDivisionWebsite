import { convertUTCToLocal } from '../../../utils/timeUtils';

interface EventCardProps {
  type: string;
  day: string;
  time: string;
  name: string;
}

export const EventCard = ({ type, day, time, name }: EventCardProps) => {
  const localTime = convertUTCToLocal(time.split('-')[0].trim(), day);
  return (
    <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg shadow-md p-3">
      <div className="flex items-center gap-2">
        <span className={`font-bold ${type === '[PVE]' ? 'text-tactical-green' : 'text-crimson-red'}`}>
          {type}
        </span>
        <span className="text-pure-white font-secondary">
          {`${day}s ${localTime} - ${name}`}
        </span>
      </div>
    </div>
  );
}; 