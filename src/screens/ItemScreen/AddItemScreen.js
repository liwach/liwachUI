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
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import { MAPBOX_KEY } from '../../utils/config';

export const addItemForm = (props) => {

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
          .string()
          .required('Please, provide your title!'),
        category: yup
          .string()
          .required('Please, provide your category!'),
        description: yup
          .string()
          .required('Please, provide your description!'),
        location: yup
          .string()
          .required('Please, provide your location!'),
        swap: yup
          .string()
          .required('Please, provide your swap!'),
      })}
     >
      {({ values, handleChange, errors, setFieldTouched, setFieldValue, touched, isValid, handleSubmit }) => (
        <View style={styles.formContainer}>
          <TextInput
            value={values.title}
            style={inputStyle}
            onChangeText={handleChange('title')}
            onBlur={() => setFieldTouched('title')}
            placeholder="title"
          />
          {touched.title && errors.title &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.title}</Text>
          }            
          <TextInput
            value={values.category}
            style={inputStyle}
            onChangeText={handleChange('category')}
            onBlur={() => setFieldTouched('category')}
            placeholder="category"
          />
          {touched.category && errors.category &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.category}</Text>
          } 
           <TextInput
            value={values.description}
            style={inputStyle}
            onChangeText={handleChange('description')}
            onBlur={() => setFieldTouched('description')}
            placeholder="description"
          />
          {touched.title && errors.title &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.description}</Text>
          } 

          <TextInput
            value={values.location}
            style={inputStyle}
            onChangeText={handleChange('location')}
            onBlur={() => setFieldTouched('location')}
            placeholder="location"
          />
          {touched.location && errors.location &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.location}</Text>
          } 

          <MapboxAutocomplete publicKey= {MAPBOX_KEY}
                              onSuggestionSelect={_suggestionSelect}
                              country='et'
                              resetSearch={false}/>

          <TextInput
            value={values.swap}
            style={inputStyle}
            onChangeText={handleChange('swap')}
            onBlur={() => setFieldTouched('swap')}
            placeholder="swap"
          />
          {touched.swap && errors.swap &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.swap}</Text>
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
  );

};



const styles = StyleSheet.create({

  formContainer: {
    padding: 50 
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


