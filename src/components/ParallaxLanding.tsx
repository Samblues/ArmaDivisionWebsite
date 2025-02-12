import React, { useState, MouseEvent, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { COLORS } from '../constants/theme';
import AmBackground from '../assets/Am_background.jpg';
import ReforgerLogo from '../assets/Reforger_V4.png';
import ArmaReforgerLogo from '../assets/armareforger.png';
import Arma3Logo from '../assets/arma3.png';
import ReforgerBackground from '../assets/ArmaReforgerbackground.jpg';
import Arma3Background from '../assets/Arma3background.jpg';
import TAWNameLogo from '../assets/TawNameLogo.png';
import TAWSEALLogo from '../assets/TawSealLogo.png';
import DiscordLogo from '../assets/Discord-Logo.png';
import { convertUTCToLocal } from '../utils/timeUtils';

export const ParallaxLanding = () => {
  const [activeTab, setActiveTab] = useState<'left' | 'right' | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const mouseX = useMotionValue(0);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  
  // Desktop transforms
  const leftWidth = useTransform(
    mouseX,
    [0, window.innerWidth],
    ['65%', '35%']
  );

  const rightWidth = useTransform(
    mouseX,
    [0, window.innerWidth],
    ['35%', '65%']
  );

  const centerOffset = useTransform(
    mouseX,
    [0, window.innerWidth],
    [`calc(15% - 50%)`, `calc(-15% - 50%)`]
  );

  useEffect(() => {
    const handleMouseLeave = () => {
      mouseX.set(window.innerWidth / 2);
      setHoveredSide(null);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [mouseX]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    setHoveredSide(e.clientX < window.innerWidth / 2 ? 'left' : 'right');
  };

  const handleTouchStart = (side: 'left' | 'right') => {
    if (isMobile) {
      setHoveredSide(side);
    }
  };

  const DrillInstructorCard = ({ name }: { name: string }) => (
    <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:bg-opacity-40 transition-all duration-300 flex flex-col items-center gap-2">
      <img 
        src={TAWSEALLogo}
        alt={name}
        className="h-16 w-16 object-contain"
      />
      <span className="text-pure-white font-primary text-sm">{name}</span>
    </div>
  );

  const EventCard = ({ type, day, time, name }: { type: string; day: string; time: string; name: string }) => {
    const localTime = convertUTCToLocal(time.split('-')[0].trim(), day);
    return (
      <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-3 shadow-md">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-bold ${type === '[PVE]' ? 'text-tactical-green' : 'text-crimson-red'}`}>
            {type}
          </span>
          <span className="text-pure-white font-secondary">
            {`${day}s ${localTime} - ${name}`}
          </span>
        </div>
      </div>
    );
  };

  const RequirementCard = ({ title }: { title: string }) => (
    <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-60 transition-all duration-300 text-center">
      <h4 className="text-pure-white font-primary text-lg mb-2">{title}</h4>
    </div>
  );

  const MobileContent = () => (
    <div className="h-screen flex flex-col overflow-hidden bg-deep-black relative">
      {/* Background when no tab is selected */}
      {!activeTab && (
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center min-h-screen"
            style={{ backgroundImage: `url(${AmBackground})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 min-h-screen" />
          </div>
        </div>
      )}

      {/* Central Content - Centered vertically and horizontally */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 p-4 relative z-10">
        <img 
          src={ReforgerLogo}
          alt="The Art of Warfare – ARMA Division"
          className="h-[15vh] object-contain"
        />
        <h1 className="text-xl md:text-3xl font-primary font-bold text-pure-white uppercase tracking-wide text-shadow-glow whitespace-nowrap scale-[0.85]">
          The Art of Warfare - ARMA Division
        </h1>
        
        {/* YouTube Video */}
        <div className="w-full max-w-[220px] bg-deep-black rounded-lg shadow-2xl overflow-hidden">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="TAW ARMA Division"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Side Selection Buttons */}
        <h2 className="text-xl font-primary text-pure-white uppercase text-shadow-glow mb-2">
          Choose Game
        </h2>
        <div className="flex w-full gap-4 px-2 flex-1 max-h-[25vh]">
          <button
            className={`flex-1 flex flex-col items-center justify-center gap-4 p-4 rounded font-primary text-base uppercase transition-all duration-300 relative overflow-hidden ${
              activeTab === 'left' 
                ? 'bg-tactical-green text-pure-white' 
                : 'bg-black bg-opacity-40 text-pure-white hover:bg-opacity-50'
            }`}
            onClick={() => setActiveTab(activeTab === 'left' ? null : 'left')}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${ReforgerBackground})` }}
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="text-lg">Reforger</span>
              <img 
                src={ArmaReforgerLogo}
                alt="Arma Reforger"
                className="h-12 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300"
              />
            </div>
          </button>
          <button
            className={`flex-1 flex flex-col items-center justify-center gap-4 p-4 rounded font-primary text-base uppercase transition-all duration-300 relative overflow-hidden ${
              activeTab === 'right' 
                ? 'bg-tactical-green text-pure-white' 
                : 'bg-black bg-opacity-40 text-pure-white hover:bg-opacity-50'
            }`}
            onClick={() => setActiveTab(activeTab === 'right' ? null : 'right')}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${Arma3Background})` }}
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="text-lg">Arma 3</span>
              <img 
                src={Arma3Logo}
                alt="Arma 3"
                className="h-12 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300"
              />
            </div>
          </button>
        </div>

        {/* Welcome Text - Animated */}
        <div className="text-center animate-pulse">
          <p className="text-pure-white font-primary text-sm tracking-wide">
            Welcome, please select each game for more information
          </p>
        </div>

        {/* Bottom Discord Logo */}
        {!activeTab && (
          <div className="mt-auto mb-2 flex flex-col items-center gap-2">
            <img 
              src={DiscordLogo}
              alt="Discord"
              className="h-[8vh] object-contain"
            />
            <img 
              src={TAWSEALLogo}
              alt="TAW Seal"
              className="h-[10vh] object-contain"
            />
          </div>
        )}
      </div>

      {/* Full Page Content when side is selected */}
      {activeTab && (
        <div 
          className="fixed inset-0 z-50 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${activeTab === 'left' ? ReforgerBackground : Arma3Background})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75" />
          <div className="relative z-10 h-screen p-4 flex flex-col justify-between">
            {/* Top Section */}
            <div className="flex flex-col items-center gap-4 pt-8">
              <img 
                src={activeTab === 'left' ? ArmaReforgerLogo : Arma3Logo}
                alt={activeTab === 'left' ? "Arma Reforger" : "Arma 3"}
                className="h-14 w-[250px] object-contain"
              />
              <h2 className="text-2xl font-primary uppercase text-pure-white text-center">
                {activeTab === 'left' ? "1st Battalion [EU] & 4th Battalion [NA]" : "2nd Battalion [EU] & 3rd Battalion [NA]"}
              </h2>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col gap-6 my-8">
              {/* Drill Instructors - Horizontal Scroll */}
              <div className="w-full overflow-x-auto">
                <div className="flex gap-3 min-w-min px-1">
                  <DrillInstructorCard name="Drill Instructor 1" />
                  <DrillInstructorCard name="Drill Instructor 2" />
                  <DrillInstructorCard name="Drill Instructor 3" />
                </div>
              </div>

              {/* Events List */}
              <div className="w-full space-y-3">
                {activeTab === 'left' ? (
                  <>
                    <EventCard type="[PVE]" day="Tuesday" time="19:30" name="[TAW] Public Casual Milsim" />
                    <EventCard type="[PVP]" day="Thursday" time="19:30" name="[TAW] Sieze and Secure" />
                    <EventCard type="[PVP]" day="Sunday" time="19:30" name="[TAW] Sieze and Secure" />
                  </>
                ) : (
                  <>
                    <EventCard type="[PVE]" day="Thursday" time="19:30" name="[TAW] Thursday Milsim Event" />
                    <EventCard type="[PVE]" day="Sunday" time="19:30" name="[TAW] Sunday Milsim Event" />
                    <EventCard type="[PVP]" day="Saturday" time="19:30" name="[TAW] Optional Event" />
                  </>
                )}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full grid grid-cols-3 gap-3 mb-4">
              <RequirementCard title="Discord" />
              <RequirementCard title="Rules" />
              <RequirementCard title="Modpack" />
            </div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-deep-black rounded-full p-2"
              onClick={() => setActiveTab(null)}
            >
              <span className="text-pure-white text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="h-screen flex flex-col">
      {/* Show Discord corners only on desktop */}
      {!isMobile && (
        <>
          <div className="absolute top-4 left-4 z-40 animate-pulse">
            <img 
              src={DiscordLogo}
              alt="Discord"
              className="h-[6vh] object-contain filter drop-shadow-[0_0_8px_rgba(12,64,62,0.6)] hover:drop-shadow-[0_0_12px_rgba(12,64,62,0.8)] animate-[pulse-glow_3s_ease-in-out_infinite]"
            />
          </div>
          <div className="absolute top-4 right-4 z-40">
            <img 
              src={DiscordLogo}
              alt="Discord"
              className="h-[6vh] object-contain filter drop-shadow-[0_0_8px_rgba(12,64,62,0.6)] hover:drop-shadow-[0_0_12px_rgba(12,64,62,0.8)] animate-[pulse-glow_3s_ease-in-out_infinite] cursor-pointer"
              onClick={() => window.open("https://discord.gg/your-discord-link", "_blank", "noopener,noreferrer")}
            />
          </div>
        </>
      )}

      {isMobile ? (
        <MobileContent />
      ) : (
        // Original Split Layout - Shown on tablets and larger
        <div 
          className="h-full flex relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mouseX.set(window.innerWidth / 2);
            setHoveredSide(null);
          }}
        >
          {/* Central Content Stack */}
          <motion.div 
            className="absolute top-8 left-1/2 z-30 flex flex-col items-center gap-6"
            style={{ 
              transform: 'none',
              x: centerOffset,
            }}
          >
            {/* Logo and Title */}
            <div className="flex flex-col items-center gap-4">
              <img 
                src={ReforgerLogo}
                alt="The Art of Warfare – ARMA Division"
                className="h-[15vh] object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300"
              />
              <h1 className="text-2xl font-primary font-bold text-pure-white uppercase tracking-wide text-shadow-glow hover:text-shadow-glow-intense transition-all duration-300">
                The Art of Warfare – ARMA Division
              </h1>
            </div>

            {/* YouTube Video */}
            <div className="w-full max-w-[300px] bg-deep-black rounded-lg shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-150 hover:z-50">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="TAW ARMA Division"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

          {/* Left Side Content */}
          <motion.div
            className="h-full flex flex-col items-center pt-[20vh] relative"
            style={{ width: leftWidth }}
          >
            {/* Background with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ReforgerBackground})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60" />
            </div>
            
            {/* Content */}
            <div className={`relative z-10 text-white transition-opacity duration-300 flex flex-col items-center gap-4 md:gap-8 w-full px-4 md:px-8 ${
              hoveredSide === 'left' ? 'opacity-100' : 'opacity-50'
            }`}>
              <img 
                src={ArmaReforgerLogo}
                alt="Arma Reforger"
                className="h-24 w-[300px] object-contain mb-4"
              />
              <h2 className="text-4xl font-primary uppercase mb-2 text-pure-white">1st Battalion [EU] & 4th Battalion [NA]</h2>
              <h3 className="text-2xl font-primary uppercase">Arma Reforger</h3>

              {/* Drill Instructors */}
              <div className="flex flex-col gap-4">
                <DrillInstructorCard name="Drill Instructor 1" />
                <DrillInstructorCard name="Drill Instructor 2" />
                <DrillInstructorCard name="Drill Instructor 3" />
              </div>

              {/* Events */}
              <div className="w-full space-y-2 md:space-y-4">
                <EventCard type="[PVE]" day="Tuesday" time="19:30" name="[TAW] Public Casual Milsim" />
                <EventCard type="[PVP]" day="Thursday" time="19:30" name="[TAW] Sieze and Secure" />
                <EventCard type="[PVP]" day="Sunday" time="19:30" name="[TAW] Sieze and Secure" />
              </div>

              {/* Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RequirementCard title="Discord Communication" />
                <RequirementCard title="Rules" />
                <RequirementCard title="Modpack" />
              </div>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="h-full flex flex-col items-center pt-[20vh] relative"
            style={{ width: rightWidth }}
          >
            {/* Background with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${Arma3Background})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60" />
            </div>

            {/* Content */}
            <div className={`relative z-10 text-white transition-opacity duration-300 flex flex-col items-center gap-4 md:gap-8 w-full px-4 md:px-8 ${
              hoveredSide === 'right' ? 'opacity-100' : 'opacity-50'
            }`}>
              <img 
                src={Arma3Logo}
                alt="Arma 3"
                className="h-24 w-[300px] object-contain mb-4"
              />
              <h2 className="text-4xl font-primary uppercase mb-2 text-pure-white">2nd Battalion [EU] & 3rd Battalion [NA]</h2>
              <h3 className="text-2xl font-primary uppercase">Arma III</h3>

              {/* Drill Instructors */}
              <div className="flex flex-col gap-4">
                <DrillInstructorCard name="Drill Instructor 1" />
                <DrillInstructorCard name="Drill Instructor 2" />
                <DrillInstructorCard name="Drill Instructor 3" />
              </div>

              {/* Events */}
              <div className="w-full space-y-2 md:space-y-4">
                <EventCard type="[PVE]" day="Thursday" time="19:30" name="[TAW] Thursday Milsim Event" />
                <EventCard type="[PVE]" day="Sunday" time="19:30" name="[TAW] Sunday Milsim Event" />
                <EventCard type="[PVP]" day="Saturday" time="19:30" name="[TAW] Optional Event" />
              </div>

              {/* Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RequirementCard title="Discord Communication" />
                <RequirementCard title="Rules" />
                <RequirementCard title="Modpack" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}; 