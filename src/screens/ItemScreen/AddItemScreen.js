import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { CustomTextInput } from './components/CustomTextInput';
import { colors } from '../../utils/colors';
import CustomText from '../../components/UI/CustomText'

export const addItemForm = (props) => {

    return(
        <View style={styles.container}>
            <CustomTextInput placeholder="Product Title"></CustomTextInput>
            <View><Text>Image Button here: Images next to the button</Text></View>
            <CustomTextInput placeholder="Category"></CustomTextInput>
            <CustomTextInput placeholder="Product Description"></CustomTextInput>
            <CustomTextInput placeholder="Location"></CustomTextInput>
            <CustomTextInput placeholder="Swap with"></CustomTextInput>
            <TouchableOpacity style={styles.postButton} onPress={()=>{alert("Saved")}}>            
                <CustomText style={{color:colors.white,}}>Post</CustomText>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

    postButton: {
    width: '40%',
    borderRadius: 30,
    height:40,
    backgroundColor:colors.black,
    color: colors.white,
    alignSelf: 'center',
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
    },

    container:{
        width: '100%',
        alignContent:'center', 
    }
}   
);
