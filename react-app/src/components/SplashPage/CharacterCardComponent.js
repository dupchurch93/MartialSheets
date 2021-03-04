import {Link} from 'react-router-dom'

const CharacterCard = ({character}) => {

    return(
        <>
        <Link to={`/characters/${character.id}`}>
        <div className="characterCard rounded-lg w-44 h-56 p-2 font-bold flex flex-col bg-gray-100">
            <div>{character.name} - {character.race}</div>
            <div>Level {character.level} {character.subclass} {character.class}</div>
        </div>
        </Link>
        </>
    )
}

export default CharacterCard
