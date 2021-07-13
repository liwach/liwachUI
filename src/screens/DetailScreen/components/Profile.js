import React from 'react'
import {Image,StyleSheet,View,Text} from "react-native"
import { colors } from '../../../utils/colors'
import { AntDesign } from '@expo/vector-icons'


export const ProfileDetail = ({user,barter,time}) => {

    return(
        <View style={[styles.horizontal,styles.container]}>
            <Image style={styles.imageBox} source={require("../../../assets/images/hero.png")}/>
            <View>
                <Text style={styles.user}>{user}</Text>
                <View style={styles.horizontal}>
                    <AntDesign name={'swap'} size={13} style={styles.iconDesc}/>
                    <Text style={styles.barter}>{barter}</Text>
                </View>
                <View style={styles.horizontal}>
                    <AntDesign name={'clockcircleo'} size={13} style={styles.iconDesc}/>
                    <Text style={styles.time}>{time}</Text>
                </View>
               
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

        container:{
            marginTop:20,
            marginBottom:30,
        },
        horizontal:{
            
            flexDirection:'row',
            
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
            color:colors.purple,
            marginLeft:10,
        },
        time:{
            fontSize:16,
            color:colors.purple,
            marginLeft:10,
        },
        icon:{
            marginTop:7,
        },
    
        iconDesc:{
            marginTop:4,
            color:colors.purple
        }
    
})