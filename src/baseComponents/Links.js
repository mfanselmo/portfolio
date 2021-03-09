import React from "react";

export const MainLink = ({ children, icon, href }) => {
  return (
    <a href={href}>
      <div className={"flex flex-row items-center"}>
        {icon}
        <p className={"ml-2 text-gray-500 hover:text-blue-500"}>{children}</p>
      </div>
    </a>
  );
};
export const SmallLink = ({ children, href }) => {
  return (
    <a href={href}>
      <p
        className={
          "font-extralight text-sm text-justify dark:text-gray-400 transition-color hover:text-blue-500"
        }
      >
        {children}
      </p>
    </a>
  );
};
