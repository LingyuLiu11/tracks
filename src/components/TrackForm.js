import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

import { Context as LocationContext } from "../context/LocationContext";

import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        ></Input>
        <Spacer>
        {recording ? (
          <Button title="stop recording" onPress={stopRecording}></Button>
        ) : (
          <Button title="start recording" onPress={startRecording}></Button>
        )}
        </Spacer>
        <Spacer>
        {
            !recording && locations.length? <Button title="save recording" onPress={saveTrack}></Button>
            : null
        }
        </Spacer>
      </Spacer>
    </>
  );
};

export default TrackForm;
