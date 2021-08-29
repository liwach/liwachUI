import ActionSheet from "react-native-actions-sheet";
import React, { createRef,useState } from "react";
import { View,Text,TouchableOpacity } from "react-native";
import UserAvatar from "@muhzi/react-native-user-avatar"
import { colors } from "../../../utils/colors";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import {launchCamera,launchImageLibrary} from "react-native-image-picker"
import { ToastAndroid } from "react-native";

export const ImageActionSheet = ({actionSheetRef}) => {
  let actionSheet;
  const [image,setImage] = useState("")
  const imageSource = "../../../assets/images/image_icon.png"
  const openCamera = () => {
    let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
     launchCamera(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
            const source = response.assets.map(function(data, idx){
                return {fileUri:data.uri}
                  
                

               });
            setImage(source.fileUri)
          ToastAndroid.show(JSON.stringify(source), ToastAndroid.SHORT)

          console.log('source', source);
        //   this.setState({
        //     filePath: response,
        //     fileData: response.data,
        //     fileUri: response.uri
        //   });
        }
      });

  }

  const openImageLibrary = () => {
    let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
       launchImageLibrary(options, (response) => {
        
               if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
            const source = response.assets.map(function(data, idx){
                return {fileUri:data.uri}
                  
                

               });
            setImage(JSON.stringify(source.fileUri))
          ToastAndroid.show(JSON.stringify(source), ToastAndroid.SHORT)

          console.log('source', source);
          
        //   this.setState({
        //     filePath: response,
        //     fileData: response.data,
        //     fileUri: response.uri
        //   });
        }
      });

  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}

        style={{
            alignItems:'center',
            marginBottom:10,
            marginTop:10
        }}
      >
        <UserAvatar
        
        size={80}
        backgroundColor={colors.flord_intro}
        src={"https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"}
        />
      </TouchableOpacity>

      <ActionSheet ref={actionSheetRef} containerStyle={styles.actionsheet}>
        <View style={styles.horizontal}>
        <TouchableOpacity style={styles.component} onPress={openCamera} >
        <Ionicons name={'image'} size={40} color={colors.flord_intro}/>
          <Text style={styles.text}>Choose Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.component} onPress={openImageLibrary}>
        <Ionicons name={'camera'} size={40} color={colors.flord_intro}/>
          <Text style={styles.text}>Choose Image Library</Text>
        </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
    actionsheet:{
        height: 100,
        backgroundColor:colors.flord_intro2
    },
    horizontal:{
        flexDirection:'row',
        alignContent:'center'
    },
    icon:{},
    text:{
        fontWeight:'bold',
        color:colors.white
    },
    component:{
        marginTop:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})