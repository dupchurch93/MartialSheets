import StatsComponent from "./StatsColumn/StatsComponent";
import Proficiencies from "./ProficienciesColumn/Proficiencies";
import FeaturesColumn from "./FeaturesColumn/FeaturesColumn";
import PersonalityColumn from "./PersonalityColumn/PersonalityColumn";

const CharacterSheet = ({ setHelpContents }) => {
  return (
    <div className="header grid grid-cols-characterBody w-full space-x-2">
      {/* <StatsComponent setHelpContents={setHelpContents}></StatsComponent>
      <Proficiencies setHelpContents={setHelpContents}></Proficiencies>
      <PersonalityColumn setHelpContents={setHelpContents}></PersonalityColumn>
      <FeaturesColumn setHelpContents={setHelpContents}></FeaturesColumn> */}
    </div>
  );
};

export default CharacterSheet;
