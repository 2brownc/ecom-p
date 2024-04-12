import React from "react";
import type { Pref } from "../../../types/types";

interface CheckBoxProps {
  pref: Pref;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ pref, checked, handleChange }) => {
  const { id, category } = pref;

  return (
    <div className="m-0 flex h-10 flex-row items-center px-3 py-0 transition duration-300 ease-in hover:bg-stone-100">
      <input
        type="checkbox"
        id={id.toString()}
        name={id.toString()}
        className="h-5 w-5 border-blue-900 accent-black focus:ring-2 focus:ring-blue-900"
        onChange={handleChange}
        checked={checked}
        value={category}
      />
      <label
        className="ml-2 h-full grow select-none py-2 text-left"
        htmlFor={id.toString()}
      >
        {category}
      </label>
    </div>
  );
};

export default CheckBox;
