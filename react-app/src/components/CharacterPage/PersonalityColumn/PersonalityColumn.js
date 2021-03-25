import PersonalityComponent from "../../CharacterCreate/PersonalityColumn/PersonalityComponent";
import HPSpeedAC from "./HPSpeedAC";
import TagsComponent from "./TagsComponent";

const PersonalityColumn = ({ character, setHelpContents, flaws, setFlaws, bonds, setBonds, ideals, setIdeals, traits, setTraits }) => {
  const traitsArray = [
    ["Traits", traits, setTraits],
    ["Ideals", ideals, setIdeals],
    ["Bonds", bonds, setBonds],
    ["Flaws", flaws, setFlaws],
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
      <form>
        {traitsArray.map((trait) => {
          return (
            <PersonalityComponent
              key={trait[0]}
              name={trait[0]}
              value={trait[1]}
              setter={trait[2]}
            ></PersonalityComponent>
          );
        })}
      </form>
      <TagsComponent
        tags={character.tags}
        charId={character.id}
      ></TagsComponent>
    </div>
  );
};

export default PersonalityColumn;
