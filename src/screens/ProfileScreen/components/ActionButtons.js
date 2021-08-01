import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

export const ExchangeButton = ({item}) => {
    console.log(item)

    return(
        <AntDesign style={[styles.timeTexts,styles.icons]} name='swap' size={25} color={colors.primary} onPress={()=>{alert("Message")}}  />
    )

}

export const ChatButton = ({item}) => {
    console.log(item)

    return (
        <AntDesign style={[styles.timeTexts,styles.icons]} name='message1' size={20} color={colors.primary} onPress={()=>{alert(sendMessage("","Text","shdjfhjdkfdk",1))}}  />
    )

}




const styles = StyleSheet.create({

    container:{
        marginTop: 10, 
        margin:10,
        elevation:2,
    },
    horizontal : {
        flexDirection:'row',
        flex:1,
        alignContent:'flex-end',
        justifyContent:'flex-end',
    },
    item:{
        flexDirection: "row",
        backgroundColor:colors.white,
        color:colors.white,
        margin:5,
        padding:5,
        minWidth:80,
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.white
    },
    text:{
        marginLeft:10,
        marginTop:10,
        color:colors.primary
    },
    title:{
       
        fontSize:16,
        fontWeight:'bold'
    },
    imageBox:{
        width:60,
        height:60,
        borderRadius:40,
        margin:10,
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
    },
    category:{
        backgroundColor: colors.purple,
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
        margin:5,
        flex:1,
        fontSize:10,
        flexDirection: "row",
        alignContent:'flex-end',
        justifyContent:'flex-end',
       
    },
    status: {
        textTransform:"uppercase",
        color: colors.grey,
        fontSize: 12,
        textAlign:'center'
    },

    timeTexts:{
       
        alignContent:'flex-end',
        justifyContent:'flex-end',
        color: colors.primary,
        marginRight: 2,
    },
    icons:{
        marginTop:4,
        marginRight:4
    }

})
