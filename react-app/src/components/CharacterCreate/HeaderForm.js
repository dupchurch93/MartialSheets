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
  setClassProfs,
  setProfChoices,
  setHitpoints,
  setSpeed,
  setSampleFeatures,
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

  const sampleBarbFeatures = [
    {
      name: "Rage",
      description:
        "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren’t wearing heavy armor: You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can’t cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.",
    },
    {
      name: "Rage Count: 2",
      description:
        "Amount of times you can rage per long rest. Increases with level.",
    },
    {
      name: "Bonus Rage Damage: 2",
      description:
        "Extra damage gained on melee attack while raging. Increases with level.",
    },
  ];

  const sampleFighterFeatures = [
    {
      name: "Fighting Style",
      description: `You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

        Archery. You gain a +2 bonus to attack rolls you make with ranged weapons.

        Blind Fighting. You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.

        Defense. While you are wearing armor, you gain a +1 bonus to AC.

        Dueling. When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.

        Great Weapon Fighting. When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.

        Interception. When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.

        Protection. When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.

        Superior Technique. You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice.)
            You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.

        Thrown Weapon Fighting. You can draw a weapon that has the thrown property as part of the attack you make with the weapon.
            In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.

        Two-Weapon Fighting. When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.

        Unarmed Fighting. Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8.
            At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.
    `,
    },
    {
      name: "Second Wind",
      description: `You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.`,
    },
  ];
  const sampleMonkFeatures = [
    {
      name: "Unarmored Defense",
      description:
        "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
    },
    {
      name: "Martial Arts",
      description: `At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.

        You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:

            You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.
            You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.
            When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.

        Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in the Weapons section.`,
    },
  ];
  const sampleRogueFeatures = [
    {
      name: "Expertise",
      description: `At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

    At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit.`,
    },
    {
      name: "Sneak Attack",
      description: `Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.

        You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll. Increases with level.`,
    },
    {
      name: "Thieves' Cant",
      description: `During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.

        In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.`,
    },
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
    setBackground(e.target.value);
    setClassProfs([]);
    if (e.target.value === "Acolyte") {
      setProficiencies(["Religion", "Insight"]);
    } else if (e.target.value === "Charlatan") {
      setProficiencies(["Deception", "Sleight of Hand"]);
    } else if (e.target.value === "Criminal") {
      setProficiencies(["Deception", "Stealth"]);
    } else {
      setProficiencies(["Athletics", "Acrobatics"]);
    }
  };

  const handleSetRace = (e) => {
    setRace(e.target.value);
    if (
      e.target.value === "Dwarf" ||
      e.target.value === "Halfling" ||
      e.target.value === "Gnome"
    ) {
      setSpeed(25);
    } else {
      setSpeed(30);
    }
  };

  const handleSetClass = (e) => {
    setCharacterClass(e.target.value);
    if (e.target.value === "Barbarian") {
      setHitpoints(12 + Math.floor((attributes.con - 10) / 2));
      setProfChoices([
        "Athletics",
        "Intimidation",
        "Survival",
        "Animal Handling",
        "Perception",
        "Nature",
      ]);
      setSampleFeatures(sampleBarbFeatures);
    } else if (e.target.value === "Fighter") {
      setHitpoints(10 + Math.floor((attributes.con - 10) / 2));
      setProfChoices([
        "Athletics",
        "Intimidation",
        "Survival",
        "Animal Handling",
        "Perception",
        "Acrobatics",
        "History",
        "Insight",
      ]);
      setSampleFeatures(sampleFighterFeatures);
    } else if (e.target.value === "Rogue") {
      setHitpoints(8 + Math.floor((attributes.con - 10) / 2));
      setProfChoices([
        "Athletics",
        "Intimidation",
        "Acrobatics",
        "Insight",
        "Perception",
        "Investigation",
        "Performance",
        "Persuasion",
        "Deception",
        "Sleight of Hand",
      ]);
      setSampleFeatures(sampleRogueFeatures);
    } else {
      setHitpoints(8 + Math.floor((attributes.con - 10) / 2));
      setProfChoices([
        "Athletics",
        "Acrobatics",
        "Stealth",
        "Religion",
        "History",
      ]);
      setSampleFeatures(sampleMonkFeatures);
    }
  };

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
