import React, {useContext} from "react";
import { View, StyleSheet, Text, Button, ActivityIndicator } from "react-native";
import MapView, {Polyline} from "react-native-maps";


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


  </MapView>);
};

const styles = StyleSheet.create({
    map: {
        height: 300,
        width: 300
    }
});

export default Map;
