import { Initiative } from '../shared.types';

interface ItemProps extends Initiative {
  isPlaying: boolean;
}

const InitiativeItem = ({
  name,
  current,
  initiative,
  type,
  ac,
  hp,
  isPlaying,
}: ItemProps) => {
  if (isPlaying && current) {
    return (
      <div className="bg-red-500 w-full">
        <h4>{type}</h4>
        <h4>
          {name}: {initiative}
        </h4>
        {ac ? <h4>AC: {ac}</h4> : null}
        {hp ? <h4>HP: {hp}</h4> : null}

        <p>Current: {current}</p>
      </div>
    );
  } else {
    return (
      <div className="bg-blue-300 w-full">
        <h4>{type}</h4>
        <h4>
          {name}: {initiative}
        </h4>
        {ac ? <h4>AC: {ac}</h4> : null}
        {hp ? <h4>HP: {hp}</h4> : null}
      </div>
    );
  }
};

export default InitiativeItem;
