import Header from "./Header";

const InventorySheet = ({ character, setHelpContents }) => {
  const inventoryArray = character.inventory.split(",");
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
      <div className="border border-black rounded-lg p-4 mt-2">
        {inventoryArray.map((el) => {
          return (
            <li className="mx-4" key={el}>
              {el}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default InventorySheet;
