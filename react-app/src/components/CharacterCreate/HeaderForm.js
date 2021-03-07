const HeaderForm = ({ character }) => {
  return (
    <div className="header grid grid-cols-characterBody w-full grid-rows-1 space-x-2 ">
      <div className="mx-1 p-1 font-bold underline text-xl col-span-1 border-2 border-black rounded-lg p-2 w-full">
        {character.name}
      </div>
      <div className="col-span-3 grid grid-cols-3 grid-row-2 border-2 border-black rounded-lg m-1">
        <div className="mx-1 my-1 font-bold p-1 underline text-sm">
          Level {character.level}
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          Class: {character.class}
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          Race: {character.race}
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          Alignment: {character.alignment}
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          Background: {character.background}
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          Subclass: {character.subclass}
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
