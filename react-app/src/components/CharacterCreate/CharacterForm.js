import StatsComponent from "./StatsColumn/StatsComponent";
import Proficiencies from "./ProficienciesColumn/Proficiencies";
import FeaturesColumn from "./FeaturesColumn/FeaturesColumn";
import PersonalityColumn from "./PersonalityColumn/PersonalityColumn";
import HeaderForm from "./HeaderForm.js";

const CharacterSheet = ({ setHelpContents }) => {
  return (
    <div className="characterSheet bg-gray-100 max-w-characterSheet min-w-characterSheet w-full rounded-lg p-5">
      <HeaderForm setHelpContents={setHelpContents}></HeaderForm>
      <div className="header grid grid-cols-characterBody w-full space-x-2">
        <StatsComponent setHelpContents={setHelpContents}></StatsComponent>
        <Proficiencies
          setHelpContents={setHelpContents}
        ></Proficiencies>
        <PersonalityColumn
          setHelpContents={setHelpContents}
        ></PersonalityColumn>
        <FeaturesColumn setHelpContents={setHelpContents}></FeaturesColumn>
      </div>
    </div>
  );
};

export default CharacterSheet;
