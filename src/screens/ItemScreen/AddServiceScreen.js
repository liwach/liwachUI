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
import { CustomTextInput } from './components/CustomTextInput';
import { colors } from '../../utils/colors';
import CustomText from '../../components/UI/CustomText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {CameraButton} from "./components/UploadButton"
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup'
import { Formik } from 'formik'
import {launchImageLibrary} from 'react-native-image-picker';
//Action
//import { addItem, fetchItem,requestItem,addUser,fetchRequests } from "../../reducers";
//PropTypes check
import PropTypes from "prop-types";

import { Dropdown } from 'react-native-material-dropdown-v2-fixed';

import { addItem } from '../../routes/itemsApi';
import { MAPBOX_KEY } from '../../utils/config';
import AutocompletePlace from './components/SearchBox';
import { CustomPicker } from '../../components/UI/CustomPicker';
import { TypeSeachBox } from './components/TypeSearchBox';
import { cloudinaryUpload, ImageActionSheet } from './components/ImageActionSheet';
import { SwapTypeDropBox } from './components/SwapTypeDropBox';
import { getLocation } from '../../routes/requestApi';
import { getOneTypeByName } from '../../routes/TypeApi';
import { fetchuser } from '../../utils/checkFirstTimeActions'
import { addService } from '../../routes/serviceApi';
import { ButtonImageSheet } from './components/ButtonImageAction';
import { AlertModal } from '../../components/UI/AlertModal';
import { uploadPicture } from '../../routes/utilApi';

