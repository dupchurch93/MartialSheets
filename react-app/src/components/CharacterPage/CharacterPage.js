import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CharacterSheet from "./CharacterSheet";
import InventorySheet from "./InventorySheet";
import DescriptionSheet from "./DescriptionSheet";
import { deleteCharacterThunk } from "../../store/character";
import LevelUpModal from "./LevelUpModal/LevelUpModal";
import SubclassModal from "./LevelUpModal/subclassModal";

const CharacterPage = () => {
  const { characterId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const character = useSelector((state) => state.characters.list[characterId]);
  const [showCharacter, setShowCharacter] = useState(true);
  const [showInventory, setShowInventory] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [helpContents, setHelpContents] = useState(
    "Extra information will be displayed here when mousing over different areas of the character sheet."
  );
  const [modal, setModal] = useState(false);
  const [subclassModal, setSubclassModal] = useState(false);
  const [characterSubclass, setCharacterSubclass] = useState(character.subclass || "");
  const [pageErrors, setPageErrors] = useState([]);

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

  if (!character) {
    return <div>Loading...</div>;
  }

  const handleCreate = (e) => {
    if (character.level + 1 === 3) {
      setSubclassModal(true);
      return;
    } else {
      setModal(true);
    }
  };

  return (
    <div className="flex justify-center">
      {subclassModal ? (
        <SubclassModal
          subclassModal={subclassModal}
          setModal={setModal}
          setSubclassModal={setSubclassModal}
          character={character}
          setCharacterSubclass={setCharacterSubclass}
        >
        </SubclassModal>
      ) : (
        <></>
      )}
      {modal ? (
        <LevelUpModal
          character={character}
          setModal={setModal}
          modal={modal}
          setPageErrors={setPageErrors}
          characterSubclass={characterSubclass}
          setCharacterSubclass={setCharacterSubclass}
        ></LevelUpModal>
      ) : (
        <></>
      )}
       {pageErrors.length > 0 && (
            <div className="absolute left-0 mx-10 w-64 bg-gray-100 rounded-lg px-2 border-black border">
              {pageErrors.map((error) => (
                <li className="ml-3" key={error}>
                  {error}
                </li>
              ))}
            </div>
          )}
      <div className="flex flex-col">
        <img
          className="h-auto w-48 mt-10 mx-2 border-2 border-black rounded-lg"
          src={character.imgURL}
          alt="character portrait"
        ></img>
        <div className="description w-48 mt-2 mx-2 h-full mb-20 border border-black rounded-lg bg-gray-100 overflow-auto">
          <div className="font-bold underline p-1 text-center">Explanation</div>
          <div className="text-xs p-1">{helpContents}</div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="topButtons top flex justify-between w-full">
          <button
            className="mx-2 my-1 bg-red-600 text-white p-1 rounded-lg font-bold"
            onClick={() => handleCreate()}
          >
            Level Up
          </button>
          <div className="rightButtons flex">
            <button
              onClick={() => showCharacterFunc()}
              className="mx-2 my-1 bg-red-600 font-bold text-white p-1 rounded-lg"
            >
              Character
            </button>
            <button
              onClick={() => showInventoryFunc()}
              className="mx-2 my-1 bg-red-600 font-bold text-white p-1 rounded-lg"
            >
              Inventory
            </button>
            <button
              onClick={() => showDescriptionFunc()}
              className="mx-2 my-1 bg-red-600 font-bold text-white p-1 rounded-lg"
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
            className="mx-2 my-1 bg-red-600 text-white p-1 rounded-lg font-bold"
          >
            Edit Character
          </button>
          <button
            onClick={() => handleDelete()}
            className="mx-2 my-1 bg-red-600 text-white p-1 rounded-lg font-bold"
          >
            Delete Character
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
