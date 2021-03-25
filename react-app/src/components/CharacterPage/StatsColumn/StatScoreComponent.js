const StatScoreComponent = ({ stat, value }) => {
  return (
      <div className="container border border-black my-2 mx-2 pl-1 pr-2 py-1 w-32 max-w-stat rounded-lg">
        <div className="font-bold flex justify-between">{stat}: <span className="font-normal">{" "}{value}</span></div>
        <div className="flex justify-between">Roll Bonus: <span>{Math.floor((value - 10) / 2)}</span></div>
      </div>
  );
};

export default StatScoreComponent;
