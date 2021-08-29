import { AntDesign } from "@expo/vector-icons"
import React from "react"
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    StyleSheet
    } from 'react-native'
    import {colors} from '../../../utils/colors'
import Ionicons from "react-native-vector-icons/Ionicons"
export const NotificationItem = ( {item,onPress}) => {

    return(
        <TouchableOpacity style={[styles.item]}>
        <View>           
             <Ionicons size={25} color={colors.flord_intro2} style={styles.imageBox} name="rocket"/>
        </View>
        <View style={[styles.text]}>

            <Text style={[styles.text]}>{item.message}</Text>
            <Text style={[styles.category]}>{item.tag}</Text>
           
        </View>
        <View>
        <Text style={[styles.time]}>{item.time}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container:{
        marginTop: 10, 
        margin:15,
        elevation:2,
        padding:5,
        backgroundColor:colors.background,
    },
    item:{
        padding:15,
        flexDirection: "row",
        backgroundColor:colors.background,
        color:colors.white,
        
       
        minWidth:80,
     
        borderBottomWidth:0.5,
        borderColor:colors.grey
    },
    text:{
        marginLeft:10,
        
        color:colors.black,
        width:"70%"
    },
    title:{
       
        fontSize:20,
        fontWeight:'bold'
    },
    imageBox:{
       
        borderRadius:40,
        margin:10
    },
    category:{
        backgroundColor: colors.bottomNav,
        borderRadius: 20,
        color: colors.flord_intro,
        textAlign: 'center',
        width: 80,
        padding:2,
        marginLeft:10,
        marginTop:5,
        fontSize:12
    },
    time:{
       
        color: colors.black
    }


})

