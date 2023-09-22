import { useState } from 'react';

type FooterProps = {
  orderTracker: () => void;
};

const Footer = ({ orderTracker }: FooterProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (!isPlaying) {
      orderTracker();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <footer>
      {isPlaying ? (
        <>
          <button type="button">Prev</button>
          <button type="button" onClick={playPause}>
            Stop
          </button>
          <button type="button">Next</button>
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
