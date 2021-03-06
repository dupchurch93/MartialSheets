import SavingThrows from "./SavingThrows";
import ProficienciesComponent from "./ProficienciesComponent";

const Proficiencies = ({ charClass, proficiencies, stats, level }) => {
  const allProfs = [
    {name: "Acrobatics", stat: "dex"},
    {name: "Animal Handling", stat: "wis"},
    {name: "Arcana", stat: "int"},
    {name: "Athletics", stat: "str"},
    {name: "Deception", stat: "cha"},
    {name: "History", stat: "int"},
    {name: "Insight", stat: "wis"},
    {name: "Intimidation", stat: "cha"},
    {name: "Investigation", stat: "int"},
    {name: "Medicine", stat: "wis"},
    {name: "Nature", stat: "int"},
    {name: "Perception", stat: "wis"},
    {name: "Performance", stat: "cha"},
    {name: "Religion", stat: "int"},
    {name: "Sleight of Hand", stat: "dex"},
    {name: "Stealth", stat: "dex"},
    {name: "Survival", stat: "wis"}
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
    <div className="columnContainer border-r border-black">
            <div className="font-bold border border-black p2 rounded-lg flex justify-around mx-4 my-2">
        <div className="m-1 p-1 text-sm">Proficiency Bonus: </div>
        <div className="m-1 p-1">{profBonus}</div>
      </div>
      <div className="font-bold underline">Saving Throws</div>
      <div className="savingThrows border border-black m-2 p-2 lg:w-36 rounded-lg">
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
      <div className="font-bold underline">Skill Proficiencies</div>
      <div className="proficiencies border border-black m-2 p-2 lg:w-36 rounded-lg">
        {allProfs.map((prof) => {
          return(
            <ProficienciesComponent key={prof.name} charProfs={proficiencies} profBonus={profBonus} prof={prof} statsParsed={statsParsed}></ProficienciesComponent>
          )
        })}
      </div>
    </div>
  );
};

export default Proficiencies;
