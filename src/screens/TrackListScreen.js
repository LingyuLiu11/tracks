import React, { useContext, useState } from "react";

import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from "react-native";

import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";
import { NativeAppEventEmitter } from "react-native";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  const [ls, setls] = useState([]);

  const setdata = () => {
    fetchTracks();
    setls(state);
    // console.log(state);
  }
  
  
  return (
    <View>
      
      <Text>Track list screen</Text>
      <Button
        title="fetch"
        onPress={() => setdata()}
      ></Button>
      <FlatList date = {ls} 
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return <TouchableOpacity>
            <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
          </TouchableOpacity>
        }}
      >

      </FlatList>
      

    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
