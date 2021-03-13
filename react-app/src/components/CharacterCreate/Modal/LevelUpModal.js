import { TiDelete } from "react-icons/ti";

const LevelUpModal = ({ modal, characterClass, setModal, handleSubmit }) => {
  const hidden = modal ? "modal" : "hidden";

  const closeModal = (e) => {
    e.preventDefault();
    setModal(false);
  };

  return (
    <div
      className={`fixed m-0 ${hidden} w-full h-full bg-gray-900 bg-opacity-20 top-0 flex justify-center`}
    >
      <div className="bg-white border-2 border-black rounded-lg min-w-characterSheet my-16 flex items-center flex-col">
        <div className="w-full flex justify-end p-2">
          <button onClick={(e) => closeModal(e)} className="rounded-lg">
            <TiDelete />
          </button>
        </div>
          <div className="font-bold underline text-lg m-4">
            Your {characterClass} begins their journey.
          </div>
          <div>
            Here are the features and abilites your character starts off with.
          </div>
          <div>Feature form here choosing abilities</div>
          <div>
            Finally a submit button that actually creates the character or
            submits the changes
          </div>
          <button onClick={handleSubmit} type="submit">Finalize Character</button>
      </div>
    </div>
  );
};

export default LevelUpModal;
