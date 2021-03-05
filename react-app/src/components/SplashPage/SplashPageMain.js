import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as characterActions from "../../store/character";
import CharacterCard from "./CharacterCardComponent";
import FilterPanel from "./FilterPanel";

const SplashPageMain = () => {
  const characters = useSelector((state) => state.characters.list);
  const [filteredCharacters, setFilteredCharacters] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const chars = await dispatch(characterActions.loadCharactersThunk());
      setFilteredCharacters(Object.values(chars));
    })();
  }, [dispatch]);

  if (!filteredCharacters) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="pageContent w-full md:w-2/3">
      <div className="splashPageContainer md:grid md:grid-cols-splash">
        <FilterPanel setFilteredCharacters={setFilteredCharacters} characters={characters}>Filter Here</FilterPanel>
        <div className="characterCards w-full flex justify-start flex-wrap">
          {filteredCharacters.map((character) => {
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
  );
};

export default SplashPageMain;
