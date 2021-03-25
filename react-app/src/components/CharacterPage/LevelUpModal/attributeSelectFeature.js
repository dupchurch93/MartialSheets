import StatScoreComponent from "../StatsColumn/StatScoreComponent";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";

const AttributeSelectFeature = ({
  attributes,
  newAttributes,
  setNewAttributes,
}) => {
  const [pointBuy, setPointBuy] = useState(2);

  const onPointBuy = (e) => {
    e.preventDefault(e);
    if (pointBuy > 0) {
      setPointBuy(() => pointBuy - 1);
      const statToChange = e.currentTarget.value;
      const changedAttributes = newAttributes;
      changedAttributes[statToChange] += 1;
      setNewAttributes(changedAttributes);
    }
  };

  const onPointBuyMinus = (e) => {
    e.preventDefault(e);
    const statToChange = e.currentTarget.value;
    const changedAttributes = newAttributes;
    if (
      pointBuy < 2 &&
      newAttributes[statToChange] - 1 >= attributes[statToChange]
    ) {
      newAttributes[statToChange] -= 1;
      setPointBuy(() => pointBuy + 1);
      setNewAttributes(changedAttributes);
    }
  };

  const statsArr = [
    { attr: "str", name: "Strength", value: newAttributes.str },
    { attr: "dex", name: "Dexterity", value: newAttributes.dex },
    { attr: "con", name: "Constitution", value: newAttributes.con },
    { attr: "int", name: "Intelligence", value: newAttributes.int },
    { attr: "wis", name: "Wisdom", value: newAttributes.wis },
    { attr: "cha", name: "Charisma", value: newAttributes.cha },
  ];

  return (
    <div className="columnContainer border mx-4 rounded-lg pl-1 pt-1 border-black max-w-screen-sm">
      <div className="text-center">

      </div>
      <div className="statsColumn flex flex-wrap items-center m-2 p-0.5">
        {statsArr.map((stat, index) => {
          return (
            <div className="flex w-1/3 justify-center" key={index}>
              <StatScoreComponent
                stat={stat.name}
                value={stat.value}
              ></StatScoreComponent>
              <div className="flex justify-center flex-col">
                <button onClick={(e) => onPointBuy(e)} value={stat.attr}>
                  <AiOutlineArrowUp></AiOutlineArrowUp>
                </button>
                <button onClick={(e) => onPointBuyMinus(e)} value={stat.attr}>
                  <AiOutlineArrowDown></AiOutlineArrowDown>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttributeSelectFeature;
