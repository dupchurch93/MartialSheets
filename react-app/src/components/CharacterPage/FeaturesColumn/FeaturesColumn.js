import FeatureList from "./FeatureList";

const Features = ({ character }) => {
  return (
    <div className="featuresColumn border-r border-black">
      <div className="font-bold underline text-center">Features</div>
      <FeatureList features={character.abilities}></FeatureList>
    </div>
  );
};

export default Features;
