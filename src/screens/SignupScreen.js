import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm';


const SignupScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      
      <AuthForm
        headerText="Sign Up for Tracker"
        
        submitButtonText="Sign Up"
        
      />
      
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
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;

