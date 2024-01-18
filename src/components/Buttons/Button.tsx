import styles from './Button.module.css';
const { btn } = styles;

interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={`${btn} px-4 py-2 rounded-md`}>{children}</button>;
};

interface AddButtonProps extends ButtonProps {
  changeModal: () => void;
}

export const AddButton = ({ children, changeModal }: AddButtonProps) => {
  return (
    <button
      onClick={changeModal}
      className={`${btn} rounded-sm py-1 block mx-5 text-lg font-semibold`}
    >
      {children}
    </button>
  );
};
