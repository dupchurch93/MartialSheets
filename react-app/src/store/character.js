const LOAD_CHARACTERS = "character/loadCharacters";
const REMOVE_CHARACTERS = "character/removeCharacters";
const ADD_CHARACTER = "character/addCharacter";
const DELETE_CHARACTER = "character/deleteCharacter";
const DELETE_CHARACTER_TAG = "character/deleteCharacterTag";
const ADD_CHARACTER_TAG = "character/addCharacterTag";
const LEVEL_UP_CHARACTER = "character/levelUpCharacter";

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

const deleteCharacter = (charId) => {
  return {
    type: DELETE_CHARACTER,
    payload: charId,
  };
};

const deleteCharacterTag = (tag, char) => {
  return {
    type: DELETE_CHARACTER_TAG,
    payload: { tag, char: char },
  };
};

const addCharacterTag = (tag, char) => {
  return {
    type: ADD_CHARACTER_TAG,
    payload: {tag, char}
  }
}

const levelUpCharacter = (char) => {
  return {
    type: LEVEL_UP_CHARACTER,
    payload: char
  }

}

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
    body: character,
  });
  const newChar = await response.json();
  if (!newChar.errors) {
    dispatch(addCharacter(newChar));
  }
  return newChar;
};

export const deleteCharacterThunk = (charId) => async (dispatch) => {
  const response = await fetch("/api/characters/delete", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
    body: charId,
  });
  const res = await response.json();
  if (!res.errors) {
    dispatch(deleteCharacter(charId));
  }
  return res;
};

export const deleteCharacterTagThunk = (tag, charId) => async (dispatch) => {
  const response = await fetch("/api/characters/tag", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
    body: JSON.stringify({
      charId: charId,
      tag,
    }),
  });
  const char = await response.json();
  if (!char.errors) {
    dispatch(deleteCharacterTag(tag, char));
  }
  return char;
};

export const addCharacterTagThunk = (tag, charId) => async (dispatch) => {
  const response = await fetch("/api/characters/tag", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      charId: charId,
      tag,
    }),
  });
  const char = await response.json();
  if(!char.errors){
    dispatch(addCharacterTag(tag, char))
  }
  return char;
};

export const levelUpCharacterThunk = (charId, hitpoints, features, level) => async (dispatch) => {
  const response = await fetch("/api/characters/levelUp", {
    method: "PATCH",
    body: JSON.stringify({charId, hitpoints, features, level}),
  });
  const updatedCharacter = await response.json();
  if(!updatedCharacter.errors){
    dispatch(levelUpCharacter(updatedCharacter))
  }
  return updatedCharacter
}

// reducer and initial state
const initialState = { list: [], tags: [] };

const characterReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  const tags = new Set(newState.tags);
  switch (action.type) {
    case LOAD_CHARACTERS:
      const characterList = {};
      action.payload.forEach((character) => {
        characterList[character.id] = character;
        character.tags.forEach((tag) => {
          tags.add(tag);
        });
      });
      newState.list = characterList;
      newState.tags = [...tags];
      return newState;
    case REMOVE_CHARACTERS:
      newState = initialState;
      return newState;
    case ADD_CHARACTER:
      // add character to the store
      newState.list[action.payload.id] = action.payload;
      // turn old tag array into a set (to prevent tags from being added twice)
      // add any new tags
      action.payload.tags.forEach((tag) => {
        tags.add(tag);
      });
      newState.tags = [...tags];
      return newState;
    case DELETE_CHARACTER:
      // delete the character from the store
      delete newState.list[Number(action.payload)];
      // loop through remaining characters to remake tag list,
      // as the tag may have been the last instance and we don't want
      // to display tags that have no characters to the user
      newState.tags = getTags(Object.values(newState.list));
      return newState;
    case DELETE_CHARACTER_TAG:
      newState.list[action.payload.char.id] = action.payload.char;
      newState.tags = getTags(Object.values(newState.list));
      return newState;
    case ADD_CHARACTER_TAG:
      newState.list[action.payload.char.id] = action.payload.char;
      tags.add(action.payload.tag)
      newState.tags = [...tags]
      return newState;
    case LEVEL_UP_CHARACTER:
      newState.list[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default characterReducer;

// helper function to loop through characters and grab all tags
const getTags = (chars) => {
  const tags = new Set();
  chars.forEach((character) => {
    character.tags.forEach((tag) => {
      tags.add(tag);
    });
  });
  return [...tags];
};
