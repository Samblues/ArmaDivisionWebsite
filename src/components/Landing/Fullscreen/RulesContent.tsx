import { motion } from 'framer-motion';
import { Side } from '../../../types';
import { CloseButton } from '../UI';
import { arma3RulesData } from '../../../data/arma3Rules';
import { getFullscreenContent } from './utils';
import { FullscreenWrapper } from './FullscreenWrapper';

interface RulesContentProps {
  side: Side;
  onClose: () => void;
}

export const RulesContent = ({ side, onClose }: RulesContentProps) => {
  const { background, logo, altText } = getFullscreenContent(side, 'rules');
  const isLeftSide = side === 'left';

  return (
    <FullscreenWrapper side={side} type="rules">
      <div className="relative z-10 h-screen p-8 flex flex-col items-center overflow-y-auto">
        <img 
          src={logo}
          alt={altText}
          className="h-16 w-[250px] object-contain mb-4"
        />
        <h2 className="text-4xl font-primary uppercase mb-8 text-pure-white">
          Rules & Guidelines
        </h2>

        <div className="w-full max-w-4xl flex flex-col items-center gap-8">
          {arma3RulesData.sections.map((section, index) => (
            <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg w-full">
              <h3 className="text-2xl font-primary uppercase text-pure-white mb-4">
                {section.title}
              </h3>
              <div className="text-gray-100 space-y-6">
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            </div>
          ))}

          <button 
            className="bg-[#5865F2] p-4 rounded text-pure-white font-primary hover:bg-opacity-80 transition-all w-full"
            onClick={() => window.open("https://docs.google.com/document/d/1lqJ3bzeerLval_X3b4qJfMYo_NI2KKLhpJSLdJ8F3Cg/edit?tab=t.0", "_blank")}
          >
            View All Rules and Guidelines
          </button>
        </div>

        <CloseButton onClose={onClose} />
      </div>
    </FullscreenWrapper>
  );
}; 