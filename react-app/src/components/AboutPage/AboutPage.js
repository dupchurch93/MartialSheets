import form from "./formdemo.png";
import barb from "./barb.png";
const AboutPage = () => {
  return (
    <div className="w-full lg:w-2/3">
      <div className="bg-gray-100 rounded-2xl min-w-about">
        <div className="text-xl p-8">
        Martial Sheets is a quick and streamlined character creation tool
            for all martial classes in Dungeons and Dragons 5th Edition. Create
            and level up Barbarians, Fighters, Monks, and Rogues in one
            convinient location. From rolling for stats at level 1 until your
            character has reached the pinnacle of marital prowess at level 20,
            build your ultimate warrior here.
        </div>
        <div className="lg:flex min-w-about">
          <div className="p-4 lg:w-2/3 h-auto">
            <img src={form} alt="form"></img>
          </div>
          <div className="p-4 lg:flex-none flex justify-center lg:w-1/3 h-auto">
          <img src={barb} alt="barb"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
