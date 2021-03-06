const Header = ({character}) => {
    return(
        <div className="header grid grid-cols-characterBody w-full grid-rows-1 border-2 border-black rounded-lg m-1">
        <div
          className="mx-1 p-1 font-bold underline text-xl col-span-1"
        >
          Name: {character.name}
        </div>
        <div className="mx-1 my-1 p-1 underline col-span-1">
          Level: {character.level}
        </div>
        <div className="mx-1 my-1 p-1 underline col-span-1">
          Class: {character.class}
        </div>
        <div className="mx-1 my-1 p-1 underline col-span-1">
          Subclass: {character.subclass}
        </div>
      </div>
    )
}

export default Header;
