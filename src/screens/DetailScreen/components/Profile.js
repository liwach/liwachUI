import React from 'react'
import {Image,StyleSheet,View,Text} from "react-native"
import { colors } from '../../../utils/colors'
import { AntDesign } from '@expo/vector-icons'
import UserAvatar from '@muhzi/react-native-user-avatar'


export const ProfileDetail = ({src,user,barter,time}) => {

    return(
        
        <View style={[styles.horizontal,styles.container]}>
        <Image style={styles.imageBox} source={{uri:src}} />

            <View>
                <Text style={styles.user}>{user}</Text>
                <View style={styles.horizontal}>
                    <AntDesign name={'swap'} size={13} style={styles.iconDesc}/>
                    <Text style={styles.barter}>{barter} requests</Text>
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
            marginBottom:30,
           
        },
        horizontal:{
            
            flexDirection:'row',
            
        },
        imageBox:{
            
            width:"100%",
            height:200
        },
        user:{
            fontSize:16,
            fontWeight:'bold',
            color:colors.flord,
            marginLeft:10,
        },
        barter:{
            fontSize:16,
            color:colors.flord,
            marginLeft:10,
        },
        time:{
            marginTop:20,
            
            fontSize:16,
            color:colors.flord,
            marginLeft:10,
        },
        icon:{
            marginTop:7,
        },
    
        iconDesc:{
            marginTop:4,
            color:colors.flord,
        }
    
})