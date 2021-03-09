import React from "react";

export const Title1 = ({ children }) => {
  return (
    <h1
      className={"text-3xl font-semibold dark:text-gray-400 transition-color"}
    >
      {children}
    </h1>
  );
};

export const Title2 = ({ children }) => {
  return (
    <h2
      className={"text-xl font-medium dark:text-gray-400 transition-color mb-2"}
    >
      {children}
    </h2>
  );
};

export const Subtitle1 = ({ children }) => {
  return (
    <h2
      className={"font-light text-justify dark:text-gray-400 transition-color"}
    >
      {children}
    </h2>
  );
};
export const Subtitle2 = ({ children }) => {
  return (
    <h2
      className={
        "font-extralight text-sm text-justify dark:text-gray-400 transition-color"
      }
    >
      {children}
    </h2>
  );
};
