const HeaderForm = ({
  setName,
  setBackground,
  setCharacterClass,
  characterClass,
  setRace,
  setAlignment
}) => {
  const classList = ["Barbarian", "Fighter", "Rogue", "Monk"];
  const raceList = [
    "Human",
    "Halfing",
    "Gnome",
    "Dragonborn",
    "Elf",
    "Dwarf",
    "Half-Elf",
    "Half-Orc",
    "Tiefling",
  ];
  const alignmentList = [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil",
  ]
  const backgroundList = [
    "Acolyte",
    "Charlatan",
    "Criminal",
    "Entertainer",
    "Folk Hero",
    "Guild Artisan",
    "Hermit",
    "Outlander",
    "Noble",
    "Sage",
    "Sailer",
    "Soldier",
    "Urchin"
  ]

  return (
    <div className="header grid grid-cols-characterBody w-full grid-rows-1 space-x-2 ">
      <div className="mx-1 p-1 font-bold underline text-xl col-span-1 border-2 border-black rounded-lg p-2 w-full">
        <input type="text" name="name" placeholder="Charactaer Name">
        </input>
      </div>
      <div className="col-span-3 grid grid-cols-3 grid-row-2 border-2 border-black rounded-lg m-1">
        <div className="mx-1 my-1 font-bold p-1 underline text-sm">
          Level: 1
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          <select
            value={characterClass}
            name="Class"
            onChange={(e) => setCharacterClass(e.target.value)}
          >
            {classList.map((charClass) => {
              return (
                <option key={charClass} value={charClass}>
                  {charClass}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
        <select
            value="Race"
            name="race"
            onChange={(e) => setRace(e.target.value)}
          >
            {raceList.map((raceChoice) => {
              return (
                <option key={raceChoice} value={raceChoice}>
                  {raceChoice}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
        <select
            value="Alignment"
            name="alignment"
            onChange={(e) => setAlignment(e.target.value)}
          >
            {alignmentList.map((alignChoice) => {
              return (
                <option key={alignChoice} value={alignChoice}>
                  {alignChoice}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
        <select
            value="Background"
            name="background"
            onChange={(e) => setBackground(e.target.value)}
          >
            {backgroundList.map((backgroundChoice) => {
              return (
                <option key={backgroundChoice} value={backgroundChoice}>
                  {backgroundChoice}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          Subclass: This will be a choice at level 2 or level 3.
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
