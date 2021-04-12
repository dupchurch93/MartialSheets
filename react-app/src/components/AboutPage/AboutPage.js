import barb from "./barb.png";
const AboutPage = () => {
  return (
    <div className="w-full md:w-2/3">
      <div className="bg-gray-100 rounded-2xl flex min-w-about h-full mb-20">
        <h1 className="text-xl m-8">
          Martial Sheets is a quick and streamlined character creation tool for
          all martial classes in Dungeons and Dragons 5th Edition. Create and
          level up Barbarians, Fighters, Monks, and Rogues in one convinient
          location. From rolling for stats at level 1 until your character has
          reached the pinnacle of marital prowess at level 20, build your
          ultimate warrior here.
        </h1>
        <div className="">
          <img src={barb} alt="barb"></img>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
