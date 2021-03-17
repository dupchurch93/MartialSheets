import OneFeature from "./OneFeature";

const FeatureList = ({ features}) => {

  return (
    <div className="border border-black p-2 justify-around rounded-lg flex flex-col mx-2">
      {features.map((feature, index) => {
        return <OneFeature key={index} feature={feature}></OneFeature>;
      })}
    </div>
  );
};

export default FeatureList;
