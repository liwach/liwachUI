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
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';

export const CameraButton = (
    
) => {
    //const { showActionSheetWithOptions } = useActionSheet();
    //const [imageSource, setImageSource] = useState(null);

  const selectImage =  (type) => {
    let options = {
     
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
 
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    
  }
  
    const onPressHandler = () =>{
        launchCamera(

        )
        }
    return(
        <View>
             <TouchableOpacity style={styles.cameraContainer}  onPress={selectImage('photo')}>
            <FontAwesome name="camera" size={15} color="white" />
        </TouchableOpacity>
        <Image
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

