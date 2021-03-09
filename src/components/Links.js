import React from "react";
import { links } from "./../content/main_info.json";
import { MainLink } from "../baseComponents/Links";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Links = () => {
  return (
    <div className={"flex flex-col space-y-2"}>
      <MainLink href={links.github} icon={<FaGithub />}>
        Github
      </MainLink>
      <MainLink href={links.linkedin} icon={<FaLinkedin />}>
        Linkedin
      </MainLink>
      <MainLink href={`mailto:${links.email}`} icon={<FaRegEnvelope />}>
        {links.email}
      </MainLink>
    </div>
  );
};

export default Links;
