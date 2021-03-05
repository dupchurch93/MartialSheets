import {Link} from 'react-router-dom'

const CharacterCard = ({character}) => {

    return(
        <>
        <Link to={`/characters/${character.id}`}>
        <div className="characterCard rounded-lg w-56 h-64 p-2 font-bold flex flex-col bg-gray-100 mx-4 my-2">
            <div>{character.name}: Level {character.level} {character.subclass} {character.class}</div>
        </div>
        </Link>
        </>
    )
}

export default CharacterCard
