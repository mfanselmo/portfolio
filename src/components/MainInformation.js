import React from "react";
import mainInfo from "./../content/main_info.json";
import Avatar from "./../content/images/avatar.png";
import { Subtitle1, Title1 } from "../baseComponents/Titles";
import Links from "./Links";
import DarkThemeToggle from "./DarkThemeToggle";

const MainInformation = () => {
  const { name, main_subtitle } = mainInfo;

  return (
    <div className={"md:w-80 "}>
      <div className={"md:fixed md:w-80 md:px-4"}>
        <Title1>{name}</Title1>
        <Subtitle1>{main_subtitle}</Subtitle1>
        <img
          className={"m-auto w-9/12 py-8"}
          src={Avatar}
          alt={"My profile pic"}
        />
        <Links />
        <DarkThemeToggle />
      </div>
    </div>
  );
};

export default MainInformation;
