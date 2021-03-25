import Header from "./Header";

const DescriptionSheet = ({
  character,
  description,
  setDescription,
  setHelpContents,
}) => {
  const descriptionHelper = (
    <div>
      The description page is for any extra information about your character.
      Describe what the character looks like, their background, what they had to
      eat last week and any other traits or events in their lives that are
      important.
    </div>
  );

  return (
    <div
      className="descriptionSheet h-full bg-gray-100 max-w-characterSheet min-w-characterSheet w-full rounded-lg p-5"
      onMouseEnter={() => setHelpContents(descriptionHelper)}
    >
      <Header character={character}></Header>
      <textarea
        className="border border-black rounded-lg p-4 mt-2 w-full h-5/6 overflow-y-auto"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
  );
};

export default DescriptionSheet;
