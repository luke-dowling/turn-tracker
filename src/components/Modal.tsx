import { useRef, FormEvent, useState } from 'react';
import { Initiative } from '../shared.types';
import { Button } from './Buttons/Button';

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
    <form
      onSubmit={submitHandler}
      className="bg-slate-50 text-black p-3 text-center absolute bottom-0 right-2 left-2 rounded-t-md h-96"
    >
      <legend className="text-3xl font-semibold underline mb-4">Create</legend>
      <fieldset className="my-1 flex justify-evenly mb-4">
        <div>
          <label className="px-2" htmlFor="character">
            Character
          </label>
          <input
            type="radio"
            name="type"
            id="character"
            value="Character"
            defaultChecked
            onChange={changeType}
          />
        </div>
        <div>
          <label className="px-2" htmlFor="monster">
            Monster
          </label>
          <input
            type="radio"
            name="type"
            id="monster"
            value="Monster"
            onChange={changeType}
          />
        </div>
      </fieldset>
      <fieldset className="my-1 flex justify-between">
        <label className="px-2" htmlFor="name">
          Name:
        </label>
        <input type="text" id="name" ref={nameRef} className="flex-1" />
      </fieldset>
      <fieldset className="my-1 flex justify-between">
        <label className="px-2" htmlFor="initiative">
          Initiative:
        </label>
        <input
          type="number"
          id="initiative"
          ref={initiativeRef}
          className="flex-1"
        />
      </fieldset>
      <fieldset className="my-1 flex justify-between">
        {' '}
        <label className="px-2" htmlFor="ac">
          AC
        </label>
        <input className="flex-1" type="number" id="ac" ref={acRef} />
      </fieldset>
      <fieldset className="my-1 flex justify-between mb-5">
        <label className="px-2" htmlFor="hp">
          HP
        </label>
        <input className="flex-1" type="number" id="hp" ref={hpRef} />
      </fieldset>

      <Button>Submit</Button>
    </form>
  );
};

export default Modal;
