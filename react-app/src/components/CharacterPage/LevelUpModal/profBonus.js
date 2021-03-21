const ProfBonus = ({ level }) => {
  return (
    <div className="border border-black p-2 rounded-lg flex justify-between">
      <div>Proficiency Bonus at level {level}:</div>
      <div className="font-bold">
        +{Math.floor((level - 1) / 4) + 2}
      </div>
    </div>
  );
};

export default ProfBonus;
