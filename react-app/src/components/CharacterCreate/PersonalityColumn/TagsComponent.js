const TagsComponent = ({ setHelpContents, setTags, tags }) => {
  const tagsHelp = (
    <div>
      Add any custom tags you would want for your character. Class and race are
      automatically added on character creation. These could be tags such as the
      campaign(s) they are involved in or if they are retired.
    </div>
  );
  return (
    <div className="border border-black m-2 p-2 min-h-trait rounded-lg">
      <div className="font-bold underline">Custom Tags</div>
      <textarea
        className="h-22 w-full"
        name="tags"
        value={tags}
        placeholder="Format: Tag, Tag, multiple word tag"
        onFocus={() => setHelpContents(tagsHelp)}
        onChange={(e) => setTags(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TagsComponent;
