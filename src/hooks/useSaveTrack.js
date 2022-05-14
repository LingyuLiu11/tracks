import React, { useState, useEffect, useContext } from "react";

import { Context as TrackContext } from "../context/TrackContext";

import { Context as LocationContext } from "../context/LocationContext";

import { Context as AuthContext } from "../context/AuthContext";

export default () => {
    const {createTracks } = useContext(TrackContext);
    const {state: {locations, name}, reset} = useContext(LocationContext);

    const saveTrack = async () => {
        createTracks(name, locations);
        reset();
    }

    return [saveTrack];
};
