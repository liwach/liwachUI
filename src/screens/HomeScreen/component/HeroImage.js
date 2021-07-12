import React from "react"
import { View,Text,Image, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { CategoryList } from "./FlatListItem"

export const HeroImage = () => {
    const imageSource = require("../../../assets/images/hero.png")
    const LoadAssets = async () => {
        const imageAssets = Asset.loadAsync([
          require("../../../assets/images/hero.png"),
        ]);}
    return(
        
            <View style={styles.HeroContainer}>
                <Image style={styles.imageBox} source={imageSource}/>
                <CategoryList/>
            </View>
        
    )
}

const styles = StyleSheet.create({
    imageBox:{
        width:"100%",
        height:150,
    },
    HeroContainer:{
        position:'relative'
    }
})