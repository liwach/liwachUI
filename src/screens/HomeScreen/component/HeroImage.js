import React from "react"
import { ImageBackground } from "react-native"
import { View,Text,Image, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { colors } from "../../../utils/colors"
import { CategoryList } from "./FlatListItem"
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native"
import { Pressable } from "react-native"
export const HeroImage = ({navigation}) => {
    const imageSource = require("../../../assets/images/starter-1.png")
    const LoadAssets = async () => {
        const imageAssets = Asset.loadAsync([
          require("../../../assets/images/hero.png"),
        ]);}
    return(
        
            <View style={styles.HeroContainer}>
                   
                <ImageBackground style={styles.imageBox} source={imageSource}/>
                <CategoryList/>
                <Text  style={[styles.AD]}>Exchange 700+</Text>
                <Text  style={[styles.AD2]}>I T E M S A N D S E R V I C E S</Text>
            </View>
        
    )
}

const styles = StyleSheet.create({
    imageBox:{
        width:"100%",
        height:130,
        alignSelf:'center',
        opacity: 0.3
    },
    HeroContainer:{
        position:'relative',
        backgroundColor: colors.flord_intro2,
        width:"100%",
        marginBottom:20
    },
    horizontal:{
        flexDirection:'row',
        position: "absolute",
        top: 20,
        margin: 20
    },
    icons:{
        flex:1,
    },
    text:{
        fontSize:20,
        right:20,
        fontWeight:'bold',
        color: colors.white
    },
    AD:{
        fontSize: 30,
        top:"40%",
        left: 40,
        backgroundColor:colors.white,
        opacity: 0.7,
        borderRadius:30,
        paddingLeft: 20,
        paddingRight: 20,
        color: colors.flord_intro2,
        position:'absolute',  
    },
    AD2:{
        fontSize: 15,
        top:"68%",
       
        left: 60,
        fontWeight:'bold',
        color: colors.flord_intro,
        position:'absolute',  
    }
    
})