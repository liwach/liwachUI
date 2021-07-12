import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import { Button } from 'react-native-paper'
import {HeroImage} from './component/HeroImage'
import {CategoryList} from './component/FlatListItem'
import { Section } from './component/SectionList'
import { colors } from '../../utils/colors'
export const HomeScreen = (props) => {

    return(
        <ScrollView> 
            <HeroImage/>
            <Text style={styles.text}>Latest Goods</Text>
            <Section />
            <Text style={styles.text}>Latest Services</Text>
            <Section />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    HeroContainer:{
        position:'relative'
    },
    text:{
        margin:10,
        fontSize:18,
        fontWeight:'bold',
        color: colors.purple
    }
})

