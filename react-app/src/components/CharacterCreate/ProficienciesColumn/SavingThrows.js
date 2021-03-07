const SavingThrows = ({ name, stat, profSavingThrows, profBonus }) => {
  let bonusToThrow = 0;
  let statBonus = Math.floor((stat - 10) / 2);
  if (profSavingThrows.includes(name)) {
    bonusToThrow = profBonus + statBonus;
  } else {
    bonusToThrow = statBonus;
  }

  return (
    <div className="flex justify-between border-b border-black">
      <div className="font-bold">{name}: </div>
      <div className="font-bold">{bonusToThrow}</div>
    </div>
  );
};
export default SavingThrows;
