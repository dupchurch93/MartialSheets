import { useState, useEffect, useCallback } from "react";
import { addCharacterThunk } from "../../store/character";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import InventoryForm from "./InventorySheet";
import DescriptionForm from "./DescriptionForm";
import HeaderForm from "./HeaderForm";

const CharacterCreate = () => {
  const [helpContents, setHelpContents] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  // Controlled form fields
  const [name, setName] = useState("");
  const [characterClass, setCharacterClass] = useState("Select Class");
  const [background, setBackground] = useState("Select Background");
  const [alignment, setAlignment] = useState("Select Alignment");
  const [race, setRace] = useState("Select Race");
  const [hitpoints, setHitpoints] = useState(0);
  const [image, setImage] = useState("");
  const [proficiencies, setProficiencies] = useState("");
  const [speed, setSpeed] = useState(0);
  const [attributes, setAttributes] = useState({});
  const [traits, setTraits] = useState([]);
  const [ideals, setIdeals] = useState([]);
  const [bonds, setBonds] = useState([]);
  const [flaws, setFlaws] = useState([]);
  const [inventory, setInventory] = useState("");
  const [description, setDescription] = useState("");
  const [languages, setLanguages] = useState("");
  const [tools, setTools] = useState("");
  const [tags, setTags] = useState("");
  const [profChoices, setProfChoices] = useState([]);
  const [sampleFeatures, setSampleFeatures] = useState([]);

  //errors state for rendering errors
  const [errors, setErrors] = useState([]);

  //helper function to roll stats on the character form so rerendering does not reroll them
  const rollAttributes = useCallback(() => {
    const attrObj = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
    Object.keys(attrObj).forEach((atr) => {
      const rolledScores = [1, 1, 1, 1].map((el) => {
        return el * Math.ceil(Math.random() * (6 - 1) + 1);
      });
      rolledScores.sort();
      rolledScores.shift();

      const statScore = rolledScores[0] + rolledScores[1] + rolledScores[2];
      attrObj[atr] = statScore;
    });
    setAttributes(attrObj);
  }, []);
  //handle the submit. Format data correctly and dispatch creation thunk.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    const character = {
      userId: user.id,
      name: name,
      level: 1,
      race: race,
      characterClass: characterClass,
      hitpoints: hitpoints,
      proficiencies: proficiencies,
      speed: speed,
      image: image,
      background: background,
      alignment: alignment,
      attributes: JSON.stringify(attributes),
      traits: traits,
      ideals: ideals,
      bonds: bonds,
      flaws: flaws,
      description: description,
      inventory: inventory,
      languages: languages,
      tools: tools,
      tags: tags,
    };
    Object.entries(character).forEach((entry) => {
      myForm.append(entry[0], entry[1]);
    });
    const response = await dispatch(addCharacterThunk(myForm));
    if (!response.errors) {
      window.scrollTo(0,0);
      history.push(`/`);
    } else {
      setErrors(response.errors);
    }
  };

  //only roll on page load and on button reroll. Values persist with useState
  useEffect(() => {
    rollAttributes();
  }, [rollAttributes]);

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <form className="flex justify-center" id="charForm" onSubmit={handleSubmit}>
      <div>
        {errors.map((error) => (
          <div key={error}>{error}</div>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="charImageContainer h-48 w-48 mt-2 mx-2 border-2 border-black rounded-lg text-sm text-center px-1">
          <label htmlFor="characterPicture">Upload Character Picture</label>
          <input
            type="file"
            name="characterPicture"
            onChange={updateImage}
          ></input>
        </div>
        <div className="description w-48 mt-2 mx-2 h-full mb-12 border border-black rounded-lg bg-gray-100 overflow-auto">
          <div className="font-bold underline p-1 text-center">More Info:</div>
          <div className="text-xs p-1">{helpContents}</div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="characterSheetContainer w-full w-full flex justify-center mb-10">
          <div className="characterSheet bg-gray-100 max-w-characterSheet min-w-characterSheet w-full rounded-lg p-5">
            <HeaderForm
              setHelpContents={setHelpContents}
              name={name}
              characterClass={characterClass}
              race={race}
              background={background}
              alignment={alignment}
              attributes={attributes}
              setName={setName}
              setCharacterClass={setCharacterClass}
              setRace={setRace}
              setBackground={setBackground}
              setAlignment={setAlignment}
              setProficiencies={setProficiencies}
              setHitpoints={setHitpoints}
              setSpeed={setSpeed}
              setProfChoices={setProfChoices}
              setSampleFeatures={setSampleFeatures}
            ></HeaderForm>
            <CharacterForm
              characterClass={characterClass}
              helpContents={helpContents}
              setHelpContents={setHelpContents}
              hitpoints={hitpoints}
              proficiencies={proficiencies}
              speed={speed}
              attributes={attributes}
              traits={traits}
              bonds={bonds}
              ideals={ideals}
              flaws={flaws}
              languages={languages}
              tools={tools}
              profChoices={profChoices}
              sampleFeatures={sampleFeatures}
              setProficiencies={setProficiencies}
              setTraits={setTraits}
              setIdeals={setIdeals}
              setBonds={setBonds}
              setFlaws={setFlaws}
              setLanguages={setLanguages}
              setTools={setTools}
              rollAttributes={rollAttributes}
              setTags={setTags}
              tags={tags}
            ></CharacterForm>
            <DescriptionForm
              setHelpContents={setHelpContents}
              setDescription={setDescription}
              description={description}
            ></DescriptionForm>
            <InventoryForm
              setHelpContents={setHelpContents}
              setInventory={setInventory}
              inventory={inventory}
            ></InventoryForm>
            <div className="w-full text-center">
              <button
                className="w-56 p-2 rounded-lg mt-4 border border-black bg-myred text-white"
                type="submit"
              >
                Create Character
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CharacterCreate;
