import StatsComponent from "./StatsColumn/StatsComponent";
import Proficiencies from "./ProficienciesColumn/Proficiencies";
// import FeaturesColumn from "./FeaturesColumn/FeaturesColumn";
// import PersonalityColumn from "./PersonalityColumn/PersonalityColumn";

const CharacterForm = ({
  helpContents,
  setHelpContents,
  hitpoints,
  proficiencies,
  background,
  characterClass,
  speed,
  attributes,
  personality,
  languages,
  tools,
  setHitpoints,
  setProficiencies,
  setSpeed,
  rollAttributes,
  setPersonality,
  setLanguages,
  setTools,
}) => {
  return (
    <div className="header grid grid-cols-characterBody w-full space-x-2">
      <StatsComponent
        attributes={attributes}
        rollAttributes={rollAttributes}
        setHelpContents={setHelpContents}
        proficiencies={proficiencies}
        languages={languages}
        setLanguages={setLanguages}
        tools={tools}
        setTools={setTools}
        helpContents={helpContents}
      ></StatsComponent>
      <Proficiencies
        characterClass={characterClass}
        background={background}
        attributes={attributes}
        proficiencies={proficiencies}
        setProficiencies={setProficiencies}
        setHelpContents={setHelpContents}
        level={1}
      ></Proficiencies>
      {/* <PersonalityColumn
        speed={speed}
        setSpeed={setSpeed}
        personality={personality}
        setPersonality={setPersonality}
        hitpoints={hitpoints}
        setHitpoints={setHitpoints}
        setHelpContents={setHelpContents}
      ></PersonalityColumn>
      <FeaturesColumn setHelpContents={setHelpContents}></FeaturesColumn> */}
    </div>
  );
};

export default CharacterForm;
