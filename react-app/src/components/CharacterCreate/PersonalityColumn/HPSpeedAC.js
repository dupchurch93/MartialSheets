const HPSpeedAC = ({ dex, speed, hitpoints }) => {
  return (
    <div className="infoFeaturesColumn border border-black p-2 justify-around rounded-lg 3xl:flex">
      <div className="border border-black p-1 m-1 rounded-lg font-sm flex flex-shrink flex-col justify-around">
        <div className="font-bold text-center">Hit Points:</div>
        <div className="text-center"> {hitpoints}</div>
      </div>
      <div className="border border-black p-1 m-1 rounded-lg font-sm flex flex-shrink flex-col justify-around">
        <div className="font-bold text-center">Base AC:</div>
        <div className="text-center">  {8 + Math.floor((dex - 10) / 2)}</div>
      </div>
      <div className="border border-black p-1 m-1 rounded-lg font-sm flex flex-shrink flex-col justify-around">
        <div className="font-bold text-center">Speed:</div>
        <div className="text-center"> {speed}</div>
      </div>
    </div>
  );
};

export default HPSpeedAC;
