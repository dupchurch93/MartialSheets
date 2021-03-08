import FeatureList from "./FeatureList";

const Features = ({ character, setHelpContents }) => {
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
  return (
    <div
      className="featuresColumn border-r border-black"
      onMouseEnter={() => setHelpContents(featuresHelp)}
    >
      <div className="font-bold underline text-center">Features</div>
      <FeatureList features={character.abilities}></FeatureList>
    </div>
  );
};

export default Features;
