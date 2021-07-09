import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { CustomTextInput } from './components/CustomTextInput';
import { colors } from '../../utils/colors';
import CustomText from '../../components/UI/CustomText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {CameraButton} from "./components/UploadButton"

export const addItemForm = (props) => {
    const [imageUri, setImageUri] = React.useState("");
    const [filename, setFilename] = React.useState("");
    const [type, setType] = React.useState("");
    const [uploadButton, setUploadButton] = React.useState(true);
    return(
        <View style={styles.container}>
            <CustomTextInput placeholder="Product Title" editable={true}></CustomTextInput>
            <View>
                <CameraButton
                imageUri={imageUri}
                setImageUri={setImageUri}
                setType={setType}
                setFilename={setFilename}
                setUploadButton={setUploadButton}
                />
                <View/>
            </View>
            <CustomTextInput placeholder="Category"></CustomTextInput>
            <CustomTextInput placeholder="Product Description" multiline={true} editable={true}></CustomTextInput>
            <CustomTextInput placeholder="Location" editable={true}></CustomTextInput>
            <CustomTextInput placeholder="Swap with" editable={true}></CustomTextInput>
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
    },

    imageView:{
     
    },

    imageContainer:{

    }

}   
);
