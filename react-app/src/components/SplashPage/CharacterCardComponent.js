const CharacterCard = ({character}) => {

    return(
        <div className="characterCard rounded-lg w-44 h-56 p-2 font-bold flex flex-col bg-gray-100">
            <div>{character.name}</div>
            <div>Level {character.level} {character.race} {character.subclass} {character.class}</div>
        </div>
    )
}

export default CharacterCard
