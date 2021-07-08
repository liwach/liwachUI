import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export const addItemForm = (props) => {

    return(
        <View>
            <Text>Hello there</Text>
            <Button onPress={()=>{alert("Saved")}}>Hi</Button>
        </View>
    )


};