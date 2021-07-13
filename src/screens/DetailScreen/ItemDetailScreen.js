import React from 'react'
import {Image,View,StyleSheet,Text} from "react-native"
import { OutlinedButton } from '../../components/UI/OutlinedButton'
import { colors } from '../../utils/colors'
import { ProfileDetail } from './components/Profile'
import {Button} from "react-native-paper"
import { AntDesign } from '@expo/vector-icons'


export const ItemDetailScreen = ({route, navigation}) => {
    const { title, 
    category,
    location,
    user,
    barter,
    time,
    desc,
    swap} = route.params;

    const onPressHandler = () =>{
        alert("Request Sent");
    }
    return(
        <View>
             <Image style={styles.imageBox} source={require("../../assets/images/hero.png")} />
             <View>
                 <View style={styles.horizontal}>
                     <Text style={styles.header}>{title}</Text>
                     <AntDesign name={'enviromento'} size={13} style={styles.icon}/>
                     <Text style={styles.endText}>{location}</Text>
                 </View>
                 <OutlinedButton text={category}/>
             </View>
             <ProfileDetail user={user} barter={barter} time={time}/>
             <View  style={styles.horizontal}>
                 <AntDesign name={'bars'} size={13} style={styles.iconDesc}/>
                 <Text style={{fontSize:16,color:colors.purple}} >Description</Text>
                 <Text style={styles.desc}>{desc}</Text>
             </View>
             <View  style={styles.horizontal}>
                 <AntDesign name={'swap'} size={13} style={styles.iconDesc}/>
                 <Text style={{fontSize:16,color:colors.purple,marginRight:7}} >Swap with</Text>
                 <OutlinedButton text={swap}/>
                 <OutlinedButton text={swap}/>
             </View>
             <Button color={colors.white} style={styles.button} onPress={onPressHandler}> Send Request</Button>
             
        </View>
       
    )

}


const styles = StyleSheet.create({

    container:{
        
    },
    horizontal:{
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
    },
    imageBox:{
        width:'100%',
        marginBottom:20,
    },
    header:{
        flex:1,
      
        fontSize:24,
        color:colors.purple,
        alignContent:'center',
        justifyContent:'center'
    },
    
    endText:{
        
        justifyContent:'flex-end',
        marginLeft:5,
        marginTop:4,
        fontSize:14,
        alignContent:'center'
    },
    desc:{
        width:'70%',
        marginLeft:20,
        textAlign:'justify',
        fontSize:16
    },
    button:{
        borderWidth:1,
        backgroundColor: colors.black,
        width:150,
        color:colors.white,
        alignSelf:'center'
    },
    icon:{
        marginTop:7,
    },

    iconDesc:{
        marginTop:4,
        color:colors.purple
    }

})