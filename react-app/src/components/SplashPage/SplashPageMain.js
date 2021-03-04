import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as characterActions from "../../store/character";

const SplashPageMain = () => {
  const characters = useSelector((state) => state.characters)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterActions.loadCharactersThunk())
  }, [dispatch]);

  if(!characters){
    return <h1>Loading...</h1>
  }

  return (
    <div className="pageContent">
      <h1>We are logged in</h1>
      {characters.len > 0 &&
      characters.map((character) => {
        return(
          <div>{character.name}</div>
        )
      })}
    </div>
  );
};

export default SplashPageMain;
