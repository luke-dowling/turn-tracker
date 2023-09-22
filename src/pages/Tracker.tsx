import { useState } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { Initiative } from '../shared.types';
import Footer from '../components/Footer';

const Tracker = () => {
  const [showModal, setShowModal] = useState(false);
  const [tracker, setTracker] = useState<Initiative[]>([]);

  const changeModalDisplay = () => {
    setShowModal((prev) => !prev);
  };

  const addToTracker = (obj: Initiative) => {
    setTracker((prev) => [...prev, obj]);
  };

  const orderTracker = () => {
    setTracker((tracker) =>
      tracker.sort((a, b) => a.initiative - b.initiative)
    );
  };

  return (
    <>
      <Header />
      <button type="button" onClick={changeModalDisplay}>
        Add
      </button>

      {/* todo: here the character and monsters should be displayed when added */}
      {tracker.length > 0 ? (
        <>
          {tracker.map((item) => {
            return (
              <h4 key={item.name}>
                {item.name}: {item.initiative}
              </h4>
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

      <Footer orderTracker={orderTracker} />
    </>
  );
};

export default Tracker;
