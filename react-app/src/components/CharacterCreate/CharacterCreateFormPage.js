import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CharacterForm from "./CharacterForm";
import InventoryForm from "./InventorySheet";
import DescriptionForm from "./DescriptionForm";

const CharacterPage = () => {
  const [helpContents, setHelpContents] = useState("");

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="charImageContainer h-48 w-48 mt-10 mx-2 border-2 border-black rounded-lg ">
          file input here
        </div>
        <div className="description w-48 mt-2 mx-2 h-full mb-12 border border-black rounded-lg bg-gray-100 overflow-auto">
          <div className="font-bold underline p-1">Explanation</div>
          <div className="text-xs p-1">{helpContents}</div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="characterSheetContainer w-full w-full flex justify-center mb-10">
          <CharacterForm setHelpContents={setHelpContents}></CharacterForm>
          {/* <InventoryForm setHelpContents={setHelpContents}></InventoryForm> */}
          <DescriptionForm setHelpContents={setHelpContents}></DescriptionForm>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
