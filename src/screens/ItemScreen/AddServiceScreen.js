import React,{ useState, useRef, useEffect,createRef } from 'react';

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
  Pressable
  
} from "react-native";

import { colors } from '../../utils/colors';

import * as yup from 'yup'
import { Formik } from 'formik'

import { addItem, fetchItem,requestItem,addUser,fetchRequests } from "../../reducers";
import { ImageActionSheet } from './components/ImageActionSheet';
import { TypeSeachBox } from './components/TypeSearchBox';
import { SwapTypeDropBox } from './components/SwapTypeDropBox';

export const addServiceForm = (props) => {

  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);
  const [place,setPlace] = useState([])
  const [location,setLocation] = useState([])
  const [info,setInfo] = useState([])
  const imageActionRef = createRef()
  _suggestionSelect =(result, lat, lng, text) => {
    console.log(result, lat, lng, text)
  }

  const [items, setItems] = useState([
    {label: 'Normal', value: 'normal'},
    {label: 'Premium', value: 'banana'},
    {label: 'Gold', value: 'gold'}
  ]);
  


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
    <Text style={styles.subtitle}> Add services to swap with the ones you need!</Text>
    <Text style={styles.subtitle}> Let's get you started!</Text>
    </View>
    <ImageActionSheet actionSheetRef={imageActionRef}/>
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

        {/* <AutocompletePlace onSelect={place => console.log(place)} /> */}

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
          <TypeSeachBox/> 
          <SwapTypeDropBox/> 
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
         
          
          {touched.address && errors.address &&
            <Text style={{ fontSize: 12, color: colors.flord_secondary  }}>{errors.address}</Text>
          }
            

          <Pressable style={styles.button} onPress={handleSubmit}>
                          <Text style={styles.text}>Submit</Text>
          </Pressable>
        </View>
      )}
    </Formik>
    </View>
  );


};



const styles = StyleSheet.create({

  imageBox:{
    
    width:"100%",
    height:100,
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
    backgroundColor:colors.flord_intro2,
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
    marginBottom: 10,
    color:colors.flord_intro,
    
    borderColor: colors.flord,
    borderBottomWidth: 1,
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
        alignContent:'center', 
        height:'100%',
        backgroundColor:colors.background
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

