const StatScoreComponent = ({ stat, value }) => {
  return (
      <div className="container border border-black m-2 p-2 md:w-36 rounded-lg">
        <div className="font-bold">{stat}: <span className="font-normal">{value}</span></div>
        <div>Roll Bonus: {Math.floor((value - 10) / 2)}</div>
      </div>
  );
};

export default StatScoreComponent;
