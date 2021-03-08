import StatScoreComponent from "./StatScoreComponent";
import LangProfs from "./LangProfs";
import StatsHelp from "./StatsHelp";

const Stats = ({
  setHelpContents,
  attributes,
  rollAttributes,
  proficiencies,
  languages,
  setLanguages,
  tools,
  setTools,
}) => {
  const handleAttributesRoll = (e) => {
    e.preventDefault();
    rollAttributes();
  };

  if (!attributes) {
    return <div>Loading...</div>;
  }

  // calculate bonus to proficiency roll
  let passivePerceptionBonus = 10 + Math.floor((attributes.wis - 10) / 2);
  let charProfsArray = proficiencies.split(",");
  // add prof bonus if character is proficient in that skill
  if (charProfsArray.includes("Perception")) {
    passivePerceptionBonus += 2;
  }

  return (
    <div className="columnContainer border-r border-black">
      <div
        className="statsColumn flex flex-col items-center border border-black rounded-lg m-2 p-0.5"
        onMouseOver={() => setHelpContents(StatsHelp)}
      >
        <div className="font-bold underline">Attributes</div>
        <StatScoreComponent
          stat={"Strength"}
          value={attributes.str}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Dexterity"}
          value={attributes.dex}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Constituion"}
          value={attributes.con}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Intelligence"}
          value={attributes.int}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Wisdom"}
          value={attributes.wis}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Charisma"}
          value={attributes.cha}
        ></StatScoreComponent>
        <button
          onClick={(e) => handleAttributesRoll(e)}
          className="border border-black rounded-lg bg-myred text-white p-1"
        >
          Roll Attributes
        </button>
      </div>
      <div className="languagesAndTools m-2 border border-black rounded-lg">
        <LangProfs languages={languages} setLanguages={setLanguages} tools={tools} setTools={setTools}></LangProfs>
      </div>
      <div className="font-bold border border-black p-1 m-2 rounded-lg flex justify-around">
        <div className="m-1 p-1 text-sm">Passive Perception: </div>
        <div className="m-1 p-1">{passivePerceptionBonus}</div>
      </div>
    </div>
  );
};

export default Stats;
