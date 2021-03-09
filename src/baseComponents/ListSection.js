import React from "react";
import { Text1 } from "./Texts";
import { Title2 } from "./Titles";

const ListComponent = ({ itemList }) => {
  return (
    <ul
      className={
        "list-disc dark:text-gray-400 transition-color pl-8 first leading-loose"
      }
    >
      {itemList.map((d, i) => (
        <li key={i}>
          {d.type === "simple" ? (
            <Text1>{d.content}</Text1>
          ) : (
            <>
              {d.title}
              <ListComponent itemList={d.content} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const ListSection = ({
  data: { titleText, optionalDescriptionText, itemList },
}) => {
  return (
    <div className={"mb-6"}>
      <Title2>{titleText}</Title2>
      <Text1>{optionalDescriptionText}</Text1>
      <div className={"mt-4"}>
        <ListComponent itemList={itemList} />
      </div>
    </div>
  );
};

export default ListSection;
