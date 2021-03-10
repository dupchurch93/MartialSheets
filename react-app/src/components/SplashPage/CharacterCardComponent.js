import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <>
      <Link to={`/characters/${character.id}`}>
          <div className="characterCard rounded-lg w-56 h-64 p-2 font-bold bg-gray-100 m-4">
            <div className="h-10 w-full">
              {character.name}: Level {character.level} {character.subclass}{" "}
              {character.class}
            </div>
            <div className="w-full h-52 flex justify-center items-center p-1">
                <img src={character.imgURL} className="w-auto h-48 object-fill rounded-2xl p-2" alt="character"></img>
            </div>
          </div>
      </Link>
    </>
  );
};

export default CharacterCard;
