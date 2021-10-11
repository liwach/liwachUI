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
import { addService } from "../../../routes/serviceApi";
import { AlertModal } from "../../../components/UI/AlertModal";
import { addItem, editItem } from "../../../routes/itemsApi";

export const cloudinaryAddUpload =  async(photo) => {
 
  console.log("cloundinary",photo)
  const data = new FormData()
  data.append('file', photo)
  data.append('upload_preset', 'liwach')
  const response =  await fetch("https://api.cloudinary.com/v1_1/liwach/image/upload", {
    method: "post",
    body: data
  }).then(res => res.json()).
        then((data) =>{
            console.log(data.secure_url)
            return data.secure_url
        })
    return response
}

export const cloudinaryEditUpload =  async(photo,item,type,setShowAlert) => {
 
  console.log("cloundinary",photo)
  console.log("cloundinary",item.id)
  const data = new FormData()
  data.append('file', photo)
  data.append('upload_preset', 'liwach')
   fetch("https://api.cloudinary.com/v1_1/liwach/image/upload", {
    method: "post",
    body: data
  }).then(res => res.json()).
    then(async(data) => {
      const final = {
        "id":item.id,
        "name": item.name,
        "description":item.description,
        "picture": data.secure_url,
        "swap_type": item.swap_type,
        "address": {
          "country": item.address.country,
          "city": item.address.city,
          "latitude": item.address.latitude,
          "longitude":item.address.longitude,
          "type": item.address.type
        },
        "type_id": item.type_id,
        "user_id": item.user_id,
        "status": item.status
      }
      console.log(final)
    
      if(type=="item"){
        const response = await editItem(final,item.id)
        if(response!=null && response.message == "successful"){
        console.log("cloundinary resp",JSON.stringify(response))
        setShowAlert(true)
        return {
          "message":"successful"     
        } 
      }
      }
    
      
    }).catch(err => {
      console.log(photo)
      console.log(err.message)
      return {
        "message":err.message
      }
    })

    
}

export const ImageActionSheet = ({message,setMessage,photo,setPhoto,photoData,setPhotoData,actionSheetRef}) => {
  let actionSheet;
  // const [image,setImage] = useState([])
  // const [photo, setPhoto] = useState("https://res.cloudinary.com/liwach/image/upload/v1630288666/b7alngy52u86tqep6iwp.png");
  const imageList = []
  const image = { uri: photo };


  
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
            setPhoto(source.uri)
            setMessage("image")
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
            setPhoto(source.uri)
            setMessage("image")
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
     <Image style={{borderRadius:20,width:80, height:80,marginBottom:10,marginTop:20}} source={image}  />
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
        marginTop:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})