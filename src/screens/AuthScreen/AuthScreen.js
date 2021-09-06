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
import { BackgroundImage } from 'react-native-elements/dist/config';
import { ImageBackground } from 'react-native';
import { Pressable } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export const AuthenticationPage = ({navigation}) => {


  const [show,setShow] = useState(false)
  const [message,setMessage] = useState("Something went wrong.")
  const signin= async(values) => {
    try{
        const response = await login(values.email,values.password)
        if(response.id!==null){
            await saveUserToStorage("logged_user",response)
            setShow(true)
            setMessage("You have logged in!")
          }
    }
    catch(error){
        setShow(true)
        setMessage("Something went wrong. Check your internet connection.")
    }
   

   
   
    
    
    
  }

  

 
const image = { uri: "https://res.cloudinary.com/liwach/image/upload/v1630627424/odynsmqnvligqdmhlgns.jpg" };
 
  return (
    
    <View style={styles.contain}>
     <ImageBackground style={{width:"100%", height:"100%"}} source={image} resizeMode="cover" blurRadius={10}/>
     <View style={{position:'absolute',width:'100%',height:'100%'}}>
      <View style={styles.imageBox}>
      <Text style={styles.header}> Log in</Text>
      </View>
      <Text style={styles.subtitle}> Liwach would love to get to have you on board!</Text>
      <Text style={styles.subtitle}> Let's get you signed in!</Text>
    <Formik
      initialValues={{ 
       
        email: '',
        password: '',
        
      }}
      onSubmit={
        values => 
         {
            signin(values)
        }
      }

      
      validationSchema={yup.object().shape({
       
          email: yup
          .string()
          .email()
        
          .required('Please, provide your email!'),
          password: yup
          .string()
          .min(8)
          .max(15)
          .required('Please, provide your password!'),
         
       
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
            <Text style={{ fontSize: 12, color: colors.white  }}>{errors.email}</Text>
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
            <Text style={{ fontSize: 12, color: colors.white  }}>{errors.password}</Text>
          } 
            <AwesomeAlert
              show={show}
              showProgress={false}
              title="Login"
              message={message}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showConfirmButton={true}
              cancelText="No, cancel"
              confirmText="Okay"
              confirmButtonColor={colors.flord_secondary}
             
              onConfirmPressed={() => {
                setShow(false)
              }}
            />

     

       
          <Button
            
            color={colors.flord_secondary}
            title='Login'
            
            onPress={handleSubmit}
            
          />
      
         <Text style={styles.subtitle}>Don't have account? </Text>
          <Text onPress={()=>navigation.navigate("SignUpStack")} style={[styles.subtitle,styles.underlined]}>Sign up</Text>
        </View>
      )}
    </Formik>
    
    </View>
    </View>
  );

};



const styles = StyleSheet.create({
    underlined:{
        textDecorationLine:'underline',
        zIndex:100

    },
  contain:{
    position: "absolute",
    backgroundColor:"transparent",
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
      zIndex:100
  },
  subtitle:{
    
    top: 30,
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
    zIndex:100
  },
  header:{
    
    zIndex: 100,
    top: 45,
    color: colors.white,
    textAlign: 'center',
    fontSize: 30,
    fontWeight:'bold',

    
  } ,
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
    backgroundColor:colors.flord_secondary,
    opacity: 0.6,
    borderWidth: 1,
    borderColor:colors.flord_secondary,
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
    
    
    width:"100%",
    backgroundColor: colors.white,
    opacity: 0.5,
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


