import ActionSheet from "react-native-actions-sheet";
import React, { createRef,useState } from "react";
import { View,Text,TouchableOpacity } from "react-native";
import UserAvatar from "@muhzi/react-native-user-avatar"
import { colors } from "../../../utils/colors";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import {launchCamera,launchImageLibrary} from "react-native-image-picker"
import { ToastAndroid } from "react-native";
import {GDrive} from "react-native-google-drive-api-wrapper"

export const ImageActionSheet = ({actionSheetRef}) => {
  let actionSheet;
  const [image,setImage] = useState([])
  const [photo, setPhoto] = useState('https://res.cloudinary.com/ogcodes/image/upload/v1581387688/m0e7y6s5zkktpceh2moq.jpg');
  
  const cloudinaryUpload = (photo) => {
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', 'ogcodes')
    data.append("cloud_name", "ogcodes")
  }

  const cloudinaryUpload = (photo) => {
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', 'liwach')
    data.append("cloud_name", "liwach")
    fetch("https://api.cloudinary.com/v1_1/liwach/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        setPhoto(data.secure_url)
      }).catch(err => {
        Alert.alert("An Error Occured While Uploading")
      })
  }
  
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
        } 
      
    
      
        else {
          const uri = response.uri;
          const type = response.type;
          const name = response.fileName;
          const source = {
            uri,
            type,
            name,
          }
          cloudinaryUpload(source)
           
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
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}

        style={{
            alignItems:'center',
            marginBottom:10
        }}
      >
        <UserAvatar
        userName="Delilah Dessalegn"
        size={80}
        backgroundColor={colors.flord_intro}
        url={photo}
        />
      </TouchableOpacity>

      <ActionSheet ref={actionSheetRef} containerStyle={styles.actionsheet}>
        <View style={styles.horizontal}>
        <TouchableOpacity style={styles.component} onPress={openCamera} >
        <Ionicons name={'image'} size={40} color={colors.flord_secondary}/>
          <Text style={styles.text}>Choose Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.component} onPress={openImageLibrary}>
        <Ionicons name={'camera'} size={40} color={colors.flord_secondary}/>
          <Text style={styles.text}>Choose Image Library</Text>
        </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
    actionsheet:{
        height: 100
    },
    horizontal:{
        flexDirection:'row',
        alignContent:'center'
    },
    icon:{},
    text:{
        fontWeight:'bold',
        color:colors.flord_intro
    },
    component:{
        marginTop:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})