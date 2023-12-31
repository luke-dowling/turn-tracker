import { useState } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { Initiative } from '../shared.types';
import Footer from '../components/Footer';
import InitiativeItem from '../components/InitiativeItem';

const Tracker = () => {
  const [showModal, setShowModal] = useState(false);
  const [tracker, setTracker] = useState<Initiative[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);

  const changeModalDisplay = () => {
    setShowModal((prev) => !prev);
  };

  const addToTracker = (obj: Initiative) => {
    setTracker((prev) => [...prev, obj]);
  };

  const orderTracker = () => {
    setTracker((prev) => {
      prev.sort((a, b) => b.initiative - a.initiative);
      prev[0].current = true;
      return [...prev];
    });
  };

  const nextTurn = () => {
    setTracker((tracker) => {
      if (currentTurn === tracker.length - 1) {
        tracker[tracker.length - 1].current = false;
        tracker[0].current = true;
      } else {
        tracker[currentTurn].current = false;
        tracker[currentTurn + 1].current = true;
      }
      return [...tracker];
    });

    if (currentTurn === tracker.length - 1) {
      setCurrentRound((prev) => prev + 1);
    }

    setCurrentTurn((prev) => {
      if (prev === tracker.length - 1) {
        return 0;
      } else {
        return ++prev;
      }
    });
  };

  const previousTurn = () => {
    if (currentRound === 0 && currentTurn === 0) return;
    if (currentTurn === 0) {
      tracker[0].current = false;
      tracker[tracker.length - 1].current = true;
    } else {
      tracker[currentTurn].current = false;
      tracker[currentTurn - 1].current = true;
    }
    if (currentTurn === 0) {
      setCurrentRound((prev) => --prev);
    }

    setCurrentTurn((prev) => {
      if (prev === 0) {
        return tracker.length - 1;
      } else {
        return --prev;
      }
    });
  };

  const playPause = () => {
    if (tracker.length < 2) {
      alert('please add two items before starting initiative');
      return;
    }

    if (!isPlaying) {
      orderTracker();
    } else {
      tracker[currentTurn].current = false;
      setCurrentRound(0);
      setCurrentTurn(0);
    }

    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <Header />
      <button type="button" onClick={changeModalDisplay}>
        Add
      </button>

      {/* todo: here the character and monsters should be displayed when added */}
      {isPlaying ? <h4>Round: {currentRound}</h4> : null}
      {tracker.length > 0 ? (
        <>
          {tracker.map((item) => {
            return (
              <InitiativeItem
                name={item.name}
                current={item.current}
                initiative={item.initiative}
                ac={item.ac}
                hp={item.hp}
                key={item.name}
                type={item.type}
                isPlaying={isPlaying}
              />
            );
          })}
        </>
      ) : null}

      {/* todo: add a modal to the page so when the user adds they input some information then the character/monster is added */}
      {showModal ? (
        <Modal
          addToTracker={addToTracker}
          changeModalDisplay={changeModalDisplay}
        />
      ) : null}

      <Footer
        orderTracker={orderTracker}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        nextTurn={nextTurn}
        previousTurn={previousTurn}
        playPause={playPause}
      />
    </>
  );
};

export default Tracker;
