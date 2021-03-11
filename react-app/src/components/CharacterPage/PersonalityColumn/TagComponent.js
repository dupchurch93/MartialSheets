import { TiDelete } from "react-icons/ti";

const TagComponent = ({ tag }) => {
  const handleTagDelete = () => {

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
