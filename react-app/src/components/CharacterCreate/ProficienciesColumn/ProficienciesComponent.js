const ProficienciesComponent = ({ profBonus, prof, attributes, charProfs }) => {
    let bonusToProf = 0;
    let charProfsArray = charProfs.split(",")
    // calculate bonus to proficiency roll
    let statBonus = Math.floor((attributes[prof.stat] - 10) / 2);
    // add prof bonus if character is proficient in that skill
    let profClasses;
    if (charProfsArray.includes(prof.name)) {
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
