const StatsHelp = () => {
  return (
    <div>
      <div>
        Attributes determine your characters abilities and play a part in almost
        everything they do. Below is a brief description of what each stat helps
        with.
      </div>
      <div className="mt-1">
        <span className="underline font-bold ">Strength:</span> Measures bodily
        power, athletic training, and the extent to which you can exert raw
        physical force. Helps with melee attacks, strength ranged attacks
        (javelines, throwing axes, etc.) and strength skills such as atheletics.
      </div>
      <div className="mt-1">
        <span className="underline font-bold ">Dexterity:</span> Measures
        agility, reflexes, and balance. Helps with ranged attacks, light weapon
        attacks and damage (daggers, rapiers, etc.), and anything skills that
        involve finesse or speed.
      </div>
      <div className="mt-1">
        <span className="underline font-bold ">Constituion:</span> Measures
        health, stamina, and vital force. Gives your character more hit points
        and makes them harder to take down.
      </div>
      <div className="mt-1">
        <span className="underline font-bold ">Intelligence:</span> Measures
        mental acuity, accuracy of recall, and the ability to reason. Helps with
        spells and skills that require memorization.
      </div>
      <div className="mt-1">
        <span className="underline font-bold ">Wisdom:</span> Reflects how
        attuned you are to the world around you and represents perceptiveness
        and intuition. Helps with spells and skills that require understanding
        the situation.
      </div>
      <div className="mt-1">
        <span className="underline font-bold ">Charisma:</span> Measures your
        ability to interact effectively with others. It includes such factors as
        confidence and eloquence, and it can represent a charming or commanding
        personality.
      </div>
    </div>
  );
};

export default StatsHelp;
