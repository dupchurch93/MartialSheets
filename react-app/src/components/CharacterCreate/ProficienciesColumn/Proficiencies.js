import SavingThrows from "./SavingThrows";
import ProficienciesComponent from "./ProficienciesComponent";

const Proficiencies = ({ characterClass, proficiencies, attributes, level, setHelpContents }) => {

  if (!attributes.str) {
    return <div>Loading...</div>;
  }



  const profColumnHelper = (
    <div>
      <div>
        <span className="font-bold underline">Saving Throws: </span> Certain
        attacks or abilities require characters to resist them. These are saving
        throws. The bonuses here are tied to your proficiency (based on class)
        and your character's attributes.
      </div>
      <div>
        <span className="font-bold underline">Proficiencies: </span> What types
        of skills your character excels at. The skills you are proficient with
        are based on your class and background while receiving bonus from their
        associated stat as well.<br></br><br></br>
        <div>Bolded skills are the ones your character is proficient in.</div>
      </div>
    </div>
  );

  const allProfs = [
    { name: "Acrobatics", stat: "dex" },
    { name: "Animal Handling", stat: "wis" },
    { name: "Arcana", stat: "int" },
    { name: "Athletics", stat: "str" },
    { name: "Deception", stat: "cha" },
    { name: "History", stat: "int" },
    { name: "Insight", stat: "wis" },
    { name: "Intimidation", stat: "cha" },
    { name: "Investigation", stat: "int" },
    { name: "Medicine", stat: "wis" },
    { name: "Nature", stat: "int" },
    { name: "Perception", stat: "wis" },
    { name: "Performance", stat: "cha" },
    { name: "Religion", stat: "int" },
    { name: "Sleight of Hand", stat: "dex" },
    { name: "Stealth", stat: "dex" },
    { name: "Survival", stat: "wis" },
  ];

  const profBonus = Math.ceil(1 + level / 4);

  // proficiency choices and saving throws are determined by class and backgrounds so we define them here based on character choices
  let profChoices;
  let profSavingThrows;
  if (characterClass === "Barbarian") {
    profSavingThrows = ["Constitution", "Strength"];
    profChoices = ["Atheletics", "Intimidation", "Survival", "Animal Handling", "Perception", "Nature"]
  } else if (characterClass === "Rogue") {
    profSavingThrows = ["Dexterity", "Intelligence"];
    profChoices = ["Atheletics", "Intimidation", "Acrobatics", "Insight", "Perception", "Investigation", "Performance", "Persuasion", "Deception", "Sleight of Hand"]
  } else if (characterClass === "Fighter") {
    profSavingThrows = ["Strength", "Constitution"];
    profChoices = ["Atheletics", "Intimidation", "Survival", "Animal Handling", "Perception", "Acrobatics", "History", "Insight"]
  } else {
    profSavingThrows = ["Strength", "Dexterity"];
    profChoices = ["Atheletics", "Acrobatics", "Stealth", "Religion", "History"]
  }


  const statsMap = [
    { name: "Strength", value: attributes.str },
    { name: "Dexterity", value: attributes.dex },
    { name: "Constitution", value: attributes.con },
    { name: "Intelligence", value: attributes.int },
    { name: "Wisdom", value: attributes.wis },
    { name: "Charisma", value: attributes.cha },
  ];

  return (
    <div className="columnContainer border-r border-black px-1" onMouseEnter={() => setHelpContents(profColumnHelper)}>
      <div className="font-bold border border-black p-0.5 rounded-lg flex justify-around mx-4 my-2">
        <div className="m-1 p-1 text-sm">Proficiency Bonus: </div>
        <div className="m-1 p-1">{profBonus}</div>
      </div>
      <div className="font-bold underline text-center">Saving Throws</div>
      <div className="savingThrows border border-black m-2 p-2 rounded-lg">
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
      <div className="font-bold underline text-center">Skill Proficiencies</div>
      <div className="proficiencies border border-black m-2 p-2  rounded-lg">
        {allProfs.map((prof) => {
          return (
            <ProficienciesComponent
              key={prof.name}
              charProfs={proficiencies}
              profBonus={profBonus}
              prof={prof}
              attributes={attributes}
            ></ProficienciesComponent>
          );
        })}
      </div>
    </div>
  );
};

export default Proficiencies;
