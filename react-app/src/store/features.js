const LOAD_LEVEL1_FEATURES = "features/loadLevel1Features";

const loadLevel1Features = (features) => {
  return {
    action: LOAD_LEVEL1_FEATURES,
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
  // dispatch(loadLevel1Features(res.features));
  console.log(res);
};

const initialState = {};

const featureReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD_LEVEL1_FEATURES:
      action.payload.forEach((feature) => {
        newState[feature.source] = feature;
      });
    return newState
    default:
        return newState;
  }
};

export default featureReducer;
