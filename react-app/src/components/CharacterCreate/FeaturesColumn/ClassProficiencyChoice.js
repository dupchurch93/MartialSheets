import ProfCheckbox from "./ProfCheckbox";

const ClassProficiencyChoice = ({
  proficiencies,
  classProfs,
  setClassProfs,
  characterClass,
  profChoices,
}) => {

  return (
    <div>
      {profChoices.map((profChoice) => {
        if (!proficiencies.includes(profChoice)) {
          return (
            <ProfCheckbox
              key={profChoice}
              profChoice={profChoice}
              classProfs={classProfs}
              setClassProfs={setClassProfs}
              characterClass={characterClass}
            ></ProfCheckbox>
          );
        }
      })}
    </div>
  );
};

export default ClassProficiencyChoice;
