import Header from "./Header";
const InventorySheet = ({ character }) => {
  const inventoryArray = character.inventory.split(",");
  return (
    <div className="descriptionSheet h-full bg-gray-100 max-w-characterSheet min-w-characterSheet w-full rounded-lg p-5">
      <Header character={character}></Header>
      <div className="border border-black rounded-lg p-4 mt-2">
        {inventoryArray.map((el) => {
          return <li className="mx-4"key={el}>{el}</li>;
        })}
      </div>
    </div>
  );
};

export default InventorySheet;
