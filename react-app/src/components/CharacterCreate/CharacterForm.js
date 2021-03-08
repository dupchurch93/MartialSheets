import StatsComponent from "./StatsColumn/StatsComponent";
import Proficiencies from "./ProficienciesColumn/Proficiencies";
import FeaturesColumn from "./FeaturesColumn/FeaturesColumn";
import PersonalityColumn from "./PersonalityColumn/PersonalityColumn";

const CharacterForm = ({
  setHelpContents,
  hitpoints,
  proficiencies,
  speed,
  attributes,
  personality,
  languages,
  tools,
  setHitpoints,
  setProficiencies,
  setSpeed,
  setAttributes,
  setPersonality,
  setLanguages,
  setTools,
}) => {
  return (
    <div className="header grid grid-cols-characterBody w-full space-x-2">
      <StatsComponent
        attributes={attributes}
        setAttributes={setAttributes}
        setHelpContents={setHelpContents}
      ></StatsComponent>
      <Proficiencies
        languages={languages}
        setLanguages={setLanguages}
        tools={tools}
        setTools={setTools}
        proficiencies={proficiencies}
        setProficiencies={setProficiencies}
        setHelpContents={setHelpContents}
      ></Proficiencies>
      <PersonalityColumn
        speed={speed}
        setSpeed={setSpeed}
        personality={personality}
        setPersonality={setPersonality}
        hitpoints={hitpoints}
        setHitpoints={setHitpoints}
        setHelpContents={setHelpContents}
      ></PersonalityColumn>
      <FeaturesColumn setHelpContents={setHelpContents}></FeaturesColumn>
    </div>
  );
};

export default CharacterForm;
