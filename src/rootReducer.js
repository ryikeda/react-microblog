import INITIAL_STATE from "./sampleDataRedux";

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
