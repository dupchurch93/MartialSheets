import ProfCheckbox from "./ProfCheckbox";

const ClassProficiencyChoice = ({
  proficiencies,
  classProfs,
  setClassProfs,
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
            ></ProfCheckbox>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default ClassProficiencyChoice;
