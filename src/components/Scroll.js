import React from "react";
import ListSection from "../baseComponents/ListSection";
import TextSection from "../baseComponents/TextSection";
import data from "./../content/scroll_info.json";

const Scroll = () => {
  return (
    <div className={"md:w-100 md:mt-0 mt-6 last:mb-20"}>
      {data.map((d, i) => {
        switch (d.type) {
          case "text-section":
            return <TextSection key={i} data={d} />;
          case "list-section":
            return <ListSection key={i} data={d} />;

          default:
            return <></>;
        }
      })}
    </div>
  );
};

export default Scroll;
