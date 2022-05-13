import '../_mockLocation';
import React, {useEffect, useState, useContext} from "react";

import { View, StyleSheet, Text, Button } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-native";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';




const TrackCreateScreen = ({navigation}) => {
  const [isFocoused, setIsFocoused] = useState(true);

  const {addLocation} = useContext(LocationContext);

  const [err] = useLocation(isFocoused, addLocation);
  
  return (
      <SafeAreaView>
    <View>
      <Text>Track create screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('user')
        }
      />
      <Button
        title="Go to List"
        onPress={() =>
          navigation.navigate('List')
        }
      />
      <Button
        title="Go to detail"
        onPress={() =>
          navigation.navigate('detail')
        }
      />
    </View>
    <Map></Map>
    {err? <Text>please enable location services</Text> : null}

    <Button
        title="stop tracking"
        onPress={() =>
          setIsFocoused(!isFocoused)
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
