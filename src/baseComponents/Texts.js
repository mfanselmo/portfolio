import React from "react";

export const Text1 = ({ children }) => {
  return (
    <p
      className={
        "dark:text-gray-400 transition-color whitespace-pre-line leading-relaxed text-justify"
      }
    >
      {children}
    </p>
  );
};
