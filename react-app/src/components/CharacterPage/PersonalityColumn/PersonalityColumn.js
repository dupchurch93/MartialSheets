import PersonalityComponent from "./PersonalityComponent";
import HPSpeedAC from "./HPSpeedAC";

const PersonalityColumn = ({ character, setHelpContents }) => {
  const traitsArray = [
    ["Traits", character.traits],
    ["Ideals", character.ideals],
    ["Bonds", character.bonds],
    ["Flaws", character.flaws],
  ];
  const statsParsed = JSON.parse(character.attributes);

  const personalityHelper = (
    <div>
      <div>
        <span className="font-bold underline">Hit Points: </span>How much health
        your character has and how much damage they can take before they go
        down.
      </div>
      <div>
        <span className="font-bold underline">Base AC: </span> How hard your
        character is to hit (before armor). Dexterity bonus increases this along
        with some class/race features.
      </div>
      <div>
        <span className="font-bold underline">Speed: </span> How far your
        character can move in a single turn.
      </div>
    </div>
  );

  return (
    <div
      className="columnContainer border-r border-black px-1"
      onMouseEnter={() => setHelpContents(personalityHelper)}
    >
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
