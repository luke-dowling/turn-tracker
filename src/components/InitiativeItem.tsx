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
      <div className="bg-red-500">
        <h4>
          {name}: {initiative}
        </h4>
        <p>Current: {current}</p>
      </div>
    );
  } else {
    return (
      <div className="bg-blue-300">
        <h4>
          {name}: {initiative}
        </h4>
      </div>
    );
  }
};

export default InitiativeItem;
