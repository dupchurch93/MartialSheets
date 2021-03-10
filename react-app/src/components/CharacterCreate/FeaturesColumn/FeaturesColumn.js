import FeatureList from "./FeatureList";
import ClassProficiencyChoice from "./ClassProficiencyChoice";

const Features = ({
  setHelpContents,
  sampleFeatures,
  characterClass,
  setProficiencies,
  proficiencies,
  profChoices,
}) => {
  const featuresHelp = (
    <div>
      <div>
        <span className="font-bold underline">Features and Abilites:</span> Here
        you will find all abilities and features your character has. Click on
        each ability to see it's description. These are determined at character
        creation based on class and race selection as well as gained on level up
        and when a subclass is picked (typically level 3).
      </div>
    </div>
  );

  const profHelp = (
    <div>
      Each class, besides rogues, is able to choose two skills from a list of
      skills that their character may be proficient at that. Rogues are more
      skill oriented and are able to choose four.
    </div>
  );

  return (
    <div className="featuresColumn border-r border-black">
      <div onMouseEnter={() => setHelpContents(profHelp)}>
        <div className="font-bold underline text-center">
          Class Proficiencies
        </div>
        <ClassProficiencyChoice
          proficiencies={proficiencies}
          setProficiencies={setProficiencies}
          profChoices={profChoices}
          characterClass={characterClass}
        ></ClassProficiencyChoice>
      <div className="font-bold underline text-center">
        Level 1 Sample Features
      </div>
      <div onMouseEnter={() => setHelpContents(featuresHelp)}>
        <FeatureList sampleFeatures={sampleFeatures}></FeatureList>
      </div>
      </div>
    </div>
  );
};

export default Features;
