import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export const editItemForm = (props) => {
    return(
        <View>
            
            <Button onPress={()=>{alert("Edited")}}>Hi</Button>
        </View>
    );

};