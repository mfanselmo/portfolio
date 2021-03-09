import React, { useState } from "react";
import { Text1 } from "../baseComponents/Texts";

const DarkThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    } else {
      return false;
    }
  });

  const toggleDarkTheme = () => {
    const newState = !darkTheme;
    setDarkTheme(newState);

    if (newState) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={"flex flex-row mt-8"}>
      <Text1>Dark Mode</Text1>
      <div
        onClick={toggleDarkTheme}
        className={[
          `cursor-pointer ml-4 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
            darkTheme ? "bg-green-400" : ""
          }`,
        ]}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            darkTheme ? "translate-x-6" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default DarkThemeToggle;
