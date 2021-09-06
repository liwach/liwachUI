import { AntDesign } from "@expo/vector-icons";
import React,{createRef} from "react"
import {
    View,Text,StyleSheet,Image,TouchableOpacity
    
} from "react-native"

import{Button, TextInput} from 'react-native-paper'
import { colors } from '../../utils/colors';
import UserAvatar from "@muhzi/react-native-user-avatar";
import { ImageActionSheet } from "../ItemScreen/components/ImageActionSheet";
export const EditAccountScreen = ({navigation,route}) => {
    const { user } = route.params;
    const imageActionRef = createRef()

        return (

            <View>
            <View style={styles.backgroundContainer}>
            </View>
            <View style={styles.actionSheet}>
            {/* <ImageActionSheet actionSheetRef={imageActionRef}/>  */}
            </View>
         
                
           <AntDesign style={styles.icon} name='edit' size={20} color={colors.white}/>
            <View style={styles.textContainer}>
                <TextInput value={user.first_name} placeholder="First Name" style={styles.textInputContainer}/>
                <TextInput value={user.last_name} placeholder="Last Name" style={styles.textInputContainer}/>

                <TextInput value={user.phone_number} placeholder="Phone number" style={styles.textInputContainer} />
                <TextInput value={user.email} placeholder="Email Address" style={styles.textInputContainer}/>
            </View>
            <Button style={styles.button} color={colors.white} onPress={()=>{alert("Saved")}}>Done</Button>
        </View>


        )


}

const styles = StyleSheet.create({

    backgroundContainer:{
        backgroundColor: colors.bottomNav,
        height:100,
        borderBottomStartRadius:70,
        borderBottomEndRadius:70
        
    },
    actionSheet:{
        position: "absolute",
        top:50,

        alignSelf:'center'
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
        backgroundColor:colors.flord_intro2,
        borderRadius: 40,
        width: '30%',
        color: colors.white,
        alignSelf: 'center',
        marginTop: 20,
    }
    
})