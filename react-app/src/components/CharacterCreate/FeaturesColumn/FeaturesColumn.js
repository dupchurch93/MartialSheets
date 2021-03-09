import FeatureList from "./FeatureList";

const Features = ({ setHelpContents, sampleFeatures }) => {

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
      <div className="font-bold underline text-center">Level 1 Sample Features</div>
      <FeatureList sampleFeatures={sampleFeatures}></FeatureList>
    </div>
  );
};

export default Features;
