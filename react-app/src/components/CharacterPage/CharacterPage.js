import { useParams } from "react-router-dom";

const CharacterPage = () => {
    const {characterId} = useParams()
    return(
        <div>
           CharacterId: {characterId}
        </div>
    )
};

export default CharacterPage;
