import { Initiative } from '../shared.types';
import { useGameContext } from './useGameContext';

const orderEntities = (entities: Initiative[], turn: number) => {
  entities.sort((a, b) => b.initiative - a.initiative);
  entities[turn].current = true;
  return [...entities];
};

const moveCurrentForwards = (
  entities: Initiative[],
  turn: number
): Initiative[] => {
  if (turn === entities.length - 1) {
    return entities.map((entity, index) => {
      if (index === 0) {
        entity.current = true;
        return entity;
      } else if (index === entities.length - 1) {
        entity.current = false;
        return entity;
      } else {
        return entity;
      }
    });
  } else {
    return entities.map((entity, index) => {
      if (index === turn) {
        entity.current = false;
        return entity;
      } else if (index === turn + 1) {
        entity.current = true;
        return entity;
      } else {
        return entity;
      }
    });
  }
};

const moveCurrentBackwards = (
  entities: Initiative[],
  turn: number
): Initiative[] => {
  if (turn === 0) {
    return entities.map((entity, index) => {
      if (index === 0) {
        entity.current = false;
        return entity;
      } else if (index === entities.length - 1) {
        entity.current = true;
        return entity;
      } else {
        return entity;
      }
    });
  } else {
    return entities.map((entity, index) => {
      if (index === turn) {
        entity.current = false;
        return entity;
      } else if (index === turn - 1) {
        entity.current = true;
        return entity;
      } else {
        return entity;
      }
    });
  }
};

export const useGameLogic = () => {
  const { dispatchGameAction, turn, dndEntities, round, isPlaying } =
    useGameContext();

  const addEntity = (entity: Initiative) => {
    dispatchGameAction({ type: 'ADD_ENTITY', payload: entity });
  };

  const nextTurn = () => {
    const newEntities = moveCurrentForwards(dndEntities, turn);
    if (turn === dndEntities.length - 1) {
      dispatchGameAction({ type: 'NEXT_ROUND', payload: newEntities });
    } else {
      dispatchGameAction({ type: 'NEXT_TURN', payload: newEntities });
    }
  };

  const previousTurn = () => {
    if (round === 1 && turn === 0) return;
    const newEntities = moveCurrentBackwards(dndEntities, turn);
    if (turn === 0) {
      dispatchGameAction({ type: 'PREVIOUS_ROUND', payload: newEntities });
    } else {
      dispatchGameAction({ type: 'PREVIOUS_TURN', payload: newEntities });
    }
  };

  const playPause = () => {
    if (dndEntities.length < 2) {
      alert('please add two items before starting initiative');
      return;
    }

    if (!isPlaying) {
      const newEntities = orderEntities(dndEntities, turn);

      dispatchGameAction({ type: 'PLAY_PAUSE', payload: newEntities });
    } else {
      const newEntities = dndEntities.map((entity, index) => {
        if (index === turn) {
          entity.current = false;
          return entity;
        } else {
          return entity;
        }
      });
      dispatchGameAction({ type: 'PLAY_PAUSE', payload: newEntities });
    }
  };

  //   const playPause = () => {
  //     if (tracker.length < 2) {
  //       alert('please add two items before starting initiative');
  //       return;
  //     }

  //     if (!isPlaying) {
  //       orderTracker();
  //     } else {
  //       tracker[currentTurn].current = false;
  //       setCurrentRound(1);
  //       setCurrentTurn(0);
  //     }

  //     setIsPlaying((prev) => !prev);
  //   };

  return { addEntity, nextTurn, previousTurn, playPause };
};
