import React from "react";
import { Text1 } from "./Texts";
import { Title2 } from "./Titles";

const TextSection = ({ data: { titleText, mainText } }) => {
  return (
    <div className={"mb-6"}>
      <Title2>{titleText}</Title2>
      <Text1>{mainText}</Text1>
    </div>
  );
};

export default TextSection;
