import { useRef, FormEvent, useState } from 'react';
import { Initiative } from '../shared.types';
import { Button } from './Buttons/Button';
import { useGameLogic } from '../hooks/useGamelogic';

type ModalProps = {
  changeModalDisplay: () => void;
};

const Modal = ({ changeModalDisplay }: ModalProps) => {
  const { addEntity } = useGameLogic();
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

    addEntity(initiativeItem);

    changeModalDisplay();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-slate-50 text-black p-3 text-center absolute bottom-0 left-0 right-0 rounded-t-md z-50 py-10"
    >
      <legend className="text-3xl font-semibold underline mb-8">Create</legend>
      <fieldset className="my-1 flex justify-evenly mb-6">
        <div>
          <label
            className={`${
              type === 'Character'
                ? 'font-bold text-green-700'
                : 'text-gray-400'
            } hover:cursor-pointer`}
            htmlFor="character"
          >
            Character
            <input
              type="radio"
              name="type"
              id="character"
              value="Character"
              defaultChecked
              onChange={changeType}
              style={{ display: 'none' }}
            />
          </label>
        </div>
        <div>
          <label
            className={`${
              type === 'Monster' ? 'font-bold text-red-700' : 'text-gray-400'
            } hover:cursor-pointer`}
            htmlFor="monster"
          >
            Monster
            <input
              type="radio"
              name="type"
              id="monster"
              value="Monster"
              onChange={changeType}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </fieldset>
      <fieldset className="my-2 flex flex-col justify-center">
        <label className="font-semibold" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          className="mx-auto w-64 bg-inherit border-b-2 border-black focus:outline-none focus-visible:shadow-lg px-1"
          required
        />
      </fieldset>
      <fieldset className="my-1 flex flex-col justify-center">
        <label className="font-semibold" htmlFor="initiative">
          Initiative:
        </label>
        <input
          type="number"
          id="initiative"
          ref={initiativeRef}
          className="mx-auto w-64 bg-inherit border-b-2 border-black focus:outline-none focus-visible:shadow-lg px-1"
          required
        />
      </fieldset>
      <fieldset className="my-2 flex flex-col justify-center">
        <label className="px-2" htmlFor="ac">
          AC
        </label>
        <input
          className="mx-auto w-64 bg-inherit border-b-2 border-black focus:outline-none focus-visible:shadow-lg px-1"
          type="number"
          id="ac"
          ref={acRef}
        />
      </fieldset>
      <fieldset className="my-2 flex flex-col justify-center mb-8">
        <label className="px-2" htmlFor="hp">
          HP
        </label>
        <input
          className="mx-auto w-64 bg-inherit border-b-2 border-black focus:outline-none focus-visible:shadow-lg px-1"
          type="number"
          id="hp"
          ref={hpRef}
        />
      </fieldset>

      <Button>Submit</Button>
    </form>
  );
};

export default Modal;
