import Header from "./HeaderForm";

const InventorySheet = ({ setHelpContents }) => {
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
      onMouseOver={() => setHelpContents(inventoryHelper)}
    >
    </div>
  );
};

export default InventorySheet;
