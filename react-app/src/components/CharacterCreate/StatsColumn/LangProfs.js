const LangProfs = ({ languages, tools, setTools, setLanguages }) => {
  return (
    <div>
      <textarea
        className="border border-black m-2 p-2 w-10/12 rounded-lg flex flex-col"
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
        placeholder="Languages Known"
      ></textarea>
      <textarea
        className="border border-black m-2 p-2 w-10/12 rounded-lg flex flex-col"
        value={tools}
        onChange={(e) => setTools(e.target.value)}
        placeholder="Tools and other Proficiencies"
      ></textarea>
    </div>
  );
};

export default LangProfs;
