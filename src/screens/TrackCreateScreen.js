import React, {useEffect, useState} from "react";

import { View, StyleSheet, Text, Button } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-native";
import { requestForegroundPermissionsAsync } from "expo-location";

const TrackCreateScreen = ({navigation}) => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
    } catch(e) {
      setErr(e);
    }
  }

  useEffect (() => {
    startWatching();
  }, []);

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
