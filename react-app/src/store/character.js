const LOAD_CHARACTERS = "character/loadCharacters";
const REMOVE_CHARACTERS = "character/removeCharacters";
const ADD_CHARACTER = "character/addCharacter";

const loadCharacters = (characters) => {
  return {
    type: LOAD_CHARACTERS,
    payload: characters,
  };
};

export const removeCharacters = () => {
  return {
    type: REMOVE_CHARACTERS,
  };
};

const addCharacter = (character) => {
  return {
    type: ADD_CHARACTER,
    payload: character,
  };
};

export const loadCharactersThunk = () => async (dispatch) => {
  const response = await fetch("/api/characters/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const characters = await response.json();
  dispatch(loadCharacters(characters.Characters));
  return characters.Characters;
};

export const addCharacterThunk = (character) => async (dispatch) => {
  const response = await fetch("/api/characters/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(character),
  });
  const newChar = await response.json();
  //   if (!newChar.errors) {
  //     dispatch(addCharacter(newChar));
  //   }
  return newChar;
};

const initialState = { list: [], tags: [] };

const characterReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_CHARACTERS:
      newState = Object.assign({}, state);
      const characterList = {};
      const tags = new Set();
      action.payload.forEach((character) => {
        characterList[character.id] = character;
        character.tags.forEach((tag) => {
          tags.add(tag);
        });
      });
      newState.list = characterList;
      newState.tags = Array.from(tags);
      return newState;
    case REMOVE_CHARACTERS:
      newState = Object.assign({}, state);
      newState = initialState;
      return newState;
    case ADD_CHARACTER:
      newState.Object.assign({}, state);
      newState.list[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default characterReducer;
