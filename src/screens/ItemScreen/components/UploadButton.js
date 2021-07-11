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
//import { launchCameraAsync, launchImageLibrary } from 'react-native-image-picker';
//import { launchCameraAsync, launchImageLibraryAsync, } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
export const CameraButton = (
    
) => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const onPressHandler = async () =>{

        
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        setSelectedImage({ localUri: pickerResult.uri });
      
        }

        if (selectedImage !== null) {
          return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.cameraContainer}  onPress={onPressHandler}>

              <FontAwesome name="camera" size={15} color="white" />
              </TouchableOpacity>
              <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
              />

            </View>
           
          );
        }
  
    return(
        <View>
             <TouchableOpacity style={styles.cameraContainer}  onPress={onPressHandler}>
            
            <FontAwesome name="camera" size={15} color="white" />
        </TouchableOpacity>
        
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
        margin: 10,
        marginLeft:20,
      },
      thumbnail: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        margin: 10,
        borderRadius: 15,
      },
      container:{
        height:80,
        width:150,
        flexDirection:'row',
      }
})

