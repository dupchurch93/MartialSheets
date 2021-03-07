import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CharacterSheet from "./CharacterSheet";
import InventorySheet from "./InventorySheet";
import DescriptionSheet from "./DescriptionSheet";

const CharacterPage = () => {
  const { characterId } = useParams();
  const character = useSelector((state) => state.characters.list[characterId]);
  const [showCharacter, setShowCharacter] = useState(true);
  const [showInventory, setShowInventory] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [helpContents, setHelpContents] = useState("stuff in help contents");

  const showCharacterFunc = () => {
    setShowCharacter(true);
    setShowInventory(false);
    setShowDescription(false);
  };
  const showInventoryFunc = () => {
    setShowCharacter(false);
    setShowInventory(true);
    setShowDescription(false);
  };
  const showDescriptionFunc = () => {
    setShowCharacter(false);
    setShowInventory(false);
    setShowDescription(true);
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="charImageContainer h-48 w-48 mt-10 mx-2 border-2 border-black rounded-lg ">
          <img
            className="h-full w-full "
            src={character.imgURL}
            alt="character portrait"
          ></img>
        </div>
        <div className="description w-48 mt-2 mx-2 h-full mb-12 border border-black rounded-lg overflow-auto">
          <div className="font-bold underline p-1">Explanation</div>
          <div className="text-xs p-1">{helpContents}</div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="buttons top flex justify-between w-full">
          <div>test</div>
          <div className="rightButtons flex">
            <button
              onClick={() => showCharacterFunc()}
              className="mx-2 my-1 bg-red-600 text-white p-1 rounded-lg"
            >
              Character
            </button>
            <button
              onClick={() => showInventoryFunc()}
              className="mx-2 my-1 bg-red-600 text-white p-1 rounded-lg"
            >
              Inventory
            </button>
            <button
              onClick={() => showDescriptionFunc()}
              className="mx-2 my-1 bg-red-600 text-white p-1 rounded-lg"
            >
              Description
            </button>
          </div>
        </div>
        <div className="characterSheetContainer w-full w-full flex justify-center mb-10">
          {showCharacter && (
            <CharacterSheet character={character} setHelpContents={setHelpContents}></CharacterSheet>
          )}
          {showInventory && (
            <InventorySheet character={character} setHelpContents={setHelpContents}></InventorySheet>
          )}
          {showDescription && (
            <DescriptionSheet character={character} setHelpContents={setHelpContents}></DescriptionSheet>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
