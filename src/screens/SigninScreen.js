import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import AuthForm from "../components/AuthForm";
import { Context } from "../context/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  const token = AsyncStorage.getItem("token");
  return (
    <View style={styles.container}>
      {token ? (
        <View>
          <Text>logged in</Text>
          {/* <Text>{token}</Text> */}
        </View>
      ) : (
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sign In"
        />
      )}
      <TouchableOpacity onPress={() => clearErrorMessage()}>
        <Text>clear error message</Text>
      </TouchableOpacity>
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;
