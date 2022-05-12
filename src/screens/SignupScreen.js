import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";


const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

useEffect (() => {
    tryLocalSignin();
    const token = AsyncStorage.getItem('token');
    if (token) {
        navigation.navigate('create');
    };    
}, []);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text>go to sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clearErrorMessage()}>
        <Text>clear error message</Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
