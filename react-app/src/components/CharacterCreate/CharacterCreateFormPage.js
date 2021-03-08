import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import CharacterForm from "./CharacterForm";
import InventoryForm from "./InventorySheet";
import DescriptionForm from "./DescriptionForm";
import HeaderForm from "./HeaderForm";

const CharacterPage = () => {
  const [helpContents, setHelpContents] = useState("");

  // Controlled form fields
  const [name, setName] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [background, setBackground] = useState("");
  const [alignment, setAlignment] = useState("");
  const [race, setRace] = useState("");
  const [hitpoints, setHitpoints] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [proficiencies, setProficiencies] = useState("");
  const [speed, setSpeed] = useState("");
  const [attributes, setAttributes] = useState("");
  const [personality, setPersonality] = useState("");
  const [inventory, setInventory] = useState("");
  const [description, setDescription] = useState("");
  const [languages, setLanguages] = useState("");
  const [tools, setTools] = useState("");
  const [tags, setTags] = useState("");

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="charImageContainer h-48 w-48 mt-10 mx-2 border-2 border-black rounded-lg ">
          file input here
        </div>
        <div className="description w-48 mt-2 mx-2 h-full mb-12 border border-black rounded-lg bg-gray-100 overflow-auto">
          <div className="font-bold underline p-1">Explanation</div>
          <div className="text-xs p-1">{helpContents}</div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="characterSheetContainer w-full w-full flex justify-center mb-10">
          <div className="characterSheet bg-gray-100 max-w-characterSheet min-w-characterSheet w-full rounded-lg p-5">
            <HeaderForm setHelpContents={setHelpContents}></HeaderForm>
            {/* <CharacterForm setHelpContents={setHelpContents}></CharacterForm> */}
            <DescriptionForm
              setHelpContents={setHelpContents}
            ></DescriptionForm>
            {/* <InventoryForm setHelpContents={setHelpContents}></InventoryForm> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
