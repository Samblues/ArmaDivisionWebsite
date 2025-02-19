// Fullscreen content wrapper
import { useState } from 'react';
import { FullscreenContentProps, isSide } from '../../../types';
import { ModpackContent } from './ModpackContent';
import { RulesContent } from './RulesContent';
import { TrainingContent } from './TrainingContent';

export const FullscreenContent = ({ type, side, onClose }: FullscreenContentProps) => {
  const [error, setError] = useState<string | null>(null);

  if (!isSide(side)) {
    return (
      <div className="fixed inset-0 z-50 bg-deep-black flex items-center justify-center">
        <div className="text-pure-white text-center">
          <h2 className="text-2xl mb-4">Invalid side specified</h2>
          <button 
            onClick={onClose}
            className="bg-tactical-green px-4 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-50 bg-deep-black flex items-center justify-center">
        <div className="text-pure-white text-center">
          <h2 className="text-2xl mb-4">{error}</h2>
          <button 
            onClick={onClose}
            className="bg-tactical-green px-4 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  try {
    switch(type) {
      case 'modpack':
        return <ModpackContent side={side} onClose={onClose} />;
      case 'rules':
        return <RulesContent side={side} onClose={onClose} />;
      case 'training':
        return <TrainingContent side={side} onClose={onClose} />;
      default:
        setError('Invalid content type');
        return null;
    }
  } catch (err) {
    setError('Failed to load content');
    return null;
  }
}; 