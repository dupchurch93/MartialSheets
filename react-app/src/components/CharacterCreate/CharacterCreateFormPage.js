import { useState } from "react";
import CharacterForm from "./CharacterForm";
import InventoryForm from "./InventorySheet";
import DescriptionForm from "./DescriptionForm";
import HeaderForm from "./HeaderForm";

const CharacterCreate = () => {
  const [helpContents, setHelpContents] = useState("");
  const character = {};
  // Controlled form fields
  const [name, setName] = useState(character.name);
  const [characterClass, setCharacterClass] = useState("Select Class");
  const [background, setBackground] = useState("Select Background");
  const [alignment, setAlignment] = useState("Select Alignment");
  const [race, setRace] = useState("Select Race");
  const [hitpoints, setHitpoints] = useState(character.hitpoints);
  const [imgURL, setimgURL] = useState(character.imgURL);
  const [proficiencies, setProficiencies] = useState(character.proficiencies);
  const [speed, setSpeed] = useState(character.speed);
  const [attributes, setAttributes] = useState(character.attributes);
  const [personality, setPersonality] = useState(character.personality);
  const [inventory, setInventory] = useState(character.inventory);
  const [description, setDescription] = useState(character.description);
  const [languages, setLanguages] = useState(character.languages);
  const [tools, setTools] = useState(character.tools);
  const [tags, setTags] = useState(character.tags);

  return (
    <form className="flex justify-center">
      <div className="flex flex-col">
        <div className="charImageContainer h-48 w-48 mt-2 mx-2 border-2 border-black rounded-lg text-sm text-center px-1">
          <label htmlFor="characterPicture">Upload Character Picture</label>
          <input type="file" name="characterPicture"></input>
        </div>
        <div className="description w-48 mt-2 mx-2 h-full mb-12 border border-black rounded-lg bg-gray-100 overflow-auto">
          <div className="font-bold underline p-1">Explanation</div>
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
              setName={setName}
              setCharacterClass={setCharacterClass}
              setRace={setRace}
              setBackground={setBackground}
              setAlignment={setAlignment}
              setHelpContents={setHelpContents}
            ></HeaderForm>
            <CharacterForm setHelpContents={setHelpContents}
            hitpoints={hitpoints}
            proficiencies={proficiencies}
            speed={speed}
            attributes={attributes}
            personality={personality}
            languages={languages}
            tools={tools}
            setHitpoints={setHitpoints}
            setProficiencies={setProficiencies}
            setSpeed={setSpeed}
            setAttributes={setAttributes}
            setPersonality={setPersonality}
            setLanguages={setLanguages}
            setTags={setTools}>
            </CharacterForm>
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
          </div>
        </div>
        <button type="submit">Create Character</button>
      </div>
    </form>
  );
};

export default CharacterCreate;
