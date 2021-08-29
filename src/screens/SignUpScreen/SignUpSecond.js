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
import { ImageActionSheet } from '../ItemScreen/components/ImageActionSheet';
import { ToastAndroid } from 'react-native';
export const SignUpSecond = ({navigation}) => {

  const imageActionRef = createRef()
  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [place,setPlace] = useState([])
  const [location,setLocation] = useState([])
  const [info,setInfo] = useState([])

  _suggestionSelect =(result, lat, lng, text) => {
    console.log(result, lat, lng, text)
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


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
        setPlace(info)
  }

  const setAddress = (text) => {
      setInfo(text)
      setPlace(info)
      console.log("text",text)
  }

  
const FlatListItem = ({ item, onPress }) => (
  
    <TouchableOpacity style={styles.listItem}   onPress={onPress}  >
        <Text >{item.data.place_name}</Text>
    </TouchableOpacity>
  


)
  



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
    
    <View style={styles.contain}>
    
      <View style={styles.imageBox}>
      <Text style={styles.header}> Register</Text>
      </View>
      <Text style={styles.subtitle}> You are almost there!</Text>
     
    <Formik
      initialValues={{ 
        firstName: '',
        lastName: '', 
        email: '',
        password: '',
        profilePicture: '',  
        phoneNumber : '',
        birthDate: '',
        type : '',
        address : '',
        membership : '',
      }}
      onSubmit={
        values => 
         {
           values.address = info.data.place_name
        }
      }

      
      validationSchema={yup.object().shape({
        firstName: yup
          .string()
          .required('Please, provide your title!'),
        lastName: yup
          .string()
          .required('Please, provide your category!'),
          email: yup
          .string()
          .required('Please, provide your description!'),
          password: yup
          .string()
          .required('Please, provide your location!'),
          phoneNumber : yup
          .string()
          .required('Please provide your phone number.'),
          membership : yup
          .string().
          required("Please provide your membership"),
          address : yup
          .string()
          .required("Please provide your location.")
       
      })}
     >
      {({ values, handleChange, errors, setFieldTouched, setFieldValue, touched, isValid, handleSubmit }) => (
        <View style={styles.formContainer}>
            <ImageActionSheet actionSheetRef={imageActionRef} />
            <TextInput
            value={place}
            style={styles.inputStyle}
            onChangeText={text =>displayList(text)}
            onBlur={() => setFieldTouched('address')}
            placeholder="Address"
            placeholderTextColor={colors.flord}
            onEndEditing={clearData}
            
             />
             <SafeAreaView style={styles.list}>
             <FlatList
              data={location}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              horizontal={false}
              style={{
                  elevation:3,
                  zIndex: 3
              }}
            />
            </SafeAreaView>
         
{/*           
          {touched.address && errors.address &&
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{errors.address}</Text>
          } */}
        
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
        placeholder="select date"
        
        format="YYYY-MM-DD"
        minDate="1960-05-01"
        maxDate="2023-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        style={{
            width: "100%",
            fontSize:20
        }}
        customStyles={{
        
          dateInput: {
            width:100,
            marginBottom: 10,
            marginTop: 25,
            marginLeft:18,
            alignSelf:'center',
            borderColor: colors.white,
            borderBottomWidth:1,
            borderBottomColor: colors.flord,
            fontSize:20
          }
         
        }}
        onDateChange={(date) => {setDate(date)}}
      />
          {touched.birthDate && errors.birthDate &&
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{errors.birthDate}</Text>
          }

<CustomPicker/>
          {touched.membership && errors.membership &&
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{errors.membership}</Text>
          }
        
     

        
      
       
   
      

       
          <Button
            
            color={colors.flord_intro2}
            title='Sign Up'
            onPress={()=>ToastAndroid.show("Registered",ToastAndroid.SHORT)}
            
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
        borderBottomColor: colors.flord_secondary
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
    backgroundColor:colors.flord_intro2,
    borderWidth: 1,
    borderColor:colors.flord_intro2,
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
    borderColor: colors.flord,
    borderBottomWidth: 1,
    width:"100%",
    backgroundColor: colors.white,
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


