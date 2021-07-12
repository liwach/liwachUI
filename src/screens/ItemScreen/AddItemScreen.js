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
} from "react-native";
import { Button } from 'react-native-paper';
import { CustomTextInput } from './components/CustomTextInput';
import { colors } from '../../utils/colors';
import CustomText from '../../components/UI/CustomText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {CameraButton} from "./components/UploadButton"
import { useDispatch, useSelector } from "react-redux";


//Action
import { addItem } from "../../reducers";
//PropTypes check
import PropTypes from "prop-types";

const AddItem = (props) => {
    const { handleSubmit, reset } = props;
    const dispatch = useDispatch();
   
  
    const submit = (values) => {
        
    

        console.log(values)
        const addItemThunk = addItem("myhat.jpg", "Ethiopia", "Addis Ababa", "Bole", "Summit", "Firdbet", "https://google.maps/dhjsdbshf", "Mobile");
        //dispatch(addItemThunk);
        reset();
        
    };
   
    return(
        <View style={styles.container}>
             <Field
                name="title"
                keyboardType="default"
                label="Product Title"
                component={CustomTextInput}
                icon="id-card"
                autoCapitalize={true}
              />
            <View>
                <CameraButton
                  
                />
                <View/>
            </View>
            <Field
                name="category"
                keyboardType="default"
                label="Category"
                component={CustomTextInput}
                icon="id-card"
                autoCapitalize={true}
                inputMode="text"
                value="categ"
              />
              <Field
                name="description"
                keyboardType="default"
                label="Product Description"
                component={CustomTextInput}
                icon="id-card"
                autoCapitalize={true}
              />
               <Field
                name="location"
                keyboardType="default"
                label="Location"
                component={CustomTextInput}
                icon="id-card"
                autoCapitalize={true}
              />
               <Field
                name="swap"
                keyboardType="default"
                label="Swap with"
                component={CustomTextInput}
                icon="id-card"
                autoCapitalize={true}
              />
            <Button style={styles.postButton} onPress={handleSubmit(submit)}>            
                <CustomText style={{color:colors.white,}}>Post</CustomText>
            </Button>
        </View>
    )


};



const styles = StyleSheet.create({

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

    }

}   
);

export const addItemForm = reduxForm({
    form: "addItem", // a unique identifier for this form
     // <--- validation function given to redux-form
  })(AddItem);

