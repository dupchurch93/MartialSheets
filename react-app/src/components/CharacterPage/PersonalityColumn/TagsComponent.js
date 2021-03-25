import { useState } from "react";
import { useDispatch } from "react-redux";
import TagComponent from "./TagComponent";
import { addCharacterTagThunk } from "../../../store/character";

const TagsComponent = ({ tags, charId }) => {
  const dispatch = useDispatch();

  const [newTag, setNewTag] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(addCharacterTagThunk(newTag, charId))
    setNewTag("")
  }

  return (
    <div className="border border-black m-2 p-2 rounded-lg min-h-traits overflow-y-auto">
      <div className="font-bold underline">Character Tags</div>
      <div className="tagsContainer flex flex-wrap">
        {tags.map((tag) => {
          return (
            <TagComponent key={tag} charId={charId} tag={tag}></TagComponent>
          );
        })}
      </div>
      <form className="m-1 flex" onSubmit={handleSubmit}>
        <input
          className="border border-black rounded-lg px-1 w-24"
          type="text"
          name="addTag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        ></input>
        <button
          type="submit"
          className="mx-1 border border-black bg-gray-300 rounded-lg px-1 text-sm"
        >
          Add Tag
        </button>
      </form>
    </div>
  );
};

export default TagsComponent;
