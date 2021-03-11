import TagComponent from "./TagComponent";

const TagsComponent = ({ tags, charId }) => {
  return (
    <div className="border border-black m-2 p-2 rounded-lg h-32 overflow-y-auto">
      <div className="font-bold underline">Character Tags</div>
      <div className="tagsContainer flex flex-wrap">
        {tags.map((tag) => {
          return <TagComponent key={tag} tag={tag}></TagComponent>;
        })}
      </div>
    </div>
  );
};

export default TagsComponent;
