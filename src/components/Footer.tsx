import { useGameContext } from '../hooks/useGameContext';
import { useGameLogic } from '../hooks/useGamelogic';

const Footer = () => {
  const { reset, previousTurn, playPause, nextTurn } = useGameLogic();
  const { isPlaying } = useGameContext();

  return (
    <footer className="bg-white py-2 flex justify-center absolute bottom-0 left-0 right-0">
      {isPlaying ? (
        <>
          <button
            className="rounded-full bg-black p-4"
            type="button"
            onClick={previousTurn}
          >
            Prev
          </button>
          <button
            className="rounded-full bg-black relative p-4 mx-4"
            type="button"
            onClick={playPause}
          >
            Stop
          </button>
          <button
            className="rounded-full bg-black p-4"
            type="button"
            onClick={nextTurn}
          >
            Next
          </button>
        </>
      ) : (
        <>
          <button
            className="rounded-full bg-black relative p-4 mx-2"
            type="button"
            onClick={playPause}
          >
            Play
          </button>
          <button
            className="rounded-full bg-black relative p-4 mx-2"
            type="button"
            onClick={reset}
          >
            Reset
          </button>
        </>
      )}
    </footer>
  );
};

export default Footer;
