const LangProfs = ({ languages, tools }) => {
  return (
    <div>
      <div className="container border border-black m-2 p-2 w-10/12 rounded-lg flex flex-col">
        <div className="text-sm">Languages: {languages}</div>
      </div>
      <div className="container border border-black m-2 p-2 w-10/12 rounded-lg">
        <div className="text-sm">Tools: {tools}</div>
      </div>
    </div>
  );
};

export default LangProfs;
