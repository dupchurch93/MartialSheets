import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";

const LevelUpModal = ({ modal, characterClass, setModal, handleSubmit }) => {
  const hidden = modal ? "modal" : "hidden";

  const closeModal = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const classFeatures = useSelector((state) => state.features[characterClass])

  let featureChoices;
  if(classFeatures){
    featureChoices = classFeatures.filter((feature) => {
      return ((feature.source.split(":")[3]==="choice"))
    });
    console.log('inside if clas features true')
  } else {
    featureChoices = []
  }

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
            Please make a choice for the following class features...
          </div>
          {featureChoices.map((feature) => {
            return(
              <div key={feature.name}>{feature.name}</div>
            )
          })}
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
