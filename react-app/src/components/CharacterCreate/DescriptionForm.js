
const DescriptionForm = ({ setHelpContents, setDescription, description }) => {
  const descriptionHelper = (
    <div>
      The description page is for any extra information about your character.
      Describe what the character looks like, their background, what they had to
      eat last week and any other traits or events in their lives that are
      important.
    </div>
  );

  return (
    <textarea
      name="inventory"
      placeholder="Character Description"
      value={description}
      className="w-full h-36 p-2 rounded-lg border border-black text-left "
      onFocus={() => setHelpContents(descriptionHelper)}
      onChange={(e) => setDescription(e.target.value)}
    ></textarea>
  );
};

export default DescriptionForm;
