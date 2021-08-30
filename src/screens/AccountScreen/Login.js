import React,{ useState, useRef, useEffect } from 'react';
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
  Image

  
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

import  {MapboxAutocomplete}  from 'react-native-mapbox-autocomplete/mapboxAutocomplete';
import { getLocation } from '../../routes/requestApi';
import { SearchList } from './components/SearchFlatList';
import DatePicker from 'react-native-datepicker'
import { CustomPicker } from './components/CustomPicker';
import { SearchBar } from 'react-native-elements';
import { login } from '../../routes/accountApi';
import { AsyncStorage } from 'react-native';
import { saveUserToStorage } from '../../utils/checkFirstTimeActions';

export const LoginForm = ({navigation}) => {

  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [place,setPlace] = useState([])
  const [location,setLocation] = useState([])

  const signin= async(values) => {

    const response = await login(values.email,values.password)
    if(response.id!=null){
      
      alert("Sign in Successful,"+response.first_name)
      await saveUserToStorage("logged_user",response)
      navigation.navigate('Home', {
        user:response
      })
     
      
    }
   
    
    
    
  }

  _suggestionSelect =(result, lat, lng, text) => {
    console.log(result, lat, lng, text)
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };



  const inputStyle = {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 12,
    marginBottom: 5,
  };

 
 
  return (
    
    <View style={styles.contain}>
    
      <View style={styles.imageBox}>
      <Text style={styles.header}> Log in</Text>
      </View>
      <Text style={styles.subtitle}> Liwach would love to get to have you on board!</Text>
      <Text style={styles.subtitle}> Let's get you signed in!</Text>
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
       
         
        
       <TextInput
            value={values.email}
            style={styles.inputStyle}

            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder="Email"
            placeholderTextColor={colors.flord}
          />
          {touched.email && errors.email &&
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{errors.email}</Text>
          } 

          <TextInput
            style={styles.inputStyle}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={colors.flord}
          />
          {touched.password && errors.password &&
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{errors.password}</Text>
          } 

     

       
          <Button
            
            color={colors.flord_intro2}
            title='Login'
            onPress={()=>signin(values)}
            
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
    height:"100%"
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
    marginBottom: 10,
    color:colors.flord_intro,
    
    borderColor: colors.flord,
    borderBottomWidth: 1,
    width:"100%",
    backgroundColor: colors.white,
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
    postButton: {
    width: '40%',
    borderRadius: 30,
    height:40,
    backgroundColor:colors.flord_intro2,
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


