import { Puja, Chadhava } from '../types';

export const getPujas = (): Puja[] => {
  const stored = localStorage.getItem('bhaktdwaar_pujas');
  return stored ? JSON.parse(stored) : [];
};

export const savePujas = (pujas: Puja[]): void => {
  localStorage.setItem('bhaktdwaar_pujas', JSON.stringify(pujas));
};

export const getChadhavas = (): Chadhava[] => {
  const stored = localStorage.getItem('bhaktdwaar_chadhavas');
  return stored ? JSON.parse(stored) : [];
};

export const saveChadhavas = (chadhavas: Chadhava[]): void => {
  localStorage.setItem('bhaktdwaar_chadhavas', JSON.stringify(chadhavas));
};