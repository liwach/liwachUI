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

import { addItem, deleteItem, editItem } from '../../routes/itemsApi';
import { MAPBOX_KEY } from '../../utils/config';
import AutocompletePlace from './components/SearchBox';
import { CustomPicker } from '../../components/UI/CustomPicker';
import { TypeSeachBox } from './components/TypeSearchBox';
import { cloudinaryAddUpload, cloudinaryEditUpload, ImageActionSheet } from './components/ImageActionSheet';
import { SwapTypeDropBox } from './components/SwapTypeDropBox';
import { getLocation } from '../../routes/requestApi';
import { getOneTypeByID, getOneTypeByName } from '../../routes/TypeApi';
import { fetchuser } from '../../utils/checkFirstTimeActions'
import { AlertModal } from '../../components/UI/AlertModal';
import { editService } from '../../routes/serviceApi';



export const delItem = async(id) => {
  console.log(id)
  const [showalert,setShowAlert] = useState(false)
  const [alertMsg,setAlertMessage] = useState({msg:"",title:"",color:""})
  const response =  await deleteItem(id)
  if(response.message=="successful"){
    setShowAlert(true)
    setAlertMessage({title:'Item',msg:'Item is Deleted',color:colors.straw})
  }
  return(
    <AlertModal setShowAlert={setShowAlert} show={showalert} message={alertMsg}/>
  )
}
export const editItemForm = ({route, navigation}) => {

  const {item} = route.params
  console.log("item",item.picture)
  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);
  const [place,setPlace] = useState([])
  const [location,setLocation] = useState([])
  const [info,setInfo] = useState([])
  const [modalVisible,setModalVisible] = useState(false)
  const [photo,setPhoto] = useState("https://res.cloudinary.com/liwach/image/upload/v1630910024/add_ujcczf.png");
  const [geometry, setGeometry] = useState([])
  const [category,setCategory] = useState([])
  const [swapTypes,setSwapTypes] = useState([])
  const [newSwap,setNewSwap] = useState([])
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [message,setMessage] = useState("noimage")
  const [photoData,setPhotoData] = useState("")
  const [TINphoto,setTINPhoto] = useState([]);
  const [showalert,setShowAlert] = useState(false)
  const [alertMsg,setAlertMessage] = useState({msg:"",title:""})

  const type = []
  const imageActionRef = createRef()

 

  useEffect(async()=>{
    // const picture_urls = item.media.map(function(data, idx){
    //     const url = data.url
    //    return(
    //      url
    //    )
    //   });

    const pic = item.picture
    setNewSwap([])
    
    const source = item.swap_type.map(async function(data, idx){
      setSwapTypes([])
      const category_id = await getOneTypeByName(data).then((resp)=>{
        console.log(resp.id)
        
        setSwapTypes(swapTypes => [...swapTypes,resp.id])

      })
  })
    console.log("Removed",swapTypes)
    // console.log("EDIT ITEM: ",pic,picture_urls)
    setTitle(item.name)
    setDesc(item.desc)
    setCategory(item.category)
    setPlace(item.location)
    if(pic!==""){
        setPhoto(pic)
    }

},[])
 
  const [items, setItems] = useState([
    {label: 'Normal', value: 'normal'},
    {label: 'Premium', value: 'banana'},
    {label: 'Gold', value: 'gold'}
  ]);
 

  

  const save = async(values) => {
    const user = await fetchuser().then((data)=>{return data.data})
      //Get Category ID
      console.log("in save",category)
  
    
    const photo_response =   await cloudinaryAddUpload(photoData).then(async(resp)=>{
  
      if(item.post_type=="item"){
        const editedItem = {
          "id": item.id,
          "name": title,
          "description":desc,
          "picture" : resp,
          "swap_type":{
            "removed": swapTypes,
            "added": newSwap
          },
          "address": {
            "country": place,
            "city": place,
            "latitude": geometry[1],
            "longitude":geometry[0],
            "type": "item"
          },
          "type_id": category,
          "user_id": user.id,
          "status": item.status
        }
        console.log(editedItem)
        const response = await editItem(editedItem).then((data)=>{
          if(data){
            setShowAlert(true)
            setAlertMessage({msg:"Item is edited Successfully",title:"Item",color:colors.green,navTitle:'Profile'})
        }
        else{
          setShowAlert(true)
          setAlertMessage({msg:"Item is not edited",title:"Item",color:colors.straw,navTitle:''})
     
        }
        })
      }
      if(item.post_type=="service"){
        const editedItem = {
          "id": item.id,
          "name": title,
          "description":desc,
          "picture" : resp,
          "swap_type":{
            "removed": swapTypes,
            "added": newSwap
          },
          "address": {
            "country": place,
            "city": place,
            "latitude": geometry[1],
            "longitude":geometry[0],
            "type": "service"
          },
          "type_id": category,
          "user_id": user.id,
          "status": item.status
        }
        console.log(editedItem)
        const response = await editService(editedItem).then((data)=>{
          if(data){
            setShowAlert(true)
            setAlertMessage({msg:"Service is edited Successfully",title:"Service",color:colors.green,navTitle:'Profile'})
        }
        else{
          setShowAlert(true)
          setAlertMessage({msg:"Service is not edited",title:"Service",color:colors.straw,navTitle:''})
     
        }
        })
      }
         
          return "edited"
        })
    
  
   

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
      
  
    <ImageActionSheet message={message} setMessage={setMessage} photoData={photoData} setPhotoData={setPhotoData} photo={photo} setPhoto={setPhoto} actionSheetRef={imageActionRef} />
    <Formik
      initialValues={{ 
        title: '',
        category: '', 
        description: '',
        location: '',
        swap: '',  
      }}
      onSubmit={
        values => 
         {
           const name = values.title
           const description = values.description
           const response = addItem(
            name, 
            description, 
            )
           Alert.alert(JSON.stringify(response))
          
          }
      }
      validationSchema={yup.object().shape({
        title: yup
          .string(),
          // .required('Please, provide your title!'),
        category: yup
          .string()
          .required('Please, provide your category!'),
        description: yup
          .string(),
          // .required('Please, provide your description!'),
        location: yup
          .string(),
          // .required('Please, provide your location!'),
        swap: yup
          .string()
          // .required('Please, provide your swap!'),
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
         
          
          {touched.address && errors.address &&
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{errors.address}</Text>
          }
          <TextInput
            value={title}
            style={styles.inputStyle}
            onChangeText={text=>{handleChange('title'),setTitle(text)}}
            onBlur={() => setFieldTouched('title')}
            placeholder="Title"
            placeholderTextColor={colors.flord_intro}
          />
          {touched.title && errors.title &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.title}</Text>
          } 
           <TextInput
            value={desc}
            style={styles.inputStyle}
            onChangeText={text=>{handleChange('description'),setDesc(text)}}
            onBlur={() => setFieldTouched('description')}
            placeholder="Description"
            placeholderTextColor={colors.flord_intro}
          />
          {touched.title && errors.title &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.description}</Text>
          } 
          <TypeSeachBox value={category} setValue={setCategory} type={item.post_type}/> 
          <View style={{height:50}}></View>
          <SwapTypeDropBox value={newSwap} setValue={setNewSwap} type={item.post_type}/> 
          
         
            
          <TouchableOpacity style={styles.button} onPress={()=>save(values)}>
                <Text style={styles.text}>Save</Text>
              </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </Formik>
    <AlertModal show={showalert} setShowAlert={setShowAlert} message={alertMsg} navigation={navigation}/>

    </View>
  );

};



const styles = StyleSheet.create({
  modalContainer:{
    position: "absolute",
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
    height:50,
    backgroundColor:colors.bottomNav,
    borderWidth: 1,
    borderColor:colors.bottomNav,
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
    padding: 50 
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
    
    top: 30,
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


