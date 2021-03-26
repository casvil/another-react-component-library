import React from "react";

const Button = ({ disabled, kind, onClick, size, style, value }) => (
  <input
    className={`bg-${kind}-500 text-${kind} px-3 py-2`}
    type="button"
    value={value}
    onClick={onClick}
    disabled={disabled}
  />
);

export default Button;
