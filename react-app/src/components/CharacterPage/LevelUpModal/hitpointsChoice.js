import { useEffect, useState } from "react";

const HitPoints = ({ characterClass, con }) => {
  const [hitpointIncrease, setHitpointsIncrease] = useState(5);

  useEffect(() => {
    if(characterClass === "Barbarian"){
        setHitpointsIncrease(7)
    } else if(characterClass === "Fighter"){
        setHitpointsIncrease(7)
    }
  }, [characterClass]);

  return (
    <div className="border border-black p-2 rounded-lg flex justify-between">
      <div>Hit Point Increase:</div>
      <div className="font-bold">{hitpointIncrease}(Average HP for {characterClass}) + {Math.floor((con-10)/2)}(Constitution Modifier)</div>
    </div>
  );
};

export default HitPoints;
