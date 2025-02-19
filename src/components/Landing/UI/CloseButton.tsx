interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton = ({ onClose }: CloseButtonProps) => (
  <button
    className="fixed top-6 right-6 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-4 transition-all duration-300 transform hover:scale-110 z-50 shadow-lg"
    onClick={onClose}
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-8 w-8 text-white" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M6 18L18 6M6 6l12 12" 
      />
    </svg>
  </button>
); 