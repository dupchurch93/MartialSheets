const HeaderForm = ({
  name,
  background,
  characterClass,
  race,
  alignment,
  attributes,
  setName,
  setBackground,
  setCharacterClass,
  setRace,
  setAlignment,
  setHelpContents,
  setProficiencies,
  setProfChoices,
  setHitpoints,
  setSpeed
}) => {
  const classList = ["Barbarian", "Fighter", "Rogue", "Monk"];
  const raceList = [
    "Human",
    "Halfling",
    "Gnome",
    "Dragonborn",
    "Elf",
    "Dwarf",
    "Half-Elf",
    "Half-Orc",
    "Tiefling",
  ];
  const alignmentList = [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil",
  ];
  const backgroundList = [
    "Acolyte",
    "Charlatan",
    "Criminal",
    "Entertainer",
    "Folk Hero",
    "Guild Artisan",
    "Hermit",
    "Outlander",
    "Noble",
    "Sage",
    "Sailer",
    "Soldier",
    "Urchin",
  ];

  const alignmentHelp = (
    <div>
      A typical creature in the game world has an alignment, which broadly
      describes its moral and personal attitudes. Alignment is a combination of
      two factors: one identifies morality (good, evil, or neutral), and the
      other describes attitudes toward society and order (lawful, chaotic, or
      neutral). Thus, nine distinct alignments define the possible combinations.
    </div>
  );
  const classHelp = (
    <div>
      <div>
        A character’s class is the most important thing to consider when
        creating a character. Your character’s class determines their skills and
        abilities and, therefore, will dictate how they are played. Below are
        brief descriptions of each of the martial classes.
      </div>
      <div>
        <span className="font-bold underine">Barbarian </span> A primal warrior
        that relies on their rage to fuel their combat prowess.<br></br>
        Type of play: Tank, Melee Combat.
      </div>
      <div>
        <span className="font-bold underine">Fighter </span> Born and bred in
        battle, the Fighter is a master of combat.<br></br>
        Type of play: Tank, Melee Combat, Ranged Combat
      </div>
      <div>
        <span className="font-bold underine">Monk </span> A skilled martial
        artist, the Monk can manipulate their Ki to perform extraordinary feats.
        <br></br>
        Type of play: Evasive, Melee Damage, Support
      </div>
      <div>
        <span className="font-bold underine">Rogue </span> A stealthy lurker of
        the shadows, specializing in backstabbing and trickery.<br></br>
        Type of play: Stealth, Evasive, Melee Damage, Support, Skills
      </div>
    </div>
  );

  const raceHelp = (
    <div>
      <div>
        There are many different types of humanoids that your character can be
        in Dungeons and Dragons. Each with their own history, culture, as well
        as attribute bonuses and abilities. Below is a quick description of each
        race. Please use the search feature to fully view each race's details.
      </div>
      <div>
        <span className="font-bold underine">Human </span> The most numerous
        race on the planet. Humans are adept at mostly anything they choose from
        however don't have any specific area where they excel.
      </div>
      <div>
        <span className="font-bold underine">Dwarf </span> Stout, short and
        hardworking. Dwarves live long lives and typically have a strong sense
        of justice.
      </div>
      <div>
        <span className="font-bold underine">Elf </span> Elves are magical and
        gracious beings, as well as very close to being eternal. Typically
        favoring to listen to their hearts rather than written law.
      </div>
      <div>
        <span className="font-bold underine">Gnome </span> Gnomes are weird
        super positive beings. Great inventors, pranksters, and even better
        intellectuals.
      </div>
      <div>
        <span className="font-bold underine">Half-Elf </span> These beings
        combine the best parts of elves and humans, or so they say. Usually
        favor wandering as they don't belong to either of their parents' races.
      </div>
      <div>
        <span className="font-bold underine">Halflings </span> Halflings are
        isolated, cheerful people who love the commodity of their homes and
        communities.
      </div>
      <div>
        <span className="font-bold underine">Half-Orc </span> Half orcs have orc
        blood running through their veins. This makes them much stronger than
        normal people, as well as hardy.
      </div>
      <div>
        <span className="font-bold underine">Tiefling </span> These are beings
        of infernal lineage due to a pact that someone in the long past made
        with Asmodeus (lord of Hell).
      </div>
      <div>
        <span className="font-bold underine">Dragonborn </span> Descendants of
        dragons, these draconic humanoids live in clans who they value more than
        their life itself.
      </div>
    </div>
  );

  const backgroundHelp = (
    <div>
      Backgrounds provide a story on what your character did before becoming an
      adventurer. Along with your character's class, their background determines
      what types of skills they are proficient in and can be included in the
      story by your Dungeon Master. These can also be expanded upon in your
      character's description.
    </div>
  );

  const nameHelp = (
    <div>
      Your character's name. Your character can go by anything they please,
      however be careful with titles and such. Remember each adventurer starts
      at level 1!
    </div>
  );

  const handleSetBackground = (e) => {
    setBackground(e.target.value)
    if(e.target.value === "Acolyte"){
      setProficiencies("Religion,Insight");
    } else if(e.target.value === "Charlatan"){
      setProficiencies("Deception,Sleight of Hand");
    } else if(e.target.value === "Criminal"){
      setProficiencies("Deception,Stealth");
    } else {
      setProficiencies("Athletics,Acrobatics");
    }
  }

  const handleSetRace = (e) => {
    setRace(e.target.value)
    if(e.target.value ==="Dwarf" || e.target.value === "Halfling" || e.target.value === "Gnome"){
      setSpeed(25);
    } else {
      setSpeed(30);
    }
  }

  const handleSetClass = (e) => {
    setCharacterClass(e.target.value)
    if(e.target.value === "Barbarian"){
      setHitpoints(12 + Math.floor(((attributes.con) - 10)/2))
      setProfChoices(["Atheletics", "Intimidation", "Survival", "Animal Handling", "Perception", "Nature"])
    } else if(e.target.value === "Fighter"){
      setHitpoints(10 + Math.floor(((attributes.con) - 10)/2))
      setProfChoices(["Atheletics", "Intimidation", "Survival", "Animal Handling", "Perception", "Acrobatics", "History", "Insight"])
    } else if(e.target.value === "Rogue") {
      setHitpoints(8 + Math.floor(((attributes.con) - 10)/2))
      setProfChoices(["Atheletics", "Intimidation", "Acrobatics", "Insight", "Perception", "Investigation", "Performance", "Persuasion", "Deception", "Sleight of Hand"])
    } else {
      setHitpoints(8 + Math.floor(((attributes.con) - 10)/2))
      setProfChoices(["Atheletics", "Acrobatics", "Stealth", "Religion", "History"])
    }
  }

  return (
    <div className="header grid grid-cols-characterBody w-full grid-rows-1 space-x-2 ">
      <div className="mx-1 p-1 font-bold underline text-xl col-span-1 border-2 border-black rounded-lg p-2 w-full">
        <input
          type="text"
          name="name"
          placeholder="Character Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setHelpContents(nameHelp)}
        ></input>
      </div>
      <div className="col-span-3 grid grid-cols-3 grid-row-2 border-2 border-black rounded-lg m-1">
        <div className="mx-1 my-1 font-bold p-1 underline text-sm">
          Level: 1
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          <select
            value={characterClass}
            name="Class"
            onChange={(e) => handleSetClass(e)}
            onFocus={() => setHelpContents(classHelp)}
            className="w-36"
          >
            <option disabled value="Select Class" hidden>
              Select Class
            </option>
            {classList.map((charClass) => {
              return (
                <option key={charClass} value={charClass}>
                  {charClass}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          <select
            value={race}
            name="race"
            onChange={(e) => handleSetRace(e)}
            onFocus={() => setHelpContents(raceHelp)}
            className="w-36"
          >
            <option disabled value="Select Race" hidden>
              Select Race
            </option>
            {raceList.map((raceChoice) => {
              return (
                <option key={raceChoice} value={raceChoice}>
                  {raceChoice}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          <select
            value={alignment}
            name="alignment"
            onChange={(e) => setAlignment(e.target.value)}
            onFocus={() => setHelpContents(alignmentHelp)}
            className="w-36"
          >
            <option disabled value="Select Alignment" hidden>
              Select Alignment
            </option>
            {alignmentList.map((alignChoice) => {
              return (
                <option key={alignChoice} value={alignChoice}>
                  {alignChoice}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          <select
            value={background}
            name="background"
            onChange={(e) => handleSetBackground(e)}
            onFocus={() => setHelpContents(backgroundHelp)}
            className="w-36"
          >
            <option disabled value="Select Background" hidden>
              Select Background
            </option>
            {backgroundList.map((backgroundChoice) => {
              return (
                <option key={backgroundChoice} value={backgroundChoice}>
                  {backgroundChoice}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-1 my-1 p-1 font-bold underline text-sm">
          Subclass: None Yet
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
