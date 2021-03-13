import OneFeature from "./OneFeature";

const FeatureList = ({ features}) => {

  return (
    <div className="border border-black p-2 justify-around rounded-lg flex flex-col mx-2">
      {features.map((feature) => {
        return <OneFeature key={feature.name} feature={feature}></OneFeature>;
      })}
    </div>
  );
};

export default FeatureList;