export const addServiceForm = ({navigation}) => {


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
  const [placeerror,setPlaceError] = useState("")
  const [categoryerror,setCategoryError] = useState("")
  const [swaperror,setSwapTypeError] = useState("")
  const [message,setMessage] = useState("noimage")
  const [showalert,setShowAlert] = useState(false)
  const [alertMsg,setAlertMessage] = useState({msg:"",title:""})

  const [items, setItems] = useState([
    {label: 'Normal', value: 'normal'},
    {label: 'Premium', value: 'banana'},
    {label: 'Gold', value: 'gold'}
  ]);
  function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
  
  const uploadImage = (item) => {
    try{
      const photo_response =  cloudinaryUpload(photoData,item,"service")
      // const image = {
      //   "item_id": image.id,
      //   "type": image.type,
      //   "url": image.url
      //  }
      // const addImage = await uploadPicture()
      if(photo_response.message=="successful"){
        setShowAlert(true)
        setAlertMessage({msg:'Item Uploaded Successfully',title:'Successful',color:colors.green})
      }
      console.log("item",JSON.stringify(photo_response))
      return photo_response
    }
    catch(error){
      setShowAlert(true)
      setAlertMessage({msg:error.message,title:"Image Error",color:colors.green})
    }
   
  }
  const add = async(values) => {
    //Get User ID
    const user = await fetchuser()
    console.log("user",user)
    //Get Category ID
    const category_id = await getOneTypeByName(category)
    // const itemType = category_id[0].id
    // console.log("newswap",category_id[0].id) 
    //Get Type ID
    const source = swapTypes.map(async function(data, idx){
      const uri = await getOneTypeByName(data);
      type.push(uri)
      setNewSwap(type)
      console.log("Type in Add", JSON.stringify(type))
      alert("Type in Add",{type})
  })
    //Get title
    //Get Desc
    //Get Address Geometry

    
    const item = {
      "name": values.title,
      "description":values.description,
      "media": photo,
      "swap_type": newSwap,
      "address": {
        "country": place,
        "city": place,
        "latitude": geometry[1],
        "longitude":geometry[0],
        "type": "service"
      },
      "type_id": category_id,
      "user_id": user.id,
      "status": "open"
    }

    

    console.log("Item ",item)

    const response = await addService(item)
    if(response!=null && response.message == "successful"){
        alert("Service is added.")
        navigation.navigate("Home")
    }
}


  const inputStyle = {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 12,
    marginBottom: 5,
  };
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
 
  return (
    <View style={styles.container}>
      
    <View style={styles.imageBox}>
    <Text style={styles.subtitle}> Add items to swap with the ones you need!</Text>
    </View>
    <ImageActionSheet message={message} setMessage={setMessage} photoData={photoData} setPhotoData={setPhotoData} photo={photo} setPhoto={setPhoto} actionSheetRef={imageActionRef} />
    <ButtonImageSheet imageList={imageList} photoData={photoData} setPhotoData={setPhotoData} photo={TINphoto} setPhoto={setTINPhoto} actionSheetRef={multipleImageRef}/>
    <Formik
      initialValues={{ 
        title: '',
        category: '', 
        description: '',
        location: '',
        swap: '',  
      }}
      onSubmit={
       async (values) => 
         {
           const name = values.title
           const description = values.description
           if(place==""){
              setPlaceError("Please add your location.")
           }
           if(category==""){
            setCategoryError("Please add your category.")
         }
            if(swapTypes==""){
              setSwapTypeError("Please add your swap type.")
          }
              if(place!=""){
                setPlaceError("")
            }
            if(category!=""){
              setCategoryError("")
          }
              if(swapTypes!=""){
                setSwapTypeError("")
            }
            if(message=="noimage"){
                setShowAlert(true)
                setAlertMessage({msg:"Please add atleast one image.",title:'Featured Image'})
            }
            if(place!=""&&category!=""&&swapTypes!=[]&&message!="noimage"&&name!=""&&description!=""){
              const user = await fetchuser()
              console.log("user",user)
              //Get Category ID
              const category_id = await getOneTypeByName(category)
              // const itemType = category_id[0].id
              // console.log("newswap",category_id[0].id) 
              //Get Type ID
              const source = swapTypes.map(async function(data, idx){
                const uri = await getOneTypeByName(data);
                type.push(uri)
                setNewSwap(type)
                console.log("Type in Add", JSON.stringify(type))
            })
              const item = {
                "name": values.title,
                "description":values.description,
                "picture": "",
                "swap_type": newSwap,
                "address": {
                  "country": place,
                  "city": place,
                  "latitude": geometry[1],
                  "longitude":geometry[0],
                  "type": "service"
                },
                "type_id": category_id,
                "user_id": user.id,
                "status": "open"
              }
             try{
              const response =  uploadImage(item)
            
              console.log("response",JSON.stringify(response.message))
              if(response.message=="successful"){
                setShowAlert(true)
                setAlertMessage({msg:'Image Uploaded Successfully',title:'Successful',color:colors.green})
              }
             }
             catch(error){
              setShowAlert(true)
              setAlertMessage({msg:'Item didnt upload',title:'Error',color:colors.red})
             }
            
            }   
          
          }
      }
      validationSchema={yup.object().shape({
        title: yup
          .string()
          .required('Please, provide your title!'),
        category: yup
          .string()
         ,
        description: yup
          .string()
          .required('Please, provide your description!'),
        location: yup
          .string()
          ,
        swap: yup
          .string()
          
      })}
     >
      {({ values, handleChange, errors, setFieldTouched, setFieldValue, touched, isValid, handleSubmit }) => (
        <KeyboardAvoidingView 
        keyboardVerticalOffset={
          Platform.select({
             ios: () => 0,
             android: () => -500
          })()}
        behavior={'padding'} 
        style={styles.formContainer}>

        {/* <AutocompletePlace onSelect={place => console.log(place)} /> */}
        <TextInput
            value={place}
            style={styles.inputStyle}
            onChangeText={text =>{displayList(text), setPlace(text)}}
            onBlur={() => setFieldTouched('address')}
            placeholder="Address"
            placeholderTextColor={colors.flord}
            onEndEditing={clearData}
            onChange={event => setFieldValue(event.target.value)}
             />
             <FlatListData list={location} onItemClick={itemClick} />
         
          
        
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{placeerror}</Text>
            <TypeSeachBox value={category} setValue={setCategory}/> 
          <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{categoryerror}</Text>
          <TextInput
            value={values.title}
            style={styles.inputStyle}
            onChangeText={handleChange('title')}
            onBlur={() => setFieldTouched('title')}
            placeholder="Title"
            placeholderTextColor={colors.flord_intro}
          />
          {touched.title && errors.title &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.title}</Text>
          } 
           <TextInput
            value={values.description}
            style={styles.inputStyle}
            onChangeText={handleChange('description')}
            onBlur={() => setFieldTouched('description')}
            placeholder="Description"
            placeholderTextColor={colors.flord_intro}
          />
          {touched.title && errors.title &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.description}</Text>
          } 
        

          <SwapTypeDropBox value={swapTypes} setValue={setSwapTypes}/> 
          <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{swaperror}</Text>

          <AlertModal show={showalert} message={alertMsg} setShowAlert={setShowAlert}/>
            
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </Formik>
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


