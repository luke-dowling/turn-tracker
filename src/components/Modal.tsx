import { useRef, FormEvent } from 'react';
import { Initiative } from '../shared.types';

type ModalProps = {
  addToTracker: (obj: Initiative) => void;
  changeModalDisplay: () => void;
};

const Modal = ({ addToTracker, changeModalDisplay }: ModalProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const initiativeRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (
      nameRef.current === null ||
      initiativeRef.current === null ||
      !nameRef.current?.value ||
      !initiativeRef.current?.value
    ) {
      console.log('error');
      return;
    }

    addToTracker({
      type: 'Character',
      name: nameRef.current.value,
      initiative: parseInt(initiativeRef.current.value),
      current: false,
    });

    changeModalDisplay();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset>
          <label htmlFor="character">Character</label>
          <input type="radio" name="type" id="character" defaultChecked />
          <label htmlFor="monster">Monster</label>
          <input type="radio" name="type" id="monster" />
        </fieldset>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
        <label htmlFor="initiative">Initiative</label>
        <input type="number" id="initiative" ref={initiativeRef} />
        {/* <label htmlFor="ac">AC</label>
        <input type="number" id="ac" />
        <label htmlFor="hp">HP</label>
        <input type="number" id="hp" /> */}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Modal;
