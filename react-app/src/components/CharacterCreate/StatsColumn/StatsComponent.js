import StatScoreComponent from "./StatScoreComponent";
import LangProfs from "./LangProfs";
import StatsHelp from "./StatsHelp";

const Stats = ({ setHelpContents, attributes, setAttributes }) => {

  if(!attributes){
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className="columnContainer border-r border-black">
      <div className="statsColumn flex flex-col items-center border border-black rounded-lg m-2 p-0.5" onMouseOver={() => setHelpContents(StatsHelp)}>
        <div className="font-bold underline">Attributes</div>
        <StatScoreComponent
          stat={"Strength"}
          value={attributes.str}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Dexterity"}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Constituion"}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Intelligence"}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Wisdom"}
        ></StatScoreComponent>
        <StatScoreComponent
          stat={"Charisma"}
        ></StatScoreComponent>
      </div>
      <div className="languagesAndTools m-2 border border-black rounded-lg">
        <LangProfs
        ></LangProfs>
      </div>
      <div className="font-bold border border-black p-1 m-2 rounded-lg flex justify-around">
        <div className="m-1 p-1 text-sm">Passive Perception: </div>
        <div className="m-1 p-1">tbd</div>
      </div>
    </div>
  );
};

export default Stats;
