import { motion } from 'framer-motion';
import { Side } from '../../../types';
import { getFullscreenContent } from './utils';

interface FullscreenWrapperProps {
  side: Side;
  type: 'modpack' | 'bootcamp' | 'rules' | 'training';
  children: React.ReactNode;
}

export const FullscreenWrapper = ({ side, type, children }: FullscreenWrapperProps) => {
  const { background } = getFullscreenContent(side, type);
  const isLeftSide = side === 'left';

  return (
    <motion.div
      initial={{ x: isLeftSide ? '-100%' : '100%' }}
      animate={{ x: 0 }}
      exit={{ x: isLeftSide ? '-100%' : '100%' }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75" />
      {children}
    </motion.div>
  );
}; 