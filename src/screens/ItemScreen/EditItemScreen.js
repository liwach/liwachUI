import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export const editItemForm = (props) => {
    return(
        <View>
            <Text>Hello there</Text>
            <Button onPress={()=>{props.navigation.navigate("Add Item")}}>Hi</Button>
        </View>
    );

};