import { AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

type LocationProviderProps = {
  children: ReactNode;
};

export const LocationProvider = ({ children }: LocationProviderProps) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};
