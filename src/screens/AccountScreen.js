import React, {useContext} from "react";

import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const clear = async () => {
  try {
    // await AsyncStorage.removeItem("token");
    await AsyncStorage.clear();
    console.log('Done.')
  } catch(e) {
    // remove error
  }

  
  
}

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <View>
      <Text>account screen</Text>
      <Spacer>
      <Button title="Sign Out" onPress={clear}></Button>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
