const InventoryForm = ({ setHelpContents, setInventory, inventory }) => {
  const inventoryHelper = (
    <div>
      The inventory is where all items your character holds are listed. If you
      need any help with what an item does, try using the search feature for
      equipment. This section is free form and you can put anything you like in
      here.
    </div>
  );

  return (
    <textarea
      name="inventory"
      placeholder="Character Inventory"
      value={inventory}
      className="w-full h-36 p-2 rounded-lg border border-black text-left "
      onFocus={() => setHelpContents(inventoryHelper)}
      onChange={(e) => setInventory(e.target.value)}
    ></textarea>
  );
};

export default InventoryForm;
