import StatsComponent from "./StatsColumn/StatsComponent";
import Proficiencies from "./ProficienciesColumn/Proficiencies";
import FeaturesColumn from "./FeaturesColumn/FeaturesColumn";
import PersonalityColumn from "./PersonalityColumn/PersonalityColumn";
import Header from "./Header.js";

const CharacterSheet = ({ character, setHelpContents }) => {
  return (
    <div className="characterSheet bg-gray-100 max-w-characterSheet min-w-characterSheet w-full rounded-lg p-5">
      <Header character={character} setHelpContents={setHelpContents}></Header>
      <div className="header grid grid-cols-characterBody w-full space-x-2">
        <StatsComponent
          character={character}
          setHelpContents={setHelpContents}
        ></StatsComponent>
        <Proficiencies
          setHelpContents={setHelpContents}
          charClass={character.class}
          proficiencies={character.proficiencies}
          stats={character.attributes}
          level={character.level}
        ></Proficiencies>
        <PersonalityColumn
          character={character}
          setHelpContents={setHelpContents}
        ></PersonalityColumn>
        <FeaturesColumn
          character={character}
          setHelpContents={setHelpContents}
        ></FeaturesColumn>
      </div>
    </div>
  );
};

export default CharacterSheet;
