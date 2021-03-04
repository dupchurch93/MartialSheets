const LOAD_CHARACTERS = 'session/loadCharacters';

const loadCharacters = (characters) => {
    return {
        type: LOAD_CHARACTERS,
        payload: characters
    };
};
export const loadCharactersThunk = () => async (dispatch) => {
    const response = await fetch('/api/characters/',{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const characters = await response.json();
      dispatch(loadCharacters(characters.Characters))
      return characters.Characters
}

const initialState = null

const characterReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_CHARACTERS:
            newState = Object.assign({}, state);
            newState.characters = action.payload;
            return newState;
        default:
            return state;
    }
};

export default characterReducer;
