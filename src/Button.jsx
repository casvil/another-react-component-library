import React from "react";

const Button = ({ disabled, kind, onClick, size, style, value }) => (
  <input
    className={`
      active:bg-${kind}-400 
      hover:bg-${disabled ? `disabled` : kind}-700 
      bg-${kind}-500 
      focus:outline-none 
      px-3 
      py-2 
      rounded
      text-${kind} 
      ${disabled ? `bg-opacity-75` : `bg-opacity-100`}
      ${disabled ? `cursor-not-allowed` : `cursor-pointer`}
    `}
    type="button"
    value={value}
    onClick={onClick}
    disabled={disabled}
  />
);

export default Button;
