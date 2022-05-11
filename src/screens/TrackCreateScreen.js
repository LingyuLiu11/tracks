import React from "react";

import { View, StyleSheet, Text, Button } from "react-native";

const TrackCreateScreen = ({navigation}) => {
  return (
      <>
    <View>
      <Text>Track create screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('user')
        }
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
