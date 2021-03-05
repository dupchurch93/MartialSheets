import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CharacterPage = () => {
  const { characterId } = useParams();
  const character = useSelector((state) => state.characters.list[characterId]);

  const propertyStyling = "mx-1 my-1 p-1";

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="characterPageContainer w-full lg:w-1/2">
      <div className="characterSheet bg-gray-100 w-full lg:in-line-block rounded-lg p-5">
        <div className="header grid grid-cols-5 w-full grid-rows-1">
          <div
            className={`${propertyStyling} font-bold underline text-xl col-span-2`}
          >
            Name: {character.name}
          </div>
          <div className={`${propertyStyling} underline col-span-1`}>
            Level: {character.level}
          </div>
          <div className={`${propertyStyling} underline col-span-1`}>
            Class: {character.class}
          </div>
          <div className={`${propertyStyling} underline col-span-1`}>
            Subclass: {character.subclass}
          </div>
        </div>
        <div className={propertyStyling}>class: {character.class}</div>
        <div className={propertyStyling}>class: {character.class}</div>
        <div className={propertyStyling}>class: {character.class}</div>
        <div className={propertyStyling}>class: {character.class}</div>
        <div className={propertyStyling}>class: {character.class}</div>
      </div>
    </div>
  );
};

export default CharacterPage;
