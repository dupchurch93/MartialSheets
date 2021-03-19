import FeatureList from "./FeatureList";
import ClassProficiencyChoice from "./ClassProficiencyChoice";
import { useEffect, useState } from "react";

const Features = ({
  setHelpContents,
  features,
  characterClass,
  proficiencies,
  profChoices,
  classProfs,
  setClassProfs,
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

  const [profChoiceNumber, setProfChoiceNumber] = useState(0);
  useEffect(() => {
    if (characterClass === "Rogue") {
      setProfChoiceNumber(4);
    } else {
      setProfChoiceNumber(2);
    }
  }, [characterClass]);



  return (
    <div className="featuresColumn border-r border-black">
      <div onMouseEnter={() => setHelpContents(profHelp)}>
        <div className="font-bold underline text-center">
          Class Proficiencies
        </div>
        <div className="text-center">{`Please choose ${profChoiceNumber}.`}</div>
        <ClassProficiencyChoice
          proficiencies={proficiencies}
          profChoices={profChoices}
          characterClass={characterClass}
          classProfs={classProfs}
          setClassProfs={setClassProfs}
        ></ClassProficiencyChoice>
        <div className="font-bold underline text-center">
          Level 1 Sample Features
        </div>
        <div onMouseEnter={() => setHelpContents(featuresHelp)}>
          <FeatureList features={features}></FeatureList>
        </div>
      </div>
    </div>
  );
};

export default Features;
