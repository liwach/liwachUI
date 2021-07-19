import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../utils/colors';
import { AccountMenuItem } from './components/AccountMenuItem';

export const AccountScreen = ({navigation}) => {
    const current_user = {
        full_name: 'Delilah Dessalegn',
        phone_number: '+251923289633',
        email_address: 'delilahdessalegn@gmail.com',
        image: "../../assets/images/hero.png"
    }
    return(
        <View>
            <View style={styles.backgroundContainer}></View>
            <Image style={styles.imageBox} source={require("../../assets/images/hero.png")}/>
            <Text style={styles.textContainer}>{current_user.full_name} </Text> 
            <AccountMenuItem iconName={"edit"} Title={"Edit Profile"} navigation={navigation}
                onPress={()=>navigation.navigate('EditAccountScreen'
                ,{
                    user:current_user
                }
                )}
            />
            <AccountMenuItem iconName={"adduser"} Title={"Subscribe"} navigation={navigation}
                onPress={()=>navigation.navigate('SubscribeScreen')}
            />
            <AccountMenuItem iconName={"checksquare"} Title={"Change password"} navigation={navigation}/>
            <AccountMenuItem iconName={"sharealt"} Title={"Share"} navigation={navigation}/>
        </View>
    );
};


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
        
    }
})