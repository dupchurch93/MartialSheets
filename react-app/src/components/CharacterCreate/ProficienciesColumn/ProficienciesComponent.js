const ProficienciesComponent = ({ profBonus, prof, statsParsed, charProfs }) => {
    let bonusToProf = 0;
    let charProfsArray = charProfs.split(",")
    // calculate bonus to proficiency roll
    let statBonus = Math.floor((statsParsed[prof.stat] - 10) / 2);
    // add prof bonus if character is proficient in that skill
    if (charProfsArray.includes(prof.name)) {
      bonusToProf = profBonus + statBonus;
    } else {
      bonusToProf = statBonus;
    }

    // render the bonus in the jsx
  return (
    <div className="flex justify-between border-b border-black">
      <div className="text-sm">{prof.name} ({prof.stat}): </div>
      <div className="font-bold">{bonusToProf}</div>
    </div>
  );
};

export default ProficienciesComponent;
