import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useState } from "react";
import FeatureList from "../FeaturesColumn/FeatureList";

const Level1Modal = ({
  modal,
  characterClass,
  setModal,
  handleSubmit,
  setFeatures,
  features,
}) => {
  const hidden = modal ? "modal" : "hidden";
  const [pickedFeatureIndex, setPickedFeatureIndex] = useState(
    "Select Feature Option"
  );
  const [featureHelp, setFeatureHelp] = useState("Choice Description");
  const [errors, setErrors] = useState([]);

  const closeModal = (e) => {
    e.preventDefault();
    setModal(false);
  };

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
  }

  //set picked feature equal the name and find the feature, setting the description equal to the helper
  const handlePickedFeature = (index) => {
    setPickedFeatureIndex(index);
    const newFeatures = [];
    for(let feature of features){
      if(!feature.name.includes(choiceName)){
        newFeatures.push(feature);
      }
    }
    setFeatures([...newFeatures, featureChoices[index]]);
    setFeatureHelp(featureChoices[index].description);
  };

  const validateChoice = () => {
    const validationErrors = [];

    if (
      featureChoices.length > 0 &&
      pickedFeatureIndex === "Select Feature Option"
    ) {
      validationErrors.push(
        "Please select a feature choice for your character."
      );
    }

    return validationErrors;
  };

  const finalizeCharacter =async (e) => {
    const errs = validateChoice();
    if (errs.length > 0) {
      window.scrollTo(0, 0);
      return setErrors(errs);
    }
    handleSubmit(e);
  };

  return (
    <div
      className={`fixed m-0 ${hidden} w-full h-full bg-gray-900 bg-opacity-50 top-0 left-0 flex justify-center`}
    >
      <div className="modalInfo bg-white border-2 border-black rounded-lg min-w-characterSheet my-16 flex items-center flex-col overflow-y-auto">
        {errors.length > 0 && (
          <div className="absolute left-0 mx-10 w-64 bg-gray-100 rounded-lg px-2 border-black border">
            {errors.map((error) => (
              <li className="ml-3" key={error}>
                {error}
              </li>
            ))}
          </div>
        )}
        <div className="w-full flex justify-end p-2">
          <button onClick={(e) => closeModal(e)} className="rounded-lg">
            <TiDelete />
          </button>
        </div>
        <div className="font-bold underline text-lg m-4">
          Your {characterClass} begins their journey.
        </div>
        <div>Features gained on this level:</div>
        <div className="w-96 box-border">
          <FeatureList features={features}></FeatureList>
        </div>
        {featureChoices && featureChoices.length > 0 ? (
          <div className="">
            <div className="border border-black p-2 m-2 rounded-lg w-96">
              <div className="m-4">
                Please choose your following class feature: {choiceName}.
              </div>
              <select
                value={pickedFeatureIndex}
                name="pickedFeature"
                onChange={(e) => handlePickedFeature(e.target.value)}
                className="w-full border border-black rounded-lg"
              >
                <option disabled value="Select Feature Option" hidden>
                  Select Feature Option
                </option>
                {featureChoices.map((feature, index) => {
                  return (
                    <option key={index} value={index}>
                      {featureChoices[index].name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="border border-black p-2 m-2 rounded-lg w-96 box-border">
              <div className="font-bold underline m-4 text-center">
                Choice Description
              </div>
              <div>{featureHelp}</div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <button
          onClick={(e) => finalizeCharacter(e)}
          className="w-56 p-2 rounded-lg m-4 border border-black bg-myred text-white"
          type="submit"
        >
          Finalize Character
        </button>
      </div>
    </div>
  );
};

export default Level1Modal;
