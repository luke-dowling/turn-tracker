import { useEffect } from 'react';
import { Initiative } from '../shared.types';

interface ItemProps extends Initiative {
  isPlaying: boolean;
  activeRef: React.MutableRefObject<HTMLDivElement | null>;
  currentTurn: number;
}

const InitiativeItem = ({
  name,
  current,
  initiative,
  type,
  ac,
  hp,
  isPlaying,
  activeRef,
  currentTurn,
}: ItemProps) => {
  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [currentTurn]);
  if (isPlaying && current) {
    return (
      <div
        className="bg-red-500  mb-4 py-2 px-4 flex justify-between items-center rounded-s-md"
        ref={activeRef}
      >
        <h3 className="font-bold">Current: {current}</h3>
        <h4 className="text-center">
          <span className="block">{type}</span>
          <span className="font-semibold">{name}</span>
        </h4>
        <div className="flex gap-3">
          <h4 className="text-center">
            <span className="block">Initiative</span>
            <span className="font-semibold">{initiative}</span>
          </h4>
          {ac ? (
            <h4 className="text-center">
              <span className="block">AC</span>
              <span className="font-semibold">{ac}</span>
            </h4>
          ) : null}
          {hp ? (
            <h4 className="text-center">
              <span className="block">HP</span>
              <span className="font-semibold">{hp}</span>
            </h4>
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-400 mb-4 py-2 px-4 ml-10 flex justify-between rounded-s-md">
        <h4 className="text-center">
          <span className="block">{type}</span>
          <span className="font-semibold">{name}</span>
        </h4>
        <div className="flex gap-3">
          <h4 className="text-center">
            <span className="block">Initiative</span>
            <span className="font-semibold">{initiative}</span>
          </h4>
          {ac ? (
            <h4 className="text-center">
              <span className="block">AC</span>
              <span className="font-semibold">{ac}</span>
            </h4>
          ) : null}
          {hp ? (
            <h4 className="text-center">
              <span className="block">HP</span>
              <span className="font-semibold">{hp}</span>
            </h4>
          ) : null}
        </div>
      </div>
    );
  }
};

export default InitiativeItem;
