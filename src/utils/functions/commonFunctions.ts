import {createContext, useContext, Context} from 'react';

export const collapseWord = (word: string) => {
  const characters = word.split('');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  return characters.join('');
};

const defaultValue = Symbol('default value');
type DefaultValue = Symbol;

export const createSafeContext = <IContext>() => {
  return createContext<IContext | DefaultValue>(defaultValue);
};

export const useSafeContext = <T>(ModContext: Context<T | DefaultValue>): T => {
  const context = useContext(ModContext);
  if (context === null) {
    throw new Error('usehook must be used within a Provider');
  }
  return context as T;
};
