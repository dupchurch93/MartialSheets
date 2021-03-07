
const DescriptionForm = ({ setHelpContents }) => {
  const descriptionHelper = (
    <div>
      The description page is for any extra information about your character.
      Describe what the character looks like, their background, what they had to
      eat last week and any other traits or events in their lives that are
      important.
    </div>
  );

  return (
    <input
      type="text"
      name="description"
      placeholder="Character Description"
      onFocus={() => setHelpContents(descriptionHelper)}
    ></input>
  );
};

export default DescriptionForm;
