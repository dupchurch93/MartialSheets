import { TiDelete } from "react-icons/ti";
import { useState, useEffect } from "react";
import FeatureList from "../FeaturesColumn/FeatureList";
import { loadLevelUpFeaturesThunk } from "../../../store/features";
import { useDispatch } from "react-redux";

const LevelUpModal = ({ modal, character, setModal }) => {
  const hidden = modal ? "modal" : "hidden";
  const dispatch = useDispatch();

  //use Effect to grab all abilities character will recieve on level up
  useEffect(() => {
    (async () => {
      const features = await dispatch(loadLevelUpFeaturesThunk(character.id, character.level + 1))
      console.log("features in use effect", features)
    })()
  },[])

  const [allFeatures, setAllFeatures] = useState([]);
  const [pickedFeatureIndex, setPickedFeatureIndex] = useState(
    "Select Feature Option"
  );
  const [levelUpFeatures, setLevelUpFeatures] = useState([]);
  const [featureHelp, setFeatureHelp] = useState("Choice Description");
  const [errors, setErrors] = useState([]);

  const closeModal = (e) => {
    e.preventDefault();
    setPickedFeatureIndex("Select Feature Option");
    setModal(false);
  };

  let featureChoices;
  let choiceName;
  if (allFeatures) {
    featureChoices = allFeatures.filter((feature) => {
      return feature.source.split(":")[3] === "choice";
    });
    if (featureChoices.length > 0) {
      choiceName = featureChoices[0].source.split(":")[4];
    }
  }

  //set picked feature equal the name and find the feature, setting the description equal to the helper
  const handlePickedFeature = (index) => {
    setPickedFeatureIndex(index);
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

  const finalizeCharacter = (e) => {
    e.preventDefault();
  }

  return (
    <div
      className={`fixed m-0 ${hidden} w-full h-full bg-gray-900 bg-opacity-30 top-0 flex justify-center`}
    >
      <form onSubmit={finalizeCharacter} className="modalInfo bg-white border-2 border-black rounded-lg min-w-characterSheet my-16 flex items-center flex-col overflow-y-auto">
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
          {character.name} is now level {character.level + 1}!
        </div>
        <div>Features gained on this level:</div>
        {/* <FeatureList features={features}></FeatureList> */}
        {featureChoices && featureChoices.length > 0 ? (
          <div className="">
            <div className="border border-black p-2 m-2 rounded-lg w-80">
              <div className="m-4">
                Please choose your following class feature: {choiceName}.
              </div>
              {/* <select
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
              </select> */}
            </div>
            <div className="border border-black p-2 m-2 rounded-lg w-80">
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
          className="w-56 p-2 rounded-lg m-4 border border-black bg-myred text-white"
          type="submit"
        >
          Finalize Level Up
        </button>
      </form>
    </div>
  );
};

export default LevelUpModal;
