import { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className='bg-white text-black px-4 py-2 rounded shadow' onClick={onClick}>
      {label}
    </button>
  );
}