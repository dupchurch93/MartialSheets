const ProficienciesComponent = ({ profBonus, prof, attributes, proficiencies, classProfs }) => {
    let bonusToProf = 0;
    // calculate bonus to proficiency roll
    let statBonus = Math.floor((attributes[prof.stat] - 10) / 2);
    // add prof bonus if character is proficient in that skill
    let profClasses;
    if (proficiencies.includes(prof.name) || classProfs.includes(prof.name)) {
      bonusToProf = profBonus + statBonus;
      profClasses = "text-sm font-bold"
    } else {
      bonusToProf = statBonus;
      profClasses = "text-sm"
    }
    // render the bonus in the jsx
  return (
    <div className="flex justify-between border-b border-black">
      <div className={profClasses} id={prof.name}>{prof.name} ({prof.stat}): </div>
      <div className="font-bold">{bonusToProf}</div>
    </div>
  );
};

export default ProficienciesComponent;
