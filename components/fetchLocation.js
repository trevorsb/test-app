import React from 'react';
import { Button } from 'react-native';

const fetchLocation = props => {
    return (
        <Button title="Go to my location" onPress={props.onGetLocation}/>
    );
};

export default fetchLocation;