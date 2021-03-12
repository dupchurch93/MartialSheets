import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteCharacterTagThunk } from "../../../store/character";

const TagComponent = ({ tag, charId }) => {
  const dispatch = useDispatch();

  const handleTagDelete = async () => {
    const res = await dispatch(deleteCharacterTagThunk(tag, charId))
    if(!res.errors){
      
    }
  };

  return (
    <div className="m-1 bg-gray-300 p-1 rounded-lg flex">
      <div className="mx-1 text-sm">{tag}</div>
      <button onClick={() => handleTagDelete()} className="rounded-lg">
        <TiDelete />
      </button>
    </div>
  );
};

export default TagComponent;
