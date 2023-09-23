type FooterProps = {
  orderTracker: () => void;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  nextTurn: () => void;
  previousTurn: () => void;
  playPause: () => void;
};

const Footer = ({
  orderTracker,
  isPlaying,
  setIsPlaying,
  nextTurn,
  previousTurn,
  playPause,
}: FooterProps) => {
  return (
    <footer>
      {isPlaying ? (
        <>
          <button type="button" onClick={previousTurn}>
            Prev
          </button>
          <button type="button" onClick={playPause}>
            Stop
          </button>
          <button type="button" onClick={nextTurn}>
            Next
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={playPause}>
            Play
          </button>
        </>
      )}
    </footer>
  );
};

export default Footer;
