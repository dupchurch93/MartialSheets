const SubclassChoice = ({ choice, setModal, setSubclassModal, setCharacterSubclass }) => {

  const pickSubclass = (e) => {
    setCharacterSubclass(e.target.value)
    setSubclassModal(false);
    setModal(true);
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="border border-black flex flex-col rounded-lg p-2 m-6 h-full overflow-y-auto">
        <div className="font-bold text-center border-b mb-2 border-black">
          {choice.name}
        </div>
        <div className="mb-2 italic font-bold">{choice.description}</div>
        <div className="font-bold">
          Level 3 Feature:{" "}
          <span className=" text-myred">{choice.sampleFeature.name}</span>
        </div>
        <div>{choice.sampleFeature.description}</div>
      </div>
      <button className="bg-myred rounded-lg font-bold text-white mx-16 mb-8 p-1 border border-black" onClick={(e) => pickSubclass(e)} value={choice.name}>Select Subclass</button>
    </div>
  );
};

export default SubclassChoice;
