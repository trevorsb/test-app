import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';

const inputLocation = props => {
    const [lat, onChangeLat] = React.useState('');
    const [lng, onChangeLng] = React.useState('');


    return (
        <View>
            <TextInput
                style={{ height: 30, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 5, }}
                placeholder="Input Name"
            />
            <TextInput
                ref="latitude"
                style={{ height: 30, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 5, }}
                onChangeText={text => onChangeLat(text)}
                value={lat}
                placeholder="Input Latitude"

            />
            <TextInput
                ref="longitute"
                style={{ height: 30, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeLng(text)}
                value={lng}
                placeholder="Input Longitude"
            />
            <Button title="Go"/>
        </View>
    );
};

export default inputLocation;