import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StatsComponent from "./StatsComponent";
import Proficiencies from "./ProficienciesColumn/Proficiencies";
import Personality from "./Personality";
import Features from "./Features";


const CharacterPage = () => {
  const { characterId } = useParams();
  const character = useSelector((state) => state.characters.list[characterId]);

  const propertyStyling = "mx-1 my-1 p-1";

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="characterPageContainer w-full min-w-characterSheet md:w-1/2">
      <div className="characterSheet bg-gray-100 w-full lg:in-line-block rounded-lg p-5">
        <div className="header grid grid-cols-characterBody w-full grid-rows-1 border-2 border-black rounded-lg m-1">
          <div
            className={`${propertyStyling} font-bold underline text-xl col-span-1`}
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
        <div className="header grid grid-cols-characterBody w-full space-x-2">
          <StatsComponent character={character}></StatsComponent>
          <Proficiencies charClass={character.class} proficiencies={character.proficiencies} stats={character.attributes} level={character.level}></Proficiencies>
          <Features character={character}></Features>
          <Personality character={character}></Personality>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
