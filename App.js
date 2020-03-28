import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/fetchLocation';
import UsersMap from './components/UsersMap';
import InputLocation from './components/inputLocation';

export default class App extends React.Component {
  state = {
    userLocation: null
  }
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }
      });
      console.log(position)
    }, err => console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Input your name and Location</Text>
        <InputLocation></InputLocation>
        <UsersMap userLocation={this.state.userLocation}/>
        <FetchLocation onGetLocation={this.getUserLocationHandler}></FetchLocation>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
