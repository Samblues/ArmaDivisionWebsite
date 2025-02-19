import { Side } from '../../../types';
import { 
  ContentBackgroundAR,
  ContentBackgroundA3,
  ContentBackgroundTrainingAR,
  ContentBackgroundTrainingA3,
  ContentBackgroundBootcampAR,
  ContentBackgroundBootcampA3,
  ArmaReforgerLogo, 
  Arma3Logo 
} from '../../../assets';

export const getFullscreenContent = (side: Side, type: 'modpack' | 'bootcamp' | 'rules' | 'training') => {
  const isLeftSide = side === 'left';
  
  const getBackground = () => {
    switch(type) {
      case 'training':
        return isLeftSide ? ContentBackgroundTrainingAR : ContentBackgroundTrainingA3;
      case 'modpack':
        return isLeftSide ? ContentBackgroundBootcampAR : ContentBackgroundBootcampA3;
      case 'bootcamp':
        return isLeftSide ? ContentBackgroundBootcampAR : ContentBackgroundBootcampA3;
      case 'rules':
      default:
        return isLeftSide ? ContentBackgroundAR : ContentBackgroundA3;
    }
  };

  return {
    background: getBackground(),
    logo: isLeftSide ? ArmaReforgerLogo : Arma3Logo,
    altText: isLeftSide ? "Arma Reforger" : "Arma 3"
  };
}; 