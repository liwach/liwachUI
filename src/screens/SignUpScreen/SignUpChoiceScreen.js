import React from "react"
import { StyleSheet,Image,View,Text, TouchableOpacity } from "react-native"
import { colors } from "../../utils/colors"
import Fontisto from "react-native-vector-icons/Fontisto"
import FontAwesome from "react-native-vector-icons/FontAwesome"

export const SignUpChoiceScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
        <Text style={styles.header}>HELLO</Text>
        <Text style={styles.subheader}>Your bartering companion.</Text>
        <Image style={styles.imageBox} source={require('../../assets/images/signup.png')}/>
        <View style={styles.horizontal}>
            <TouchableOpacity style={styles.cardContainer} onPress={()=>navigation.navigate("SignupScreen")}>
                <Fontisto name={"person"} color={colors.flord_secondary} size={80} />
                <Text style={styles.icontext}>User</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer} onPress={()=>navigation.navigate("OrganizationScreen")}> 
               <FontAwesome name={"institution"} color={colors.flord_secondary} size={80} />
               <Text style={styles.icontext}>Company</Text>
            </TouchableOpacity>
        </View>
        </View>
    )

}


const styles = StyleSheet.create({
    horizontal:{
        margin:40,
        flexDirection:"row",
        justifyContent:'center'
    },
    container:{
       
    backgroundColor:colors.water,
 
    width: "100%",
    height: "100%"

    },
    header:{
        marginTop:"20%",
        marginLeft:35,
        color:colors.white,
        fontSize: 40,
        fontWeight:'bold'
    },
    subheader:{
        marginLeft:35,
        marginBottom:25,
        color:colors.white,
        fontSize:20
    },
    icontext:{
        color:colors.white,
        fontSize:20,
        textAlign:'center'
    },
    imageBox:{
        width: "100%",
        height: 200,
        
    },
    cardContainer : {
        borderWidth:1,
        borderColor:colors.flord_secondary,
        borderRadius: 30,
        
        width: 150,
        height:150,
        margin: 10,
        alignItems:'center',
        justifyContent:'center'
        
    }
})