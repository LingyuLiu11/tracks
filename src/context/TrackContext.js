import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };

    case "change_name":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => (name) => {
  dispatch({ type: "change_name", payload: name });
};

const createTracks = (dispatch) => (name) => {
    dispatch({ type: "change_name", payload: name });
  };




export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTracks },
  []
);