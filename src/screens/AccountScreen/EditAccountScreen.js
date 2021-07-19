import { AntDesign } from "@expo/vector-icons";
import React from "react"
import {
    View,Text,StyleSheet,Image
    
} from "react-native"

import{Button, TextInput} from 'react-native-paper'
import { colors } from '../../utils/colors';

export const EditAccountScreen = ({navigation,route}) => {
    const { user } = route.params;
        return (

            <View>
            <View style={styles.backgroundContainer}></View>
            <Image style={styles.imageBox} source={require("../../assets/images/hero.png")}/>
            <AntDesign style={styles.icon} name='edit' size={20} color={colors.white}/>
            <View style={styles.textContainer}>
                <TextInput value={user.full_name} placeholder="Full Name" style={styles.textInputContainer}/>
                <TextInput value={user.phone_number} placeholder="Phone number" style={styles.textInputContainer} />
                <TextInput value={user.email_address} placeholder="Email Address" style={styles.textInputContainer}/>
            </View>
            <Button style={styles.button} color={colors.white} onPress={()=>{alert("Saved")}}>Done</Button>
        </View>


        )


}

const styles = StyleSheet.create({

    backgroundContainer:{
        backgroundColor: colors.grey,
        height:100,
        
    },

    imageBox:{
        position:'absolute',
        width: 90,
        height:90,
        borderRadius:50,
        top:50,
        alignSelf:'center'
    },

    textContainer:{
        margin:40,
        fontSize:18,
        color: colors.black,
        top:30,
        textAlign:'center'
        
    },
    textInputContainer:{
      
        margin: 20,
        height: 50
    },

    textContainer:{
        marginTop:50,
    },
    icon:{
        position:'absolute',
        top: 45,
        right: '35%',
        
    },
    button:{
        backgroundColor:colors.black,
        borderRadius: 40,
        width: '30%',
        color: colors.white,
        alignSelf: 'center',
        marginTop: 20,
    }
    
})