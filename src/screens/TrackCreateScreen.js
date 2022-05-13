import React from "react";

import { View, StyleSheet, Text, Button } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-native";

const TrackCreateScreen = ({navigation}) => {
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
