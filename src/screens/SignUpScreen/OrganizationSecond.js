import React,{ useState, useRef, useEffect, createRef } from 'react';
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
  FlatList,
  SafeAreaView,
  StatusBar,


  
} from "react-native";
import { CustomTextInput } from './components/CustomTextInput';
import { colors } from '../../utils/colors';
import CustomText from '../../components/UI/CustomText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {CameraButton} from "./components/UploadButton"
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup'
import { Formik, setIn, swap } from 'formik'
import {launchImageLibrary} from 'react-native-image-picker';
//Action
//import { addItem, fetchItem,requestItem,addUser,fetchRequests } from "../../reducers";
//PropTypes check
import PropTypes from "prop-types";

import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { addItem } from '../../routes/itemsApi';

import { MAPBOX_KEY } from '../../utils/config';

import  {MapboxAutocomplete}  from 'react-native-mapbox-autocomplete/mapboxAutocomplete';
import { getLocation } from '../../routes/requestApi';
import { SearchList } from './components/SearchFlatList';
import DatePicker from 'react-native-datepicker'
import { CustomPicker } from './components/CustomPicker';
import { SearchBar } from 'react-native-elements';
import { cloudinaryUpload, ImageActionSheet } from '../ItemScreen/components/ImageActionSheet';
import { ToastAndroid } from 'react-native';
import  {getAllMembership} from '../../routes/membershipAPI'
import { postUser } from '../../routes/accountApi';
import { uploadPicture } from '../../routes/utilApi';
import { ButtonImageSheet } from './components/ButtonImageSheet';
import { AlertModal } from '../../components/UI/AlertModal';

