import React,{ useState, useRef, useEffect,createRef } from 'react';
import { Field, reduxForm } from "redux-form";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Dimensions,
  TextInput, 
  Text, 
  Button,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
  Modal

  
} from "react-native";
import { colors } from '../../../utils/colors';

import * as yup from 'yup'
import { Formik } from 'formik'


import { addItem } from '../../../routes/itemsApi';
import { TypeSeachBox } from './TypeSearchBox';
import { cloudinaryAddUpload, cloudinaryUpload, ImageActionSheet } from './ImageActionSheet';
import { SwapTypeDropBox } from './SwapTypeDropBox';
import { getLocation } from '../../../routes/requestApi';
import { fetchuser } from '../../../utils/checkFirstTimeActions'
import { ButtonImageSheet } from './ButtonImageAction';
import { AlertModal } from '../../../components/UI/AlertModal';
import { addMedia } from '../../../routes/mediaApi';

export const addMultipleImages = ({route,navigation}) => {

  const { item} = route.params;
  const [place,setPlace] = useState([])
  const [location,setLocation] = useState([])
  const [photo,setPhoto] = useState("https://res.cloudinary.com/liwach/image/upload/v1630910024/add_ujcczf.png");
  const [geometry, setGeometry] = useState([])
  const [category,setCategory] = useState([])
  const [swapTypes,setSwapTypes] = useState([])
  const [newSwap,setNewSwap] = useState([])
  const type = []
  const imageList = []
  const imageActionRef = createRef()
  const multipleImageRef = createRef()
  const [photoData,setPhotoData] = useState("")
  const [TINphoto,setTINPhoto] = useState([]);
  const [TINphotoData,setTINPhotoData] = useState([]);
  const [placeerror,setPlaceError] = useState("")
  const [categoryerror,setCategoryError] = useState("")
  const [swaperror,setSwapTypeError] = useState("")
  const [message,setMessage] = useState("noimage")
  const [showalert,setShowAlert] = useState(false)
  const [alertMsg,setAlertMessage] = useState({msg:"",title:"",color:"",navTitle:''})
  const [uploadedPics,setUploadedPics] = useState([])
  const [userData,setUserData] = useState({id:""})
  const [profilePic,setProfilePic] = useState("")

  function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
  
  
 
  const displayList = async(text) => {
    const data =  await getLocation(text)
    const swap_types = data.features.map(function(data, idx){
        return(
          {
             data,
          }
        )
       });
     
   text.length == 0 ? setLocation([]): setLocation(swap_types)
  }
  const clearData = () => {
        setLocation([])
  }

  const FlatListData = ({ list, onItemClick }) => {

  


    const renderItem = ({ item }) => {
   
      // _replaceAddress = ({item}) => {
      //   console.log("touched:",item)
      // }
      const backgroundColor = item.id === selectedId ? colors.primary : colors.peach;
        console.log(`render:${item.data.place_name}`)
        return(
          <TouchableOpacity style={styles.listItem}  onPress={()=>onItemClick(item)}  >
          <Text >{item.data.place_name}</Text>
          </TouchableOpacity>
        )
      }
  
      return(
        <SafeAreaView
         style={styles.list}
         
         >
        <FlatList
         data={list}
         renderItem={renderItem}
         keyExtractor={(item) => item.id}
         extraData={selectedId}
         horizontal={false}
         keyboardShouldPersistTaps="handled"
         style={{
             elevation:3,
             zIndex: 3
         }}
       />
       </SafeAreaView>
      )
    
  
  
  }
  const itemClick = (item) => {
    setPlace(item.data.place_name)
    setGeometry(item.data.geometry.coordinates)
    clearData()
    console.log("touched:",item.data.geometry.coordinates)
    // console.log("touched place:",place)
  
  }
  const FlatListItem = ({ item, onPress }) => (
  
    <TouchableOpacity style={styles.listItem}   onPress={onPress}  >
        <Text >{item.data.place_name}</Text>
    </TouchableOpacity>)
  const [selectedId, setSelectedId] = useState(null);

  const [loading, setLoading] = useState(true);
  
  
  const renderItem = ({ item }) => {
  
    const backgroundColor = item.id === selectedId ? colors.primary : colors.peach;
      console.log(`render:${backgroundColor}`)
      return(
        <FlatListItem
        
          item={item}
          onPress={() => setSelectedId(item.id)}
          
        
        />
      )
    }

  const addImages = async() =>{
    const user = await fetchuser().then((data)=>{return data.data})
    TINphotoData.map(async(prop, key) => {
        console.log("Multiple Image",prop)
        const photo_response =  await cloudinaryAddUpload(prop).then(async(resp)=>{
              const media = {
                id:item,
                type:'item',
                url:resp
              }
              console.log(media)
              const response = await addMedia(media,user.token).then((res)=>{
                  if(res.success){
                      navigation.navigate("Profile")
                  }
              })
              
          })
          
    })

  }
 
  return (
    <View style={styles.container}>
      
    <View style={styles.imageBox}>
    <Text style={styles.subtitle}>Add more pictures for your item!</Text>
    </View>
    {/* <ImageActionSheet message={message} setMessage={setMessage} photoData={photoData} setPhotoData={setPhotoData} photo={photo} setPhoto={setPhoto} actionSheetRef={imageActionRef} /> */}
    <ButtonImageSheet imageList={imageList} photoData={TINphotoData} setPhotoData={setTINPhotoData} photo={TINphoto} setPhoto={setTINPhoto} actionSheetRef={multipleImageRef}/>
      
    <TouchableOpacity style={styles.button} onPress={()=>{addImages()}}>
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
    </View>
  );

};



const styles = StyleSheet.create({
    modalContainer:{
      top: 0,
      left: 0,
      width: 100,
      height: 100,
      backgroundColor: colors.bottomNav,
      
      alignItems: "center",
      justifyContent: "center",
    },
    listItem:{
      margin: 10,
      borderBottomWidth:0.5,
      alignContent:'center',
      borderBottomColor: colors.flord_secondary,
      
  },
    imageBox:{
      
      width:"100%",
      backgroundColor:"transparent",
    
      borderBottomEndRadius: 70,
      borderBottomStartRadius: 70
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      width:200,
      backgroundColor:colors.water,
      alignSelf:"center",
      marginTop:20
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    formContainer: {
      paddingLeft:30,
      paddingRight:30,
      
    },
    inputStyle:{
      marginTop:10,
      color:colors.flord_intro,
      
      backgroundColor:colors.light_grey,
      width:"100%",
    
      marginRight:4,
      borderRadius: 20,
      textAlign:"center",
    },
    horizontalInputStyle:{
      marginBottom: 10,
      color:colors.black,
      borderColor: colors.flord,
      borderBottomWidth: 1,
      textTransform:"capitalize",
      textAlign:"center",
      width:"50%",
      marginRight:4,
      borderRadius: 20,
    },
    subtitle:{
      
      top: 15,
      color: colors.flord,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:'bold',
    },
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
          height: "100%",
          alignContent:'center', 
          backgroundColor: colors.white
      },

      imageView:{
      
      },

      imageContainer:{

      },
      dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    header:{
      
      zIndex: 100,
      top: 45,
      color: colors.flord,
      textAlign: 'center',
      fontSize: 30,
      fontWeight:'bold',
      
    } ,
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },

  }   
);


