const StatScoreComponent = ({stat}) => {
  const rolledScores = [1, 1, 1, 1].map((el) => {
    return Math.random() * (6 - 1) + 1;
  });
  rolledScores.sort();
  rolledScores.shift();

  const statScore = rolledScores[0] + rolledScores[1] + rolledScores[2];

  return (
    <div className="container border border-black my-2 mx-2 p-2 max-w-stat rounded-lg">
      <div className="font-bold">
        {stat}: <span className="font-normal">{statScore}</span>
      </div>
      <div>Roll Bonus: {Math.floor((statScore - 10) / 2)}</div>
    </div>
  );
};

export default StatScoreComponent;
