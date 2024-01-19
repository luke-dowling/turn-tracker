import { ReducerState, Initiative, GameReducer } from '../shared.types';

import { ReactNode, createContext, useReducer, Dispatch } from 'react';
import { trackerReducer } from '../reducers/trackerReducer';

type GameProviderProps = {
  children: ReactNode;
};

const initialState: ReducerState = {
  dndEntities: [],
  turn: 0,
  round: 1,
  isPlaying: false,
};

export const GameContext = createContext<
  | {
      dndEntities: Initiative[];
      turn: number;
      round: number;
      isPlaying: boolean;
      dispatchGameAction: Dispatch<GameReducer>;
    }
  | undefined
>(undefined);

export const GameProvider = ({ children }: GameProviderProps) => {
  const [gameState, dispatchGameAction] = useReducer(
    trackerReducer,
    initialState
  );

  const value = {
    ...gameState,
    dispatchGameAction,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