export const OrganizationSecond = ({route, navigation}) => {
  const { item} = route.params;
  const imageActionRef = createRef()
 
  const [date, setDate] = useState();

  const [place,setPlace] = useState('')
  const [location,setLocation] = useState([])
  const [geometry, setGeometry] = useState([])

  const [info,setInfo] = useState([])
  const [membership, setMembership] = useState(null);
  const [photo,setPhoto] = useState("https://res.cloudinary.com/liwach/image/upload/v1630910024/add_ujcczf.png");
  const [TINphoto,setTINPhoto] = useState("");
  const [placeerror,setPlaceError] = useState("")
  const [dateerror,setDateError] = useState("")
  const [membererror,setMemberError] = useState("")
  const [photoData,setPhotoData] = useState()
  const [showalert,setShowAlert] = useState(false)
  const [alertMsg,setAlertMessage] = useState({msg:"",title:"",color:'',navTitle:''})

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

  
  const setAddress = (text) => {
      setInfo(text)
      setPlace(info)
      console.log("text",text)
  }
    const uploadImage = async() => {
      try{
        const photo_response = cloudinaryUpload(photoData)
        const image = {
          "item_id": image.id,
          "type": image.type,
          "url": image.url
         }
        const addImage = await uploadPicture()
        return photo_response
      }
      catch(error){
        return error
      }
     
    }
   const signUpUser = async(values) =>{
       const user = {
        "first_name": item.firstName,
        "last_name": item.lastName,
        "email": item.email,
        "password": item.password,
        "profile_picture": "https://res.cloudinary.com/liwach/image/upload/v1630910270/bxffla2sq3dfyi2j8ig8.jpg",
        "phone_number": values.phoneNumber ,
        "TIN_picture": "https://res.cloudinary.com/liwach/image/upload/v1630910270/bxffla2sq3dfyi2j8ig8.jpg",
        "status": "active",
        "birthdate": date,
        "type": "organization",
        "address": {
          "country": place,
          "city": place,
          "latitude": geometry[1],
          "longitude":geometry[0],
          "type": "user"
        },
        "membership_id": membership
       }
      
         try{
          
          const response =  await postUser(user)
          if(response){
            // alert("Succesfully Registered,"+JSON.stringify(response))
            setShowAlert(true)
            setAlertMessage({msg:'Signed Up Successfully!',title:'Sign Up',color:colors.green,navTitle:"AuthScreen"})
            navigation.navigate('AuthScreen')
           }
         }
         catch(error){
          setShowAlert(true)
          setAlertMessage({msg:'Please check if you have registered with this email',title:'Sign Up',color:colors.straw,navTitle:""})
   
         }
      
    //  const photo_response = await uploadImage(response.id)

       
   }
 
  
// const FlatListItem = ({ item, onPress }) => (
  
//     <TouchableOpacity style={styles.listItem}  onPress={onPress} onLongPress={item} >
//         <Text >{item.data.place_name}</Text>
//     </TouchableOpacity>
  


// )
  



const [selectedId, setSelectedId] = useState(null);

const [loading, setLoading] = useState(true);

const FlatListData = ({ list, onItemClick }) => {

  


  const renderItem = ({ item }) => {
 
    // _replaceAddress = ({item}) => {
    //   console.log("touched:",item)
    // }
    const backgroundColor = item.id === selectedId ? colors.primary : colors.peach;
      console.log(`render:${item.data.place_name}`)
      return(
        <TouchableOpacity style={styles.listItem}  onPress={()=>onItemClick(item)}  >
        <Text style={{fontSize:20}} >{item.data.place_name}</Text>
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
  return (
    
    <View style={styles.contain}>
    
      <View style={styles.imageBox}>
      <Text style={styles.header}> Register</Text>
      </View>
      <Text style={styles.subtitle}> You are almost there!</Text>
     
    <Formik
      initialValues={{ 
      
        phoneNumber : '',
        birthDate: '',
     
        address : '',
        membership : '',
      }}
      onSubmit={
        (values) => 
         {
           if(place==""){
            if(geometry==[]){
              console.log("geometry is null")
              setPlaceError("Submit the right location by clicking on it.")
             }
             setPlaceError("Please provide your location.")
           }

        
           
           if(date==null){
              setDateError("Please provide your birthdate")
           }
           if(membership==null){
             setMemberError("Please provide your membership.")
           }
           if(membership!=null){
            setMemberError("")
          }
          if(place!=""){
            console.log(geometry)
            setPlaceError("")
          }
          if(date!=null){
             setDateError("")
          }

          if(date!=null&&place!=""&&membership!=null&&values.phoneNumber){
               signUpUser(values)
          }
        }
      }
      
      
      validationSchema={yup.object().shape({
          
          phoneNumber : yup
          .string()
          .required('Please provide your phone number.')
        
       
      })}
     >
      {({ values, handleChange, errors, setFieldTouched, setFieldValue, touched, isValid, handleSubmit }) => (
        <View style={styles.formContainer}>
            <ImageActionSheet photoData={photoData} setPhotoData={setPhotoData} photo={photo} setPhoto={setPhoto} actionSheetRef={imageActionRef} />
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
         
          
          {place===""?
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{placeerror}</Text>
            :<Text></Text>
          }
        
        <TextInput
            value={values.phoneNumber}
            style={styles.inputStyle}
            onChangeText={handleChange('phoneNumber')}
            onBlur={() => setFieldTouched('phoneNumber')}
            placeholder="Phone Number"
            placeholderTextColor={colors.flord}
            keyboardType={'phone-pad'}
             />
          {touched.phoneNumber && errors.phoneNumber &&
            <Text style={{ fontSize: 12, color: colors.flord_secondary }}>{errors.phoneNumber}</Text>
          }
<DatePicker
       
        date={date}
        mode="date"
        placeholder="Your Birth Date"
        
        format="YYYY-MM-DD"
        minDate="1960-05-01"
        maxDate="2003-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        style={{
            width: "100%",
            fontSize:30,
           
        }}
        customStyles={{
        
          dateInput: {
            
            marginBottom: 10,
            marginTop: 25,
            
            alignSelf:'center',
            borderColor: colors.white,
            backgroundColor:colors.light_grey,
            borderRadius:10,
            borderWidth:0,
            borderBottomColor: colors.flord,
            fontSize:30
          }
         
        }}
        onDateChange={(date) => {setDate(date)}}
      />
         
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{dateerror}</Text>
          
          <ButtonImageSheet photoData={photoData} setPhotoData={setPhotoData} photo={TINphoto} setPhoto={setTINPhoto} actionSheetRef={imageActionRef}/>

          <CustomPicker membership={membership} setMembership={setMembership}/>
          <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{membererror}</Text>

          <AlertModal show={showalert} setShowAlert={setShowAlert} message={alertMsg} navigation={navigation}/>

          <Button
            
            color={colors.water}
            title='Sign Up'
            onPress={handleSubmit}
            
          />
         
        </View>
      )}
    </Formik>

    </View>
  );

};



const styles = StyleSheet.create({
  contain:{
    
    backgroundColor:colors.white,
    justifyContent:'center',
    flex:1,
    width: "100%",
    height:"100%",
    alignItems:'center'
  },
  list:{
      alignItems:'center',
      width: "100%",
      
  },
  listItem:{
        margin: 10,
        borderBottomWidth:0.5,
        alignContent:'center',
        borderBottomColor: colors.flord_secondary,
        fontSize:20
        
  },
  cover :{
    zIndex:100,
  },
  horizontal:{
      flexDirection:"row",
  },
  subtitle:{
    
    top: 30,
    color: colors.flord,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
  },
  header:{
    
    
    zIndex: 100,
    top: 45,
    color: colors.white,
    textAlign: 'center',
    fontSize: 30,
    fontWeight:'bold',
    
  } ,
  imageBox:{
    flex:1.5,
    width:"100%",
    backgroundColor:colors.water,
    borderWidth: 1,
    borderColor:colors.water,
    borderBottomEndRadius: 70,
    borderBottomStartRadius: 70
  },

  formContainer: {
    flex:5,
    padding: 50,
    width:"100%",
    height:"100%" 
  },
  inputStyle:{
  
    color:colors.flord_intro,
    borderWidth:0,
    backgroundColor:colors.light_grey,
    width:"100%",
    marginBottom:6,
    marginRight:4,
    borderRadius: 20,
    textAlign:"center",
    fontSize: 20
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
    postButton: {
    width: '40%',
    borderRadius: 30,
    height:40,
    backgroundColor:colors.flord_secondary,
    color: colors.white,
    alignSelf: 'center',
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
    },

    container:{
        width: '100%',
        alignContent:'center', 
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


