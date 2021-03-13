import StatsComponent from "./StatsColumn/StatsComponent";
import Proficiencies from "./ProficienciesColumn/Proficiencies";
import FeaturesColumn from "./FeaturesColumn/FeaturesColumn";
import PersonalityColumn from "./PersonalityColumn/PersonalityColumn";

const CharacterForm = ({
  helpContents,
  setHelpContents,
  hitpoints,
  proficiencies,
  characterClass,
  speed,
  attributes,
  bonds,
  ideals,
  traits,
  flaws,
  languages,
  tools,
  profChoices,
  classProfs,
  sampleFeatures,
  setProficiencies,
  setSpeed,
  rollAttributes,
  setPersonality,
  setLanguages,
  setTools,
  setFlaws,
  setBonds,
  setIdeals,
  setTraits,
  setTags,
  setClassProfs,
  tags
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
        setSpeed={setSpeed}
      ></StatsComponent>
      <Proficiencies
        characterClass={characterClass}
        attributes={attributes}
        proficiencies={proficiencies}
        setHelpContents={setHelpContents}
        classProfs={classProfs}
        level={1}
      ></Proficiencies>
      <PersonalityColumn
        attributes={attributes}
        speed={speed}
        traits={traits}
        bonds={bonds}
        ideals={ideals}
        flaws={flaws}
        setTraits={setTraits}
        setBonds={setBonds}
        setIdeals={setIdeals}
        setFlaws={setFlaws}
        setPersonality={setPersonality}
        hitpoints={hitpoints}
        setHelpContents={setHelpContents}
        setTags={setTags}
        tags={tags}
      ></PersonalityColumn>
      <FeaturesColumn
        proficiencies={proficiencies}
        setProficiencies={setProficiencies}
        setHelpContents={setHelpContents}
        sampleFeatures={sampleFeatures}
        profChoices={profChoices}
        classProfs={classProfs}
        setClassProfs={setClassProfs}
      ></FeaturesColumn>
    </div>
  );
};

export default CharacterForm;
