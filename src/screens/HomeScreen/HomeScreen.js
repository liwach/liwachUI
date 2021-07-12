import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import { Button } from 'react-native-paper'
import {HeroImage} from './component/HeroImage'
import {CategoryList} from './component/FlatListItem'
export const HomeScreen = (props) => {

    return(
        <ScrollView> 
            <HeroImage/>
            <Button onPress={()=>{props.navigation.navigate("Detail Screen")}}>View Item</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    HeroContainer:{
        position:'relative'
    }
})