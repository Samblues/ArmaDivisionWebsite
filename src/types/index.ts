import { MotionValue } from 'framer-motion';

export interface DivisionContent {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  logo: string;
}

export type Side = 'left' | 'right';

// Add type guard
export const isSide = (value: unknown): value is Side => {
  return value === 'left' || value === 'right';
};

export type ContentType = 'modpack' | 'bootcamp' | 'rules' | 'training';

export const isContentType = (value: unknown): value is ContentType => {
  return value === 'modpack' || value === 'bootcamp' || value === 'rules' || value === 'training';
};

export interface RuleSection {
  title: string;
  content: string;
}

export interface RulesData {
  game: string;
  sections: RuleSection[];
}

export interface FullscreenContentProps {
  type: ContentType;
  side: Side;
  onClose: () => void;
}

export interface SideContentProps {
  side: Side;
  width: MotionValue<string>;
  hoveredSide: Side | null;
  isCenterHovered: boolean;
  onSetFullscreenContent: (content: { type: ContentType; side: Side }) => void;
}

export interface CenterContentProps {
  isCenterHovered: boolean;
  setIsCenterHovered: (value: boolean) => void;
  centerOffset: MotionValue<string>;
} 