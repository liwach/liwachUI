import React from 'react'
import {Image,StyleSheet,View,Text} from "react-native"
import { colors } from '../../../utils/colors'

export const ProfileDetail = ({user,barter,time}) => {

    return(
        <View style={styles.horizontal}>
            <Image style={styles.imageBox} source={require("../../../assets/images/hero.png")}/>
            <View>
                <Text style={styles.user}>{user}</Text>
                <Text style={styles.barter}>{barter}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

        container:{
            marginTop:20,
        },
        horizontal:{
            marginTop:20,
            flexDirection:'row',
            marginBottom:30,
        },
        imageBox:{
            borderRadius:50,
            width:70,
            height:70,
            marginLeft:20,
            marginRight:33,
        },
        user:{
            fontSize:16,
            fontWeight:'bold'
        },
        barter:{
            fontSize:16,
            color:colors.purple
        },
        time:{
            fontSize:16,
            color:colors.purple
        },
})