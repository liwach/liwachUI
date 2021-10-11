import { AntDesign } from "@expo/vector-icons";
import React,{createRef,useState,useEffect} from "react"
import {
    View,Text,StyleSheet,Image,TouchableOpacity
    
} from "react-native"

import{Button, TextInput} from 'react-native-paper'
import { colors } from '../../utils/colors';
import UserAvatar from "@muhzi/react-native-user-avatar";
import { ImageActionSheet,cloudinaryAddUpload, cloudinaryEditUpload } from "../ItemScreen/components/ImageActionSheet";
import {fetchuser} from "../../utils/checkFirstTimeActions"
import { editAccount } from '../../routes/accountApi';

export const EditAccountScreen = ({navigation,route}) => {
    const [message,setMessage] = useState("noimage")
  const [photoData,setPhotoData] = useState("")
  const [photo,setPhoto] = useState("https://res.cloudinary.com/liwach/image/upload/v1630910024/add_ujcczf.png");

    const [user,setUser] = useState([])
    const fetchData = async() =>{
         
        const userDetail = await fetchuser().then((data)=>{
            console.log(data.data.id)
            setUser(data.data)
            setPhoto(data.data.picture)
        })
        console.log(user)

    }
    const save = async() => {
        const user = await fetchuser().then((data)=>{return data.data})
          //Get Category ID
          
      
        
        const photo_response =   await cloudinaryAddUpload(photoData).then(async(resp)=>{
      
            const editedItem = {
                "id": user.id,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                
                "profile_picture": resp,
                "phone_number": user.phone_number
              }
              console.log(editedItem)
              const response = await editAccount(editedItem).then((data)=>{
                if(data.success){
                    console.log(data)
                     }
              else{
              
              }
              })
             
              return "edited"
            })
        
      
       
    
    }
    useEffect(()=>{
        fetchData() 
    },[])
    const imageActionRef = createRef()

        return (

            <View>
          
            <View style={styles.actionSheet}>
            <ImageActionSheet message={message} setMessage={setMessage} photoData={photoData} setPhotoData={setPhotoData} photo={photo} setPhoto={setPhoto} actionSheetRef={imageActionRef} />
            </View>
         
                
           <AntDesign style={styles.icon} name='edit' size={20} color={colors.white}/>
            <View style={styles.textContainer}>
                
                <TextInput value={user.first_name} placeholder="First Name" style={styles.textInputContainer}/>
                <TextInput value={user.last_name} placeholder="Last Name" style={styles.textInputContainer}/>

                <TextInput value={user.phone_number} placeholder="Phone number" style={styles.textInputContainer} />
                <TextInput value={user.email} placeholder="Email Address" style={styles.textInputContainer}/>
            </View>
            <Button style={styles.button} color={colors.white} onPress={()=>{save()}}>Done</Button>
        </View>


        )


}

const styles = StyleSheet.create({

    backgroundContainer:{
        backgroundColor: colors.water,
        height:100,
        borderBottomStartRadius:70,
        borderBottomEndRadius:70
        
    },
    actionSheet:{
    
        top:50,

        alignSelf:'center'
    },

    imageBox:{
        position:'absolute',
        width: 90,
        height:90,
        borderRadius:50,
        top:50,
        alignSelf:'center'
    },

    textContainer:{
        margin:40,
        fontSize:18,
        color: colors.black,
        top:30,
        textAlign:'center'
        
    },
    textInputContainer:{
      
        margin: 20,
        height: 50
    },

    textContainer:{
        marginTop:50,
    },
    icon:{
        position:'absolute',
        top: 45,
        right: '35%',
        
    },
    button:{
        backgroundColor:colors.water,
        borderRadius: 40,
        width: '30%',
        color: colors.white,
        alignSelf: 'center',
        marginTop: 20,
    }
    
})