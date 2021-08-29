import React from 'react';

import {StarterCard} from './components/StarterCard';
import {View,Text, Image, StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';

export const ThirdIntroScreen = ({navigation,txtColor,desc, backColor, header, source, filledDot}) => {
  const text = header==null?"Welcome to Liwach":header
  const description = desc == null?"Liwach is where you find your item buddy.":desc
  const backgroundColor = backColor==null? colors.flord_intro2 : backColor
  return (
    <View style={[styles.container,{backgroundColor:backgroundColor}]}>
      <Text style={styles.textColor}>{text}</Text>
      <Image style={styles.imageBox} source={require('../../assets/images/starter-1.png')}  />
      <StarterCard
        
        filledDot={"third"}
        Desc={"Choose Item"}
        navigation={navigation}
        screen={"SignupChoiceScreen"}
      />
    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    
    justifyContent:'center',
    alignItems:'center',
    height:"100%"
  },

  imageBox:{
    width:300,
    height:300
  },

  textColor:{
    color:colors.white,
    fontSize: 40,
    fontWeight:'bold'
    
  }
})
