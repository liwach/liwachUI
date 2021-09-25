import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../utils/colors';
import { AccountMenuItem } from './components/AccountMenuItem';
import UserAvatar from '@muhzi/react-native-user-avatar';
import { fetchuser } from '../../utils/checkFirstTimeActions';
import { getUserByID } from '../../routes/accountApi';
export const AccountScreen = ({navigation}) => {
    const [user, setUser] = useState([])
    const [url,setUrl] = useState("")

    const fetchData=async()=>{
        const user = await fetchuser().then((data)=>{return data.data})
        const userData = await getUserByID(user.id).then((data)=>{
            setUser(data)
        })
      
        setUrl(user.pic)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <View>
            <View style={styles.backgroundContainer}></View>
            <TouchableOpacity
              

                style={styles.imageBox}
            >
                <UserAvatar
                size={80}
                backgroundColor={colors.flord_intro}
                
                userName={user.first_name}
                src={url}
                />
            </TouchableOpacity>         
            <Text style={styles.textContainer}>Ola, {user.first_name} {user.last_name} </Text> 
            {/* <AccountMenuItem iconName={"md-pencil"} Title={"Edit Profile"} navigation={navigation}
                onPress={()=>navigation.navigate('EditAccountScreen'
                ,{
                    user:user
                }
                )}
            /> */}
            <AccountMenuItem iconName={"add-circle-outline"} Title={"Subscribe"} navigation={navigation}
                onPress={()=>navigation.navigate('SubscribeScreen')}
            />
           <Button color={colors.white} style={styles.button} onPress={()=>navigation.navigate("AuthScreen")}>Log out</Button>

            

        </View>
    );
};


const styles = StyleSheet.create({

    backgroundContainer:{
        backgroundColor: colors.lighter_blue,
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
        backgroundColor:colors.water,
        borderRadius:20,
        
        color:colors.white,
        width:'40%',
        alignSelf: 'center',
        marginTop: 40
    }

})