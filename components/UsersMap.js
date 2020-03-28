import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const usersMap = props => {
    let userLocationMarker = null;
    if (props.userLocation) {
        userLocationMarker = <MapView.Marker titel="My Location" ref="myLocatoin" coordinate={props.userLocation}/>;
    }
    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 39.2191,
                    longitude: -121.0611,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                region = {props.userLocation}>
                {userLocationMarker}
            </MapView>
            
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
        marginTop: 20,
    },
    map: {
        width: '100%',
        height: '100%',
    }
});

export default usersMap;
