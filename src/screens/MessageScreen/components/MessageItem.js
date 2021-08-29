import React from "react"
import {
TouchableOpacity,
View,
Image,
Text,
StyleSheet
} from 'react-native'
import {colors} from '../../../utils/colors'
import UserAvatar from "@muhzi/react-native-user-avatar"

export const MessageItem = ({item,onPress}) => {
   
    return(
        <TouchableOpacity style={[styles.item]} onPress={onPress}>
        <View>           
   
              <UserAvatar
              userName={item.other_user}
              size={60}
              backgroundColor={colors.flord_intro}
              fontSize={20}
              // url={image}
              />
       </View>
        <View>
            <Text style={[styles.title, styles.text]}>{item.other_user}</Text>
            <Text style={[styles.category]}>{item.title}</Text>
            <Text style={[styles.text]}>{item.message}</Text>
        </View>
        <View style={[styles.time]}>
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
        padding:10,
        flexDirection: "row",
        backgroundColor:colors.background,
        color:colors.white,
        
       
        minWidth:80,
     
        borderBottomWidth:0.5,
        borderColor:colors.grey,
    
    },
    text:{
        marginLeft:10,
        marginTop:5,
        color:colors.primary
    },
    title:{
        color:colors.primary,
        fontSize:16,
        fontWeight:'bold'
    },
    imageBox:{
        width:50,
        height:50,
        borderRadius:40,
        margin:10
    },
    category:{
        backgroundColor: colors.flord_intro2,
        borderRadius: 20,
        color: colors.primary,
        textAlign: 'center',
        width: 80,
        padding:2,
        marginLeft:10,
        marginTop:5,
        fontSize:12,

    },
    time:{
        margin:5,
        flex:1,
        fontSize:10,
        alignSelf:'flex-end',
        justifyContent:'flex-start',
        color:colors.primary
    }


})