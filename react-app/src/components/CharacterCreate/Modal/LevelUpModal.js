import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useState } from "react";
import FeatureList from "../FeaturesColumn/FeatureList";

const LevelUpModal = ({
  modal,
  characterClass,
  setModal,
  handleSubmit,
  features,
}) => {
  const hidden = modal ? "modal" : "hidden";
  const [pickedFeature, setPickedFeature] = useState("Select Feature Option");
  const [featureHelp, setFeatureHelp] = useState("Choice Description")

  const closeModal = (e) => {
    e.preventDefault();
    setModal(false);
  };
  // console.log('controlled state feature', pickedFeature)

  const classFeatures = useSelector((state) => state.features[characterClass]);

  let featureChoices;
  let choiceName;
  if (classFeatures) {
    featureChoices = classFeatures.filter((feature) => {
      return feature.source.split(":")[3] === "choice";
    });
    if (featureChoices.length > 0) {
      choiceName = featureChoices[0].source.split(":")[4];
    }
  };

  const handlePickedFeature = (featureName) => {
    setPickedFeature(featureName);
    setFeatureHelp(featureChoices.filter((feature) => feature.name === featureName)[0].description)
  }

  return (
    <div
      className={`fixed m-0 ${hidden} w-full h-full bg-gray-900 bg-opacity-30 top-0 flex justify-center`}
    >
      <div className="modalInfo bg-white border-2 border-black rounded-lg min-w-characterSheet my-16 flex items-center flex-col overflow-y-auto">
        <div className="w-full flex justify-end p-2">
          <button onClick={(e) => closeModal(e)} className="rounded-lg">
            <TiDelete />
          </button>
        </div>
        <div className="font-bold underline text-lg m-4">
          Your {characterClass} begins their journey.
        </div>
        <div>Features gained on this level:</div>
        <FeatureList features={features}></FeatureList>
        {featureChoices && featureChoices.length > 0 ? (
          <div className="">
            {console.log("render")}
            <div className="border border-black p-2 m-2 rounded-lg w-80">
              <div className="m-4">
                Please choose your following class feature: {choiceName}.
              </div>
              <select
                value={pickedFeature}
                name="pickedFeature"
                onChange={(e) => handlePickedFeature(e.target.value)}
                className="w-full border border-black rounded-lg"
              >
                <option disabled value="Select Feature Option" hidden>
                  Select Feature Option
                </option>
                {featureChoices.map((feature) => {
                  return (
                    <option key={feature.name} value={feature.name}>
                      {feature.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="border border-black p-2 m-2 rounded-lg w-80">
              <div className="font-bold underline m-4 text-center">
                Choice Description
              </div>
              <div>{featureHelp}</div>
            </div>
          </div>
        ) : (
          <div>test</div>
        )}
        <button
          onClick={handleSubmit}
          className="w-56 p-2 rounded-lg m-4 border border-black bg-myred text-white"
          type="submit"
        >
          Finalize Character
        </button>
      </div>
    </div>
  );
};

export default LevelUpModal;
