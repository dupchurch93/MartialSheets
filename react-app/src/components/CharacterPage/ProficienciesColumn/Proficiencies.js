import SavingThrows from "./SavingThrows";

const Proficiencies = ({ charClass, proficiencies, stats, level }) => {
  const allProfs = [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Religion",
    "Sleight of Hand",
    "Stealth",
    "Survival",
  ];
  const statsParsed = JSON.parse(stats);
  const profBonus = Math.ceil(1 + level / 4);

  let profSavingThrows;
  if (charClass === "Barbarian") {
    profSavingThrows = ["Constitution", "Strength"];
  } else if (charClass === "Rogue") {
    profSavingThrows = ["Dexterity", "Intelligence"];
  } else if (charClass === "Fighter") {
    profSavingThrows = ["Strength", "Constitution"];
  } else {
    profSavingThrows = ["Strength", "Dexterity"];
  }

  const statsMap = [
    { name: "Strength", value: statsParsed.str },
    { name: "Dexterity", value: statsParsed.dex },
    { name: "Constitution", value: statsParsed.con },
    { name: "Intelligence", value: statsParsed.int },
    { name: "Wisdom", value: statsParsed.wis },
    { name: "Charisma", value: statsParsed.cha },
  ];

  return (
    <div>
      <div className="font-bold border border-black m-2 p2 rounded-lg">
        <div className="m-1 p-1">Proficiency Bonus: {profBonus}</div>
      </div>
      <div className="font-bold underline">Saving Throws</div>
      <div className="savingThrows border border-black m-2 p-2 w-36 rounded-lg">
        {statsMap.map((stat) => {
          return (
            <SavingThrows
              key={stat.name}
              name={stat.name}
              stat={stat.value}
              profSavingThrows={profSavingThrows}
              profBonus={profBonus}
            ></SavingThrows>
          );
        })}
      </div>
      <div className="font-bold underline">Saving Throws</div>
      <div>{proficiencies}</div>
    </div>
  );
};

export default Proficiencies;
