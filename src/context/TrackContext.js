import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

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
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const response = await tracker.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: response.data });
};

const createTracks = (dispatch) => async (name, locations) => {
  await tracker.post("/tracks", { name, locations });
  // dispatch({ type: "change_name", payload: name });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTracks },
  []
);
