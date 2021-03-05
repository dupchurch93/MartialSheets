import { useEffect } from "react";
import { useSelector } from "react-redux";

const FilterPanel = ({setFilteredCharacters, characters}) => {
  const allTags = useSelector((state) => state.characters.tags);

  const filter = (tag) => {
    const filtered = Object.values(characters).filter((character) => {
        return characters.tags.includes(tag)
    });
    setFilteredCharacters = filtered;
  }

    const classTags = (
        <div></div>
    )
    const raceTags = (
        <div></div>
    )
    const customTags =(
        <div></div>
    )
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
    allTags.forEach((tag) => {
      if (races.includes(tag)) {
        const newRaceEl = document.createElement("button");
        newRaceEl.innerText = tag;
        newRaceEl.classList.add("font-normal", "mx-2");
        raceTagsEl.appendChild(newRaceEl);
      } else if (classes.includes(tag)) {
        const newClassEl = document.createElement("button");
        newClassEl.innerText = tag;
        newClassEl.classList.add("font-normal", "mx-2");
        classTagsEl.appendChild(newClassEl);
      } else {
        const customTagEl = document.createElement("button");
        customTagEl.innerText = tag;
        customTagEl.classList.add("font-normal", "mx-2");
        customTagsEl.appendChild(customTagEl);
      }
    });

  return (
    <div className="filterPanel sticky">
      <div className="font-bold mx-2">Filter By Tag</div>
      <div className="bg-gray-100 w-44">
        <div className="font-bold" id="class-tags">
          Classes
        </div>
        <div className="font-bold" id="race-tags">
          Races
        </div>
        <div className="font-bold" id="custom-tags">
          Custom
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
