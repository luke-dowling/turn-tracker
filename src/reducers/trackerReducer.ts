import { Reducer } from 'react';
import { ReducerState, GameReducer } from '../shared.types';

export const trackerReducer: Reducer<ReducerState, GameReducer> = (
  state,
  action
) => {
  const { dndEntities } = state;
  switch (action.type) {
    case 'ADD_ENTITY': {
      if (action.payload && !Array.isArray(action.payload)) {
        return {
          ...state,
          dndEntities: [...dndEntities, action.payload],
          turn: 0,
        };
      } else {
        return state;
      }
    }
    case 'NEXT_TURN': {
      if (action.payload && Array.isArray(action.payload)) {
        return {
          ...state,
          dndEntities: action.payload ?? dndEntities,
          turn: state.turn + 1,
        };
      } else {
        return state;
      }
    }
    case 'NEXT_ROUND': {
      if (action.payload && Array.isArray(action.payload)) {
        return {
          ...state,
          dndEntities: action.payload ?? dndEntities,
          turn: 0,
          round: state.round + 1,
        };
      } else {
        return state;
      }
    }
    case 'PREVIOUS_TURN':
      if (action.payload && Array.isArray(action.payload)) {
        return {
          ...state,
          dndEntities: action.payload ?? dndEntities,
          turn: state.turn - 1,
        };
      } else {
        return state;
      }

    case 'PREVIOUS_ROUND':
      if (action.payload && Array.isArray(action.payload)) {
        return {
          ...state,
          dndEntities: action.payload ?? dndEntities,
          turn: dndEntities.length - 1,
          round: state.round - 1,
        };
      } else {
        return state;
      }

    case 'PLAY_PAUSE':
      if (action.payload && Array.isArray(action.payload)) {
        return {
          ...state,
          dndEntities: action.payload ?? dndEntities,
          isPlaying: !state.isPlaying,
        };
      } else {
        return state;
      }
    default:
      throw new Error(`No action: ${action}`);
  }
};
