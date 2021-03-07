import StatScoreComponent from "./StatScoreComponent";
import LangProfs from "./LangProfs";
import StatsHelp from "./StatsHelp";

const Stats = ({ character, setHelpContents }) => {
  const statsParsed = JSON.parse(character.attributes);
  const profBonus = Math.ceil(1 + character.level / 4);
  // calculate bonus to proficiency roll
  let passivePerceptionBonus = 10 + Math.floor((statsParsed["wis"] - 10) / 2);
  let charProfsArray = character.proficiencies.split(",");
  // add prof bonus if character is proficient in that skill
  if (charProfsArray.includes("Perception")) {
    passivePerceptionBonus += profBonus;
  }

  return (
    <div className="columnContainer border-r border-black">
      <div className="statsColumn flex flex-col items-center border border-black rounded-lg m-2 p-0.5" onMouseOver={() => setHelpContents(StatsHelp)}>
        <div className="font-bold underline">Attributes</div>
        <StatScoreComponent
          stat={"Strength"}
          value={statsParsed.str}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Dexterity"}
          value={statsParsed.dex}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Constituion"}
          value={statsParsed.con}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Intelligence"}
          value={statsParsed.int}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Wisdom"}
          value={statsParsed.wis}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Charisma"}
          value={statsParsed.cha}
        ></StatScoreComponent>
      </div>
      <div className="languagesAndTools m-2 border border-black rounded-lg">
        <LangProfs
          languages={character.languages}
          tools={character.tools}
        ></LangProfs>
      </div>
      <div className="font-bold border border-black p-1 m-2 rounded-lg flex justify-around">
        <div className="m-1 p-1 text-sm">Passive Perception: </div>
        <div className="m-1 p-1">{passivePerceptionBonus}</div>
      </div>
    </div>
  );
};

export default Stats;
