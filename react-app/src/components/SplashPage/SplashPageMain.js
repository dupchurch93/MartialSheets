import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as characterActions from "../../store/character";

const SplashPageMain = () => {
  const characters = useSelector((state) => state.characters?.list);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(characterActions.loadCharactersThunk());
      // console.log("---in use effect while loading main page", Object.values(chars));
    })();
  }, [dispatch]);

  if (!characters) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="pageContent">
      <div>
        <h1>We are logged in</h1>
        {console.log("in jsx right here----", Object.values(characters))}
        {characters &&
          Object.values(characters).map((character) => {
            return <div key={character.id}>{character.name}</div>;
          })}
      </div>
    </div>
  );
};

export default SplashPageMain;
