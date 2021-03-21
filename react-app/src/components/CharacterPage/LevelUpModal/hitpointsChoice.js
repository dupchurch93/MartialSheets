import { useEffect, useState } from "react";

const HitPoints = ({ characterClass, con, hitpoints, setNewHitpoints }) => {
  const [hitpointIncrease, setHitpointsIncrease] = useState(5);

  useEffect(() => {
    if (characterClass === "Barbarian") {
      setHitpointsIncrease(7);
    } else if (characterClass === "Fighter") {
      setHitpointsIncrease(7);
    }
  }, [characterClass]);

  const pickHP = (e) => {
    e.preventDefault();
    setNewHitpoints(hitpoints + hitpointIncrease);
  };

  return (
    <div>
      <div className="font-bold">HP Bonus</div>
      <table className="border border-black p-2 rounded-lg table-auto text-sm">
        <thead>
          <tr>
            <th className="text-center mx-2 px-2">
              Average {characterClass} HP
            </th>
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
              {hitpoints + hitpointIncrease}
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={(e) => pickHP(e)}>Use Average</button>
    </div>
  );
};

export default HitPoints;
