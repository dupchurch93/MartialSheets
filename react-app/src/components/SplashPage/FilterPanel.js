import { useSelector } from 'react-redux'

const FilterPanel = () => {
  const allTags = useSelector((state) => state.characters.tags)

  return (
    <div className="filterPanel sticky">
      <div className="font-bold ">Filter By Tag</div>
      <div className="bg-gray-100 w-44">Filter Panel Here</div>
    </div>
  );
};

export default FilterPanel;
