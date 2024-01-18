import { ReactNode, createContext } from 'react';

type GameProviderProps = {
  children: ReactNode;
};

export const GameContext = createContext({});

export const GameProvider = ({ children }: GameProviderProps) => {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};
