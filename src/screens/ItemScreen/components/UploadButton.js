import * as React from 'react';
import { Button } from 'react-native-paper';
import{
View,
Text,
Image,
TouchableOpacity,
StyleSheet,
ActionSheetIOS
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../../utils/colors';
import { useActionSheet } from "@expo/react-native-action-sheet";
import { _pickImage } from "../../../utils/tools";
import { ActionSheetAndroid } from 'react-native-cross-actionsheet'
import { launchCamera } from 'react-native-image-picker';

export const CameraButton = (
    user,
    imageUri,
    setImageUri,
    setFilename,
    setType,
    setUploadButton,
) => {
    //const { showActionSheetWithOptions } = useActionSheet();
    const options = {
        title: 'Load Photo',
        customButtons: [
          { name: 'button_id_1', title: 'CustomButton 1' },
          { name: 'button_id_2', title: 'CustomButton 2' }
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    const onPressHandler = () =>{
       
        launchCamera(options, (response) => {
              if (response.error) {
                console.log('LaunchCamera Error: ', response.error);
              }
              else {
                console.log("Success");
              }
            });
        }
    return(
        <View>
             <TouchableOpacity style={styles.cameraContainer}  onPress={onPressHandler}>
            <FontAwesome name="camera" size={15} color="white" />
        </TouchableOpacity>
        <Image source={imageUri }
           />
        </View>
       
    )
};


const styles = StyleSheet.create({
    cameraContainer: {
        height: 50,
        width: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black,
        marginLeft: 20,
      },
})

