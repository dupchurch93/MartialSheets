const SubclassChoice = () => {
  const subclassName = "Path of the Berserker";
  const subclassDescription = `For some barbarians, rage is a means to an end – that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.`;
  const subclassPreviewFeature = {
    name: "Frenzy",
    descriptipon: `Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.`,
  };
  return (
    <div className="border border-black rounded-lg p-2 m-6">
      <div className="font-bold text-center border-b mb-2 border-black">
        {subclassName}
      </div>
      <div className="mb-2 italic font-bold">{subclassDescription}</div>
      <div className="font-bold">
        Level 3 Feature:{" "}
        <span className=" text-myred">
          {subclassPreviewFeature.name}
        </span>
      </div>
      <div>
          {subclassPreviewFeature.descriptipon}
      </div>
    </div>
  );
};

export default SubclassChoice;
