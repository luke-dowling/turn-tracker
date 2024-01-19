type FooterProps = {
  isPlaying: boolean;
  nextTurn: () => void;
  previousTurn: () => void;
  playPause: () => void;
};

const Footer = ({
  isPlaying,
  nextTurn,
  previousTurn,
  playPause,
}: FooterProps) => {
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
            className="rounded-full bg-black relative bottom-8 p-4 mx-4"
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
            className="rounded-full bg-black relative bottom-8 p-4"
            type="button"
            onClick={playPause}
          >
            Play
          </button>
        </>
      )}
    </footer>
  );
};

export default Footer;
