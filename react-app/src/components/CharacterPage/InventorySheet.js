import Header from "./Header";

const InventorySheet = ({
  character,
  inventory,
  setInventory,
  setHelpContents,
}) => {
  const inventoryHelper = (
    <div>
      The inventory is where all items your character holds are listed. If you
      need any help with what an item does, try using the search feature for
      equipment. This section is free form and you can put anything you like in
      here.
    </div>
  );

  return (
    <div
      className="descriptionSheet h-full bg-gray-100 max-w-characterSheet min-w-characterSheet w-full rounded-lg p-5"
      onMouseEnter={() => setHelpContents(inventoryHelper)}
    >
      <Header character={character}></Header>
      <textarea
        className="border border-black rounded-lg p-4 mt-2 w-full h-5/6 overflow-y-auto"
        value={inventory}
        onChange={(e) => setInventory(e.target.value)}
      ></textarea>
    </div>
  );
};

export default InventorySheet;
