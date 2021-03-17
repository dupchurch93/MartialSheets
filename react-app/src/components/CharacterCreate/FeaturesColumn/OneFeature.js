import { useState } from "react";

const OneFeature = ({ feature }) => {
  const [showDescription, setShowDescription] = useState(false);

  const changeShow = (e) => {
    e.preventDefault()
    setShowDescription(() => !showDescription);
  };

  const description = (
    <div className="max-h-desc text-sm overflow-auto">
      {feature.description}
    </div>
  );

  return (
    <div key={feature.name} className="oneFeatureContainer px-2 mb-2 max-w-modal">
      <button
        className="rounded-lg w-full"
        onClick={(e) => changeShow(e)}
      >
        <div className="font-bold text-myred">
          {feature.name}
        </div>
      </button>
      {showDescription && description}
    </div>
  );
};
export default OneFeature;
