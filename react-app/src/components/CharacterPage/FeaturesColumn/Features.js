import HPSpeedAC from "./HPSpeedAC";
import FeatureList from "./FeatureList";

const Features = ({ character }) => {
  const statsParsed = JSON.parse(character.attributes);
  return (
    <div className="featuresColumn border-r border-black">
      <div className="p-2 md:flex flex-col">
        <HPSpeedAC
          dex={statsParsed.dex}
          hitpoints={character.hitpoints}
          speed={character.speed}
        ></HPSpeedAC>
      </div>
      <div className="font-bold underline">Features</div>
      <FeatureList features={character.abilities}></FeatureList>
    </div>
  );
};

export default Features;
