const StatScoreComponent = ({stat}) => {

  return (
    <div className="container border border-black my-2 mx-2 p-2 max-w-stat rounded-lg">
      <div className="font-bold">
        {stat}: <span className="font-normal"></span>
      </div>
      <div>Roll Bonus: {Math.floor(( - 10) / 2)}</div>
    </div>
  );
};

export default StatScoreComponent;
