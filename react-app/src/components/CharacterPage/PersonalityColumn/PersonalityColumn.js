import PersonalityComponent from "./PersonalityComponent";
import HPSpeedAC from "./HPSpeedAC"

const PersonalityColumn = ({ character }) => {
  const traitsArray = Object.entries(JSON.parse(character.personality));
  const statsParsed = JSON.parse(character.attributes);

  return (
    <div className="columnContainer border-r border-black px-1">
      <div className="p-2 md:flex flex-col">
        <HPSpeedAC
          dex={statsParsed.dex}
          hitpoints={character.hitpoints}
          speed={character.speed}
        ></HPSpeedAC>
      </div>
      {traitsArray.map((trait) => {
        return (
          <PersonalityComponent
            key={trait[0]}
            name={trait[0]}
            description={trait[1]}
          ></PersonalityComponent>
        );
      })}
    </div>
  );
};

export default PersonalityColumn;
