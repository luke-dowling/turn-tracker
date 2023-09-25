import { useRef, FormEvent, useState } from 'react';
import { Initiative } from '../shared.types';

type ModalProps = {
  addToTracker: (obj: Initiative) => void;
  changeModalDisplay: () => void;
};

const Modal = ({ addToTracker, changeModalDisplay }: ModalProps) => {
  const [type, setType] = useState<'Character' | 'Monster'>('Character');
  const nameRef = useRef<HTMLInputElement>(null);
  const initiativeRef = useRef<HTMLInputElement>(null);
  const acRef = useRef<HTMLInputElement>(null);
  const hpRef = useRef<HTMLInputElement>(null);

  const changeType = (e: FormEvent<HTMLInputElement>) => {
    if (
      e.currentTarget.value === 'Character' ||
      e.currentTarget.value === 'Monster'
    ) {
      setType(e.currentTarget.value);
    }
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (
      !nameRef.current ||
      !initiativeRef.current ||
      !nameRef.current.value ||
      !initiativeRef.current.value
    ) {
      console.log('error');
      return;
    }

    const initiativeItem: Initiative = {
      type,
      name: nameRef.current.value,
      initiative: parseInt(initiativeRef.current.value),
      current: false,
    };

    if (acRef.current) {
      initiativeItem['ac'] = parseInt(acRef.current.value);
    }
    if (hpRef.current) {
      initiativeItem['hp'] = parseInt(hpRef.current.value);
    }

    addToTracker(initiativeItem);

    changeModalDisplay();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset>
          <label htmlFor="character">Character</label>
          <input
            type="radio"
            name="type"
            id="character"
            value="Character"
            defaultChecked
            onChange={changeType}
          />
          <label htmlFor="monster">Monster</label>
          <input
            type="radio"
            name="type"
            id="monster"
            value="Monster"
            onChange={changeType}
          />
        </fieldset>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
        <label htmlFor="initiative">Initiative</label>
        <input type="number" id="initiative" ref={initiativeRef} />
        <label htmlFor="ac">AC</label>
        <input type="number" id="ac" ref={acRef} />
        <label htmlFor="hp">HP</label>
        <input type="number" id="hp" ref={hpRef} />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Modal;
