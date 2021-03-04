const LOAD_CHARACTERS = 'session/loadCharacters';
const REMOVE_CHARACTERS = 'session/removeCharacters';

const loadCharacters = (characters) => {
    return {
        type: LOAD_CHARACTERS,
        payload: characters
    };
};

export const removeCharacters = () => {
    return {
        type: REMOVE_CHARACTERS,
    };
};

export const loadCharactersThunk = () => async (dispatch) => {
    const response = await fetch('/api/characters/',{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const characters = await response.json();
    //   console.log('----in character thunk----', characters.Characters)
      dispatch(loadCharacters(characters.Characters))
      return characters.Characters
}

const initialState = {list: null}

const characterReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_CHARACTERS:
            newState = Object.assign({}, state);
            const characterList = {}
            action.payload.forEach((character) => {
                characterList[character.id] = character
            })
            newState.list = characterList;
            return newState;
        case REMOVE_CHARACTERS:
            newState.Object.assign({}, state);
            newState.list = null
            return newState
        default:
            return state;
    }
};

export default characterReducer;
