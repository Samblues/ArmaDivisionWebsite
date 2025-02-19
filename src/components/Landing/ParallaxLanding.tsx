import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Side, ContentType } from '../../types';
import { MobileContent } from './MobileContent';
import { CenterContent } from './CenterContent';
import { SideContent } from './SideContent';
import { FullscreenContent } from './Fullscreen/FullscreenContent';
import { ErrorBoundary } from '../ErrorBoundary';
import { ArmaReforgerLogo, Arma3Logo } from '@/assets';
import { isSide } from '@/types';
// ... other imports

export const ParallaxLanding = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [hoveredSide, setHoveredSide] = useState<Side | null>(null);
  const [isCenterHovered, setIsCenterHovered] = useState(false);
  const [fullscreenContent, setFullscreenContent] = useState<{
    type: ContentType | null;
    side: Side | null;
  }>({ type: null, side: null });
  const [isLoading, setIsLoading] = useState(true);

  const mouseX = useMotionValue(window.innerWidth / 2);
  const leftWidth = useTransform(mouseX, [0, window.innerWidth], ['65%', '35%']);
  const rightWidth = useTransform(mouseX, [0, window.innerWidth], ['35%', '65%']);
  const centerOffset = useTransform(
    mouseX, 
    [0, window.innerWidth], 
    [`calc(15% - 50%)`, `calc(-15% - 50%)`]
  );

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 640);
    mouseX.set(window.innerWidth / 2);
  }, [mouseX]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    // Simulate loading assets
    Promise.all([
      // Pre-load images
      new Promise(resolve => {
        const img = new Image();
        img.src = ArmaReforgerLogo;
        img.onload = resolve;
      }),
      // Add other assets
    ]).finally(() => setIsLoading(false));
  }, []);

  const handleClose = useCallback(() => {
    setFullscreenContent({ type: null, side: null });
    mouseX.set(window.innerWidth / 2);
    setHoveredSide(null);
  }, [mouseX]);

  const isLeftSide = fullscreenContent.side === 'left';
  const logo = isLeftSide ? ArmaReforgerLogo : Arma3Logo;

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-deep-black">
        <div className="text-pure-white text-center">
          <div className="animate-spin h-12 w-12 border-4 border-tactical-green border-t-transparent rounded-full mb-4" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="h-screen flex flex-col">
        {isMobile ? (
          <MobileContent setFullscreenContent={setFullscreenContent} />
        ) : (
          <>
            <div className={`h-full flex relative overflow-hidden transition-all duration-700 ${
              fullscreenContent.type ? 'pointer-events-none opacity-30 scale-[0.95]' : ''
            }`}>
              <CenterContent 
                isCenterHovered={isCenterHovered}
                setIsCenterHovered={setIsCenterHovered}
                centerOffset={centerOffset}
              />
              
              <SideContent 
                side="left"
                width={leftWidth}
                hoveredSide={hoveredSide}
                isCenterHovered={isCenterHovered}
                onSetFullscreenContent={setFullscreenContent}
              />
              
              <SideContent 
                side="right"
                width={rightWidth}
                hoveredSide={hoveredSide}
                isCenterHovered={isCenterHovered}
                onSetFullscreenContent={setFullscreenContent}
              />
            </div>
            
            <AnimatePresence mode="wait">
              {fullscreenContent.type && (
                <FullscreenContent 
                  type={fullscreenContent.type}
                  side={fullscreenContent.side || 'left'}
                  onClose={handleClose}
                />
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}; 