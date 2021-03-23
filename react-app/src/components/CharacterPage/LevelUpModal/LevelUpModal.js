import { TiDelete } from "react-icons/ti";
import { useState, useEffect } from "react";
import FeatureList from "../FeaturesColumn/FeatureList";
import ProfBonus from "./profBonus";
import HitPoints from "./hitpointsChoice";
import AttributeSelectFeature from "./attributeSelectFeature";
import { useDispatch } from "react-redux";
import { levelUpCharacterThunk } from "../../../store/character";

const LevelUpModal = ({
  modal,
  character,
  setModal,
  setPageErrors,
  characterSubclass,
  setCharacterSubclass,
}) => {
  const hidden = modal ? "modal" : "hidden";
  const dispatch = useDispatch();

  const [allFeatures, setAllFeatures] = useState([]);
  const [pickedFeatureIndex, setPickedFeatureIndex] = useState(
    "Select Feature Option"
  );
  const [featureHelp, setFeatureHelp] = useState("Choice Description");
  const [errors, setErrors] = useState([]);
  const [newHitpoints, setNewHitpoints] = useState(character.hitpoints);
  const [newAttributes, setNewAttributes] = useState(
    JSON.parse(character.attributes)
  );
  const newLevel = character.level + 1;
  const charId = character.id;

  //use Effect to grab all abilities character will recieve on level up
  useEffect(() => {
    (async () => {
      let response;
      if (characterSubclass === "") {
        response = await fetch(`/api/abilities/${charId}/${newLevel}/any`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        response = await fetch(
          `/api/abilities/${charId}/${newLevel}/${characterSubclass}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      const features = await response.json();
      setAllFeatures(features.features);
    })();
    return;
  }, [newLevel, charId, characterSubclass]);

  const closeModal = (e) => {
    e.preventDefault();
    setPickedFeatureIndex("Select Feature Option");
    setCharacterSubclass(character.subclass || "");
    setModal(false);
  };

  let featureChoices = [];
  let featureNonChoices = [];
  let choiceName;
  if (allFeatures) {
    allFeatures.forEach((feature) => {
      if (feature.source.split(":")[3] === "choice") {
        featureChoices.push(feature);
      } else {
        featureNonChoices.push(feature);
      }
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
    if (newHitpoints === character.hitpoints) {
      validationErrors.push(
        "Please select an HP increase (average or roll) for your charaterl."
      );
    }
    return validationErrors;
  };

  const finalizeLevelUp = async (e) => {
    e.preventDefault();
    const errs = validateChoice();
    if (errs.length > 0) {
      window.scrollTo(0, 0);
      return setErrors(errs);
    }

    let newFeatures = [];
    featureNonChoices.forEach((feature) => {
      newFeatures.push(feature.name);
    });
    if (!(pickedFeatureIndex === "Select Feature Option")) {
      newFeatures.push(featureChoices[pickedFeatureIndex].name);
    }

    // patch request to update character with new abilities, hp, and level
    setModal(false);
    const res = await dispatch(
      levelUpCharacterThunk(
        charId,
        newHitpoints,
        newFeatures,
        newLevel,
        characterSubclass
      )
    );
    if (res.errors) {
      setPageErrors(res.errors);
    }
  };

  return (
    <div
      className={`fixed m-0 ${hidden} w-full h-full bg-gray-900 bg-opacity-50 left-0 top-0 flex justify-center`}
    >
      <form
        onSubmit={finalizeLevelUp}
        className="modalInfo bg-white border-2 border-black rounded-lg min-w-characterSheet my-16 flex items-center flex-col overflow-y-auto"
      >
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
        <div className="w-96 mb-6 mx-2">
          <ProfBonus level={newLevel}></ProfBonus>
        </div>
        <div className="mb-6 mx-2">
          <HitPoints
            setNewHitpoints={setNewHitpoints}
            hitpoints={character.hitpoints}
            con={JSON.parse(character.attributes).con}
            characterClass={character.class}
          ></HitPoints>
        </div>
        {newLevel % 4 === 0 ? (
          <AttributeSelectFeature
            newAttributes={newAttributes}
            setNewAttributes={setNewAttributes}
            attributes={JSON.parse(character.attributes)}
          ></AttributeSelectFeature>
        ) : (
          <></>
        )}
        <div className="font-bold">Features gained at level {newLevel}</div>
        <div className="w-96">
          <FeatureList features={featureNonChoices}></FeatureList>
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
            <div className="border border-black p-2 m-2 rounded-lg w-96">
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
          className="w-56 p-2 rounded-lg m-4 border border-black bg-myred text-white font-bold"
          type="submit"
        >
          Finalize Level Up
        </button>
      </form>
    </div>
  );
};

export default LevelUpModal;
