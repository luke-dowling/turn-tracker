import { useState, useRef } from 'react';
import { useGameLogic } from '../hooks/useGamelogic';

import Modal from '../components/Modal';
import Footer from '../components/Footer';
import InitiativeItem from '../components/InitiativeItem';
import { AddButton } from '../components/Buttons/Button';
import { Layout } from '../components/Layout/Layout';
import { useGameContext } from '../hooks/useGameContext';

const Tracker = () => {
  const { addEntity, nextTurn, previousTurn, playPause } = useGameLogic();
  const { isPlaying, round, dndEntities, turn } = useGameContext();
  const [showModal, setShowModal] = useState(false);
  const activeRef = useRef<HTMLDivElement | null>(null);

  const changeModalDisplay = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Layout>
        <AddButton changeModal={changeModalDisplay}>+</AddButton>
        {/* todo: here the character and monsters should be displayed when added */}

        {isPlaying ? (
          <h4 className="text-center mt-3 text-1xl font-semibold">
            Round: {round}
          </h4>
        ) : null}
        <div className="mt-4 flex-1 px-5 mb-20 overflow-scroll">
          {dndEntities.length > 0 ? (
            <>
              {dndEntities.map((item) => {
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
                    activeRef={activeRef}
                    currentTurn={turn}
                  />
                );
              })}
            </>
          ) : null}
        </div>

        {showModal ? (
          <Modal
            addEntity={addEntity}
            changeModalDisplay={changeModalDisplay}
          />
        ) : null}

        <Footer
          isPlaying={isPlaying}
          nextTurn={nextTurn}
          previousTurn={previousTurn}
          playPause={playPause}
        />
      </Layout>
    </>
  );
};

export default Tracker;
