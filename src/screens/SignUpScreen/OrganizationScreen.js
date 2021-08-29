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

export const OrganizationForm = (props) => {

  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);
  _suggestionSelect =(result, lat, lng, text) => {
    console.log(result, lat, lng, text)
  }
  


  const inputStyle = {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 12,
    marginBottom: 5,
  };

 
  return (
    <View style={styles.contain}>

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
          
           Alert.alert("added")
          
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
       
      })}
     >
      {({ values, handleChange, errors, setFieldTouched, setFieldValue, touched, isValid, handleSubmit }) => (
        <View style={styles.formContainer}>

          <TextInput
            value={values.firstName}
            style={inputStyle}
            onChangeText={handleChange('firstName')}
            onBlur={() => setFieldTouched('firstName')}
            placeholder="First Name"
          />
          {touched.firstName && errors.firstName &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.firstName}</Text>
          }            
          <TextInput
            value={values.lastName}
            style={inputStyle}
            onChangeText={handleChange('lastName')}
            onBlur={() => setFieldTouched('lastName')}
            placeholder="Last Name"
          />
          {touched.lastName && errors.lastName &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.lastName}</Text>
          } 
           <TextInput
            value={values.email}
            style={inputStyle}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder="email"
          />
          {touched.email && errors.email &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
          } 

          <TextInput
            value={values.password}
            style={inputStyle}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            placeholder="password"
            secureTextEntry={true}
          />
          {touched.password && errors.password &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
          } 

          <TextInput
            value={values.swap}
            style={styles.inputStyle}
            onChangeText={handleChange('swap')}
            onBlur={() => setFieldTouched('swap')}
            placeholder="swap"
          />
          {touched.swap && errors.swap &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.swap}</Text>
          }

          <TextInput
            value={values.profilePicture}
            style={styles.inputStyle}
            onChangeText={handleChange('profilePicture')}
            onBlur={() => setFieldTouched('profilePicture')}
            placeholder="profilePicture"
             />
          {touched.profilePicture && errors.profilePicture &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.profilePicture}</Text>
          }

        <TextInput
            value={values.phoneNumber}
            style={styles.inputStyle}
            onChangeText={handleChange('phoneNumber')}
            onBlur={() => setFieldTouched('phoneNumber')}
            placeholder="phoneNumber"
             />
          {touched.phoneNumber && errors.phoneNumber &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.phoneNumber}</Text>
          }

        <TextInput
            value={values.birthDate}
            style={styles.inputStyle}
            onChangeText={handleChange('birthDate')}
            onBlur={() => setFieldTouched('birthDate')}
            placeholder="birthDate"
             />
          {touched.birthDate && errors.birthDate &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.birthDate}</Text>
          }
          
          <TextInput
            value={values.type}
            style={styles.inputStyle}
            onChangeText={handleChange('type')}
            onBlur={() => setFieldTouched('type')}
            placeholder="type"
             />
          {touched.type && errors.type &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.type}</Text>
          }

        <TextInput
            value={values.address}
            style={styles.inputStyle}
            onChangeText={handleChange('address')}
            onBlur={() => setFieldTouched('address')}
            placeholder="address"
             />
          {touched.address && errors.address &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.address}</Text>
          }

        <TextInput
            value={values.membership}
            style={styles.inputStyle}
            onChangeText={handleChange('membership')}
            onBlur={() => setFieldTouched('membership')}
            placeholder="membership"
             />
          {touched.membership && errors.membership &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.membership}</Text>
          }
          
            
       
          <Button
            color={colors.black}
            title='Submit'
            disabled={!isValid}
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
    backgroundColor:colors.flord_intro,
    justifyContent:'center',
    alignItems: 'center',
    width: "100%"
  },
  imageBox:{
      width: "100%",
      height: 200,
      
  },

  formContainer: {
    padding: 50,
    width:"100%" 
  },
  inputStyle:{
    color:colors.primary,
    borderColor: colors.primary
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


