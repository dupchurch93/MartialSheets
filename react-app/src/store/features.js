const LOAD_LEVEL1_FEATURES = "features/loadLevel1Features";

const loadLevel1Features = (features) => {
  return {
    type: LOAD_LEVEL1_FEATURES,
    payload: features,
  };
};

export const loadLevel1FeatuersThunk = () => async (dispatch) => {
  const response = await fetch("/api/abilities/level1", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  if (!res.errors) {
    dispatch(loadLevel1Features(res.features));
  }
};

// // thunk to grab level up features, moved to async fetch request on use effect, no need to store in store
// export const loadLevelUpFeaturesThunk = (charId, level) => async (dispatch) => {
//   const response = await fetch(`/api/abilities/${charId}/${level}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const res = await response.json();
//   return res;
// }

const initialState = {};

const featureReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD_LEVEL1_FEATURES:
      const classList = ["Rogue", "Fighter", "Barbarian", "Monk"];
      classList.forEach((characterClass) => {
        newState[characterClass] = [];
      });
      action.payload.forEach((feature) => {
        newState[getClassFromFeature(feature)].push(feature);
      });
      return newState;
    default:
      return newState;
  }
};

export default featureReducer;


const getClassFromFeature = (feature) => {
  const splitSource = feature.source.split(":");
  const characterClass = splitSource[1];
  return characterClass;
}
