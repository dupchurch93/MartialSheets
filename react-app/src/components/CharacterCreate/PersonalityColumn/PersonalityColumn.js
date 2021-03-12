import PersonalityComponent from "./PersonalityComponent";
import HPSpeedAC from "./HPSpeedAC";
import TagsComponent from "./TagsComponent";

const PersonalityColumn = ({
  setHelpContents,
  attributes,
  speed,
  hitpoints,
  bonds,
  flaws,
  ideals,
  traits,
  tags,
  setTraits,
  setBonds,
  setFlaws,
  setIdeals,
  setTags
}) => {
  const traitsArray = [
    ["Traits", traits, setTraits],
    ["Ideals", ideals, setIdeals],
    ["Bonds", bonds, setBonds],
    ["Flaws", flaws, setFlaws],
  ];

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
          dex={attributes.dex}
          hitpoints={hitpoints}
          speed={speed}
        ></HPSpeedAC>
      </div>
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
      <TagsComponent tags={tags} setTags={setTags} setHelpContents={setHelpContents}></TagsComponent>
    </div>
  );
};

export default PersonalityColumn;
