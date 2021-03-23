import { TiDelete } from "react-icons/ti";
import SubclassChoice from "./subclassChoice"

const SubclassModal = ({ character, subclassModal, setSubclassModal, setModal }) => {
  const hidden = subclassModal ? "modal" : "hidden";

  const closeModal = (e) => {
    e.preventDefault();
    setSubclassModal(false);
  };

  return (
    <div
      className={`fixed m-0 ${hidden} w-full h-full bg-gray-900 bg-opacity-50 left-0 top-0 flex justify-center`}
    >
      <form
        onSubmit={() => null}
        className="modalInfo bg-white border-2 border-black rounded-lg min-w-characterSheet w-1/2 my-16 flex items-center flex-col overflow-y-scroll"
      >
        <div className="w-full flex justify-end p-2">
          <button onClick={(e) => closeModal(e)} className="rounded-lg">
            <TiDelete />
          </button>
        </div>
        <div className="font-bold underline text-lg m-4">
          Choose a subclass for {character.name}.
        </div>
        <div>These are specializations that allow your character to grow more powerful.</div>
        <div>Here are the subclasses available for {character.class}s.</div>
        <div className="flex mx-4">
          <SubclassChoice></SubclassChoice>
          <SubclassChoice></SubclassChoice>
        </div>
      </form>
    </div>
  );
};

export default SubclassModal;
