import React,{useState} from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../utils/colors';
import { AccountMenuItem } from './components/AccountMenuItem';
import UserAvatar from '@muhzi/react-native-user-avatar';
export const AccountScreen = ({navigation}) => {
    const [user, setUser] = useState("")
    const current_user = {
        full_name: 'Delilah Dessalegn',
        firstName: 'Delilah',
        lastName: 'Dessalegn',
        phone_number: '+251923289633',
        email_address: 'delilahdessalegn@gmail.com',
        image: "../../assets/images/hero.png"
    }
    return(
        <View>
            <View style={styles.backgroundContainer}></View>
            <TouchableOpacity
              

                style={styles.imageBox}
            >
                <UserAvatar
                userName="Delilah Dessalegn"
                size={80}
                backgroundColor={colors.flord_intro}
                // url={image}
                />
            </TouchableOpacity>         
            <Text style={styles.textContainer}>{current_user.full_name} </Text> 
            <AccountMenuItem iconName={"md-pencil"} Title={"Edit Profile"} navigation={navigation}
                onPress={()=>navigation.navigate('EditAccountScreen'
                ,{
                    user:current_user
                }
                )}
            />
            <AccountMenuItem iconName={"add-circle-outline"} Title={"Subscribe"} navigation={navigation}
                onPress={()=>navigation.navigate('SubscribeScreen')}
            />
            <AccountMenuItem iconName={"shield-checkmark"} Title={"Change password"} navigation={navigation}/>
            <AccountMenuItem iconName={"share"} Title={"Share"} navigation={navigation}/>
            <AccountMenuItem iconName={"share"} Title={"Sign Up"} navigation={navigation} onPress={()=>navigation.navigate('SignupScreen')}/>
            <AccountMenuItem iconName={"share"} Title={"Sign Up"} navigation={navigation} onPress={()=>navigation.navigate('LoginScreen')}/>

            <Button color={colors.black} style={styles.button} onPress={()=>{alert("Logged out")}}>Log out</Button>
        </View>
    );
};


const styles = StyleSheet.create({

    backgroundContainer:{
        backgroundColor: colors.bottomNav,
        height:100,
        borderBottomStartRadius:50,
        borderBottomEndRadius:50
        
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

    button:{
        backgroundColor:colors.flord_intro2,
        borderRadius:20,
        borderColor:colors.black,
        color:colors.flord,
        width:'40%',
        alignSelf: 'center',
        marginTop: 40
    }

})