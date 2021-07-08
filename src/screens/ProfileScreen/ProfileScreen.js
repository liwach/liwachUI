import React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export const ProfileScreen = () => {
    return(
        <View>
            <Text>This is Profile</Text>
            <Button onPress={()=>{alert("Posts")}}>Posts</Button>
            <Button onPress={()=>{alert("Exchange")}}>Exchange</Button>
            <Button onPress={()=>{alert("Requests")}}>Requests</Button>
        </View>
    );
};