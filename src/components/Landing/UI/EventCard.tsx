import { convertUTCToLocal } from '../../../utils/timeUtils';

interface EventCardProps {
  day: string;
  time: string;
  type?: string;
  name?: string;
  battalion?: string;
}

export const EventCard = ({ day, time, type, name, battalion }: EventCardProps) => (
  <div className={`bg-black bg-opacity-40 backdrop-blur-sm rounded-lg shadow-md ${battalion ? 'pt-2 pb-3 px-3' : 'p-2'}`}>
    <div className="flex flex-col">
      {battalion && (
        <span className="text-[#5865F2] font-bold text-sm mb-2 border-b border-[#5865F2] pb-1">
          {battalion}
        </span>
      )}
      <div className="flex items-center gap-2">
        {type && (
          <span className="font-bold text-[#FF6B6B] text-sm">
            {type}
          </span>
        )}
        <span className="text-pure-white font-secondary text-sm">
          {`${day} - ${time}`}
        </span>
      </div>
      {name && (
        <span className="text-pure-white font-secondary text-sm">
          {name}
        </span>
      )}
    </div>
  </div>
); 