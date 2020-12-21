import React from "react";

export const Button = ({ children, disabled, onClick }) => (
  <button disabled={disabled} onClick={onClick}>
    {children}
  </button>
);
