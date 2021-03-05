import { useSelector } from "react-redux";

const FilterPanel = ({ setFilteredCharacters, characters }) => {
  const allTags = useSelector((state) => state.characters.tags);

  const filter = (tag) => {
    if (tag === "all") {
      setFilteredCharacters(Object.values(characters));
      return
    }
    const filtered = Object.values(characters).filter((character) => {
      return character.tags.includes(tag);
    });
    setFilteredCharacters(filtered);
  };

  const classes = ["Fighter", "Rogue", "Monk", "Barbarian"];
  const races = [
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

  const classTags = (
    <div>
      {allTags.map((tag) => {
        if (classes.includes(tag)) {
          return (
            <div className="mx-2" key={tag}>
              <button className="text-left w-full" onClick={() => filter(tag)}>
                {tag}
              </button>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
  const raceTags = (
    <div>
      {allTags.map((tag) => {
        if (races.includes(tag)) {
          return (
            <div className="mx-2" key={tag}>
              <button className="text-left w-full" onClick={() => filter(tag)}>
                {tag}
              </button>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
  const customTags = (
    <div>
      {allTags.map((tag) => {
        if (classes.includes(tag) || races.includes(tag)) {
          return null;
        } else {
          return (
            <div className="mx-2" key={tag}>
              <button className="text-left w-full" onClick={() => filter(tag)}>
                {tag}
              </button>
            </div>
          );
        }
      })}
    </div>
  );

  return (
    <div className="filterPanel sticky">
      <div className="font-bold mx-2">Filter By Tag</div>
      <div className="bg-gray-100 w-48 rounded-lg">
        <div className="font-bold mx-2 py-2">
          <button className="text-left w-full font-bold" onClick={() => filter("all")}>All</button>
        </div>
        <div className="font-bold mx-2" id="class-tags">
          Classes
          {classTags}
        </div>
        <div className="font-bold mx-2" id="race-tags">
          Races
          {raceTags}
        </div>
        <div className="font-bold mx-2" id="custom-tags">
          Custom
          {customTags}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
