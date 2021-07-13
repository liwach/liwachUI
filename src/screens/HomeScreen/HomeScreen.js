import React from 'react'
import {View, Text, ScrollView, StyleSheet,Button} from 'react-native'

import {HeroImage} from './component/HeroImage'
import {CategoryList} from './component/FlatListItem'
import { Section } from './component/SectionList'
import { colors } from '../../utils/colors'


export const HomeScreen = ({navigation}) => {

    return(
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        > 
            <HeroImage/>
            <Text style={styles.text}>Latest Goods</Text>
            <Section navigation={navigation}  />
            <Text style={styles.text}>Latest Services</Text>
            <Section navigation={navigation} />
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

