import { useState } from 'react';
import { useGameContext } from '../hooks/useGameContext';

import Modal from '../components/Modal';
import Footer from '../components/Footer';
import InitiativeItem from '../components/InitiativeItem';
import { AddButton } from '../components/Buttons/Button';
import { Layout } from '../components/Layout/Layout';

const Tracker = () => {
  const { isPlaying, round, dndEntities, turn } = useGameContext();
  const [showModal, setShowModal] = useState(false);

  const changeModalDisplay = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Layout>
      <AddButton changeModal={changeModalDisplay}>+</AddButton>

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
                  currentTurn={turn}
                />
              );
            })}
          </>
        ) : null}
      </div>

      {showModal ? <Modal changeModalDisplay={changeModalDisplay} /> : null}

      <Footer />
    </Layout>
  );
};

export default Tracker;
