import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCardComponent";
import FilterPanel from "./FilterPanel";

const SplashPageMain = () => {
  const characters = useSelector((state) => state.characters.list);
  const [filteredCharacters, setFilteredCharacters] = useState(
    Object.values(characters)
  );

  useEffect(() => {
    setFilteredCharacters(Object.values(characters));
  }, [characters]);

  return (
    <div className="pageContent w-full md:w-2/3">
      <div className="splashPageContainer md:grid md:grid-cols-splash">
        <FilterPanel
          setFilteredCharacters={setFilteredCharacters}
          characters={characters}
        >
          Filter Here
        </FilterPanel>
        <div className="charactersContainer">
          <div className="title text-center border-b-2 border-black font-bold text-xl">
            Characters
          </div>
          <div className="characterCards w-full flex justify-start flex-wrap">
            <Link to={`/character/create`}>
              <div className="characterCard rounded-lg w-56 h-64 p-2 font-bold flex flex-col bg-gray-100 mx-4 my-4">
                <div>Create New Character</div>
              </div>
            </Link>
            {filteredCharacters.length > 0 &&
              filteredCharacters.map((character) => {
                return (
                  <CharacterCard
                    key={character.id}
                    character={character}
                  ></CharacterCard>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPageMain;
