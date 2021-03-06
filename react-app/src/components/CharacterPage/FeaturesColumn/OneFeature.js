const OneFeature = ({ feature }) => {
  return (
    <div className="oneFeatureContainer px-2 border border-black rounded-lg">
      <div className="font-bold underline">{feature.name}</div><button onMouseOver={() => "display what the button does"}>Show/Hide Description</button>
      <div>{feature.description}</div>
    </div>
  );
};
export default OneFeature;
