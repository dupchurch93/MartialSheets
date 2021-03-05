import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as characterActions from "../../store/character";
import CharacterCard from "./CharacterCardComponent";

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
    <div className="pageContent w-2/3">
      <div className="splashPageContainer grid sm:grid-cols-2 lg:grid-cols-splash">
        <div className="filterPanel">Filter Here</div>
        <div className="characterCards flex justify-around">
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
