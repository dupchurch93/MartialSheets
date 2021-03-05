import StatScoreComponent from "./StatScoreComponent";
import LangProfs from "./LangProfs"

const Stats = ({ character }) => {
  const attributeObj = JSON.parse(character.attributes);
  return (
    <div className="columnContainer">
      <div className="statsColumn flex flex-col items-center border border-black rounded-lg">
        <StatScoreComponent
          stat={"Strength"}
          value={attributeObj.str}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Dexterity"}
          value={attributeObj.dex}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Constituion"}
          value={attributeObj.con}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Intelligence"}
          value={attributeObj.int}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Wisdom"}
          value={attributeObj.wis}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Charisma"}
          value={attributeObj.cha}
        ></StatScoreComponent>
      </div>
      <div className="statsColumnmy-2 border border-black rounded-lg">
        <LangProfs languages={character.languages} tools={character.tools}></LangProfs>
      </div>
    </div>
  );
};

export default Stats;
