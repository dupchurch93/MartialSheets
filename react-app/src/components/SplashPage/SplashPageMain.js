import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as characterActions from "../../store/character";
import CharacterCard from "./CharacterCardComponent";
import FilterPanel from "./FilterPanel"

const SplashPageMain = () => {
  const characters = useSelector((state) => state.characters.list);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(characterActions.loadCharactersThunk());
    })();
  }, [dispatch]);

  if (!characters) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="pageContent w-full md:w-2/3">
      <div className="splashPageContainer md:grid md:grid-cols-splash">
        <FilterPanel>Filter Here</FilterPanel>
        <div className="characterCards w-full flex justify-start flex-wrap">
          {characters &&
            Object.values(characters).map((character) => {
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
