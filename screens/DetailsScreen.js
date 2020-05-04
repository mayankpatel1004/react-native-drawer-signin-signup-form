import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="Go to detail screen... again" onPress={() => navigation.push('Details')} />
            <Button title="Go to home screen" onPress={() => navigation.navigate('Home')} />
            <Button title="Go to Back" onPress={() => navigation.goBack()} />
            <Button title="Go to first screen" onPress={() => navigation.popToTop()} />
            <Button title="Go to Profile screen" onPress={() => navigation.navigate('Profile')} />
            <Button title="Go to Explore screen" onPress={() => navigation.navigate('Explore')} />
        </View>
    );
};
export default DetailsScreen;