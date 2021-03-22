import { useEffect, useState } from "react";

const HitPoints = ({ characterClass, con, hitpoints, setNewHitpoints }) => {
  let hitDie = 8;
  let averageHP = 5;
  if (characterClass === "Barbarian") {
    hitDie = 12;
    averageHP = 7;
  } else if (characterClass === "Fighter") {
    hitDie = 10;
    averageHP = 6;
  }

  const [hitpointIncrease, setHitpointsIncrease] = useState(averageHP);

  const pickHP = (e) => {
    e.preventDefault();
    setNewHitpoints(hitpoints + hitpointIncrease);
  };

  const pickAverage = (e) => {
    e.preventDefault();
    setHitpointsIncrease(averageHP);
    setNewHitpoints(hitpoints + hitpointIncrease + Math.floor((con - 10) / 2));
  };
  const pickRoll = (e) => {
    e.preventDefault();
    setHitpointsIncrease(20);
    setNewHitpoints(hitpoints + hitpointIncrease + Math.floor((con - 10) / 2));
  };

  return (
    <div>
      <div className="font-bold text-center">
        HP Bonus:{" "}
        <span className="font-normal">Choose the average or roll for HP</span>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="w-16 text-sm m-2 h-16 border border-black rounded-lg bg-myred text-white font-bold"
          onClick={(e) => pickAverage(e)}
        >
          Use Average: {averageHP}
        </button>
        <div className="font-bold mx-4">OR</div>
        <button
          className="w-16 text-sm m-2 h-16 border border-black rounded-lg bg-myred text-white font-bold"
          onClick={(e) => pickRoll(e)}
        >
          Roll HP
        </button>
      </div>
      <div className="border border-black rounded-lg ">
        <table className="table-auto text-sm">
          <thead>
            <tr>
              <th className="text-center mx-2 px-2">HP Gained</th>
              <th className="text-center mx-2 px-2">Constitution Modifier</th>
              <th className="text-center mx-2 px-2">Previous HP Total</th>
              <th className="text-center mx-2 px-2">New HP Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center mx-2 px-2">{hitpointIncrease}</td>
              <td className="text-center mx-2 px-2">
                {Math.floor((con - 10) / 2)}
              </td>
              <td className="text-center mx-2 px-2">{hitpoints}</td>
              <td className="text-center mx-2 px-2">
                {hitpoints + hitpointIncrease +Math.floor((con - 10) / 2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HitPoints;
