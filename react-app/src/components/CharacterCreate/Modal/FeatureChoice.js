const FeatureChoice = ({ feature, setFeatures }) => {
  return (
    <div>
      <div>Please choose your following class feature: {choiceName}</div>
      {featureChoices.map((feature) => {
        return <div key={feature.name}>{feature.name}</div>;
      })}
      <div>
        Finally a submit button that actually creates the character or submits
        the changes
      </div>
    </div>
  );
};

export default FeatureChoice;
