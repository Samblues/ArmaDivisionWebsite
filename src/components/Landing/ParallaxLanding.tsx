import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Side, ContentType } from '../../types';
import { MobileContent } from './MobileContent';
import { CenterContent } from './CenterContent';
import { SideContent } from './SideContent';
import { FullscreenContent } from './Fullscreen/FullscreenContent';
import { ErrorBoundary } from '../ErrorBoundary';
import { ArmaReforgerLogo, Arma3Logo } from '../../assets';
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

  useEffect(() => {
    // Set initial mouse position to center
    mouseX.set(window.innerWidth / 2);

    const handleMouseMove = (e: MouseEvent) => {
      if (!fullscreenContent.type) {
        const centerThreshold = 100; // Adjust this value as needed
        const centerZone = window.innerWidth / 2;
        
        // Calculate distance from center
        const distanceFromCenter = Math.abs(e.clientX - centerZone);
        
        if (distanceFromCenter < centerThreshold) {
          setHoveredSide(null);
          setIsCenterHovered(true);
        } else {
          setIsCenterHovered(false);
          setHoveredSide(e.clientX < centerZone ? 'left' : 'right');
        }
        
        mouseX.set(e.clientX);
      }
    };

    const handleMouseLeave = () => {
      if (!fullscreenContent.type && document.hasFocus()) {
        mouseX.set(window.innerWidth / 2);
        setHoveredSide(null);
        setIsCenterHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, fullscreenContent.type]);

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
          <>
            <MobileContent setFullscreenContent={setFullscreenContent} />
            <AnimatePresence mode="wait">
              {fullscreenContent.type && (
                <div className="z-50 fixed inset-0">
                  <FullscreenContent 
                    type={fullscreenContent.type}
                    side={fullscreenContent.side || 'left'}
                    onClose={handleClose}
                  />
                </div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <>
            <div className={`h-full flex relative overflow-hidden transition-all duration-700 ${
              fullscreenContent.type ? 'pointer-events-none opacity-30 scale-[0.95]' : ''
            }`}>
              <SideContent 
                side="left"
                width={leftWidth}
                hoveredSide={hoveredSide}
                isCenterHovered={isCenterHovered}
                onSetFullscreenContent={setFullscreenContent}
                className="z-10"
              />
              
              <div className="absolute inset-0 z-20 pointer-events-none">
                <CenterContent 
                  isCenterHovered={isCenterHovered}
                  setIsCenterHovered={setIsCenterHovered}
                  centerOffset={centerOffset}
                />
              </div>
              
              <SideContent 
                side="right"
                width={rightWidth}
                hoveredSide={hoveredSide}
                isCenterHovered={isCenterHovered}
                onSetFullscreenContent={setFullscreenContent}
                className="z-10"
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