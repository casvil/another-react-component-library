import React from "react";
import PropTypes from "prop-types";

const Button = ({ disabled, kind, onClick, size, style, value }) => (
  <input
    className={`
      active:bg-${kind}-400 
      ${disabled ? `` : `hover:bg-${kind}-700`} 
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

Button.propTypes = {
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(["default", "primary", "success", "warning", "danger"]),
};

Button.defaultProps = {
  disabled: false,
  kind: "default",
};

export default Button;
