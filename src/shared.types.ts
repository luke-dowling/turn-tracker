export interface Initiative {
  type: 'Character' | 'Monster';
  name: string;
  initiative: number;
  current: boolean;
  ac?: number;
  hp?: number;
}

export interface ReducerState {
  dndEntities: Initiative[];
  turn: number;
  round: number;
  isPlaying: boolean;
}

export type GameAction =
  | 'ADD_ENTITY'
  | 'NEXT_TURN'
  | 'NEXT_ROUND'
  | 'PREVIOUS_TURN'
  | 'PREVIOUS_ROUND'
  | 'PLAY_PAUSE'
  | 'RESET';

export type GameReducer = {
  type: GameAction;
  payload?: Initiative[] | Initiative;
};
