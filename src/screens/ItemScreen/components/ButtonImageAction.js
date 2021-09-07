import ActionSheet from "react-native-actions-sheet";
import React, { createRef,useState } from "react";
import { View,Text,TouchableOpacity,ImageBackground,Image } from "react-native";
import UserAvatar from "@muhzi/react-native-user-avatar"
import { colors } from "../../../utils/colors";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import {launchCamera,launchImageLibrary} from "react-native-image-picker"
import { ToastAndroid } from "react-native";
import axios from "axios";
import FormData from "form-data"

export const cloudinaryUpload = async (photo) => {
  const data = new FormData()
  data.append('file', photo)
  data.append('upload_preset', 'liwach')
   fetch("https://api.cloudinary.com/v1_1/liwach/image/upload", {
    method: "post",
    body: data
  }).then(res => res.json()).
    then(data => {
      console.log({
        "message":"successful",
        "data":data.secure_url
      })
      return {
        "message":"successful",
        "data":data.secure_url
      }
    }).catch(err => {
      return {
        "message":err.message
      }
    })
}

export const ButtonImageSheet = ({imageList,actionSheetRef,photo,setPhoto,photoData,setPhotoData}) => {
  let actionSheet;
  // const [image,setImage] = useState([])
  // const [photo, setPhoto] = useState("https://res.cloudinary.com/liwach/image/upload/v1630288666/b7alngy52u86tqep6iwp.png");
  


  
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
          
          const source = response.assets.map(function(data, idx){
            let base64Img = `data:image/jpg;base64,${data.base64}`;
          console.log('base64Img', base64Img);
            const uri = data.uri;
          const type = data.type;
          const name = data.fileName;
          const source = {
            "uri": uri,
             "type":type,
             "name":name
            }
            console.log('source', source);
            imageList.push({uri:source.uri})
            setPhoto(imageList)
            setPhotoData(source)
            // cloudinaryUpload(source)
           });
         
          
           
            

        
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
            
            const uri = data.uri;
          const type = data.type;
          const name = data.fileName;
          const source = {
            "uri": uri,
             "type":type,
             "name":name
            }
            console.log('source', source);
            // imageList.push({uri:source.uri})
            // setPhoto(imageList)
            setPhoto(photo => [...photo, {uri:source.uri} ])
            setPhotoData(source)
            // cloudinaryUpload(source)
            
           });
                   
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
        <View style={styles.horizontal}>
      <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}

        style={{
            flexDirection:'row',
            alignItems:'center',
           
          
            backgroundColor:colors.light_grey,
            
          
            borderRadius:10,
            marginLeft:40
        }}
      >
          <Ionicons name={"images-outline"} size={30} color={colors.water}/>
      </TouchableOpacity>
      {console.log(photo.k)}

      {photo.map((prop, key) => {
                 console.log("Image",prop)   
                    return (
                        <Image style={{borderRadius:10,width:40, height:40,marginBottom:10,marginLeft:20}} source={prop}  />
                        );
                  })}
      </View>
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
        height: 100,
        backgroundColor:colors.water
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
        marginTop:10,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})