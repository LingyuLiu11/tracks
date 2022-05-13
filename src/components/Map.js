import React, {useContext} from "react";
import { View, StyleSheet, Text, Button, ActivityIndicator } from "react-native";
import MapView, {Polyline, Circle} from "react-native-maps";


import { Context as LocationContext } from "../context/LocationContext";


const Map = () => {
    const {state: {currentLocation}} = useContext(LocationContext);
    if (!currentLocation) {
        return <ActivityIndicator size = "large" style = {{marginTop: 200}}/>;
    }
    let points = [];
    
  return (<MapView style={styles.map} 
  initialRegion={{
      ...currentLocation.coords,
      longitudeDelta: 0.01,
      latitudeDelta: 0.01,

  }}
  region = {{
    ...currentLocation.coords,
    longitudeDelta: 0.01,
    latitudeDelta: 0.01,
  }}
  
  >
      <Polyline coordinates={points}></Polyline>
        <Circle center = {currentLocation.coords} 
            radius={60}
            strokeColor="rgba(158, 158, 255, 1.0)"
            fillColor="rgba(158, 158, 255, 0.3)"
        >

        </Circle>

  </MapView>);
};

const styles = StyleSheet.create({
    map: {
        height: 300,
        width: 300
    }
});

export default Map;
