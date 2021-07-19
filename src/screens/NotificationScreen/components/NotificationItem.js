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

export const NotificationItem = ( {item,onPress}) => {

    return(
        <TouchableOpacity style={[styles.item]}>
        <View>           
             <AntDesign size={25}  style={styles.imageBox} name="rocket1"/>
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
    },
    item:{
        padding:15,
        flexDirection: "row",
        backgroundColor:colors.white,
        color:colors.white,
        
       
        minWidth:80,
     
        borderBottomWidth:1,
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
        backgroundColor: colors.black,
        borderRadius: 20,
        color: colors.white,
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

