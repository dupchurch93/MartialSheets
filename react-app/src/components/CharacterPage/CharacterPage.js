import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CharacterSheet from "./CharacterSheet";
import InventorySheet from "./InventorySheet";
import DescriptionSheet from "./DescriptionSheet";
import { deleteCharacterThunk } from "../../store/character";
import LevelUpModal from "./LevelUpModal/LevelUpModal";

const CharacterPage = () => {
  const { characterId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const character = useSelector((state) => state.characters.list[characterId]);
  const [showCharacter, setShowCharacter] = useState(true);
  const [showInventory, setShowInventory] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [helpContents, setHelpContents] = useState("stuff in help contents");
  const [modal, setModal] = useState(false);

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

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this character?"
    );
    if (confirmed) {
      const result = await dispatch(deleteCharacterThunk(characterId));
      if (!result.errors) {
        window.scrollTo(0, 0);
        history.push(`/`);
      } else {
        return "Error, something went wrong";
      }
    }
  };

  //open modal for ability choices and confirmation
  const openModal = async (e) => {
    e.preventDefault();
    // first validate data before sending
    setModal(true);
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <LevelUpModal
        character={character}
        setModal={setModal}
        modal={modal}
      ></LevelUpModal>
      <div className="flex flex-col">
        <img
          className="h-auto w-48 mt-10 mx-2 border-2 border-black rounded-lg"
          src={character.imgURL}
          alt="character portrait"
        ></img>
        <div className="description w-48 mt-2 mx-2 h-full mb-20 border border-black rounded-lg bg-gray-100 overflow-auto">
          <div className="font-bold underline p-1">Explanation</div>
          <div className="text-xs p-1">{helpContents}</div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="topButtons top flex justify-between w-full">
          <button onClick={() => setModal(true)}>Level Up Button Coming Soon</button>
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
        <div className="characterSheetContainer w-full h-full flex justify-center mb-1 border-black border rounded-lg">
          {showCharacter && (
            <CharacterSheet
              character={character}
              setHelpContents={setHelpContents}
            ></CharacterSheet>
          )}
          {showInventory && (
            <InventorySheet
              character={character}
              setHelpContents={setHelpContents}
            ></InventorySheet>
          )}
          {showDescription && (
            <DescriptionSheet
              character={character}
              setHelpContents={setHelpContents}
            ></DescriptionSheet>
          )}
        </div>
        <div className="bottomButtons mb-10 top flex justify-end w-full">
          <button
            onClick={() => true}
            className="mx-2 my-1 bg-red-600 text-white p-1 rounded-lg"
          >
            Edit Character
          </button>
          <button
            onClick={() => handleDelete()}
            className="mx-2 my-1 bg-red-600 text-white p-1 rounded-lg"
          >
            Delete Character
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
