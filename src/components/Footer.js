import React from "react";
import { SmallLink } from "../baseComponents/Links";
import { Subtitle2 } from "../baseComponents/Titles";
import footer_info from "./../content/footer_info.json";

const Footer = () => {
  return (
    <div className={"flex flex-row justify-center p-4 md:space-x-4 space-x-1"}>
      <Subtitle2>{footer_info.author}</Subtitle2>
      <Subtitle2>-</Subtitle2>
      <Subtitle2>{footer_info.year}</Subtitle2>
      <Subtitle2>-</Subtitle2>
      <SmallLink href={footer_info.project_repo}>
        Use this as a template
      </SmallLink>
    </div>
  );
};

export default Footer;
