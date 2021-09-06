import React from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
const slides = [
    {
      key: 1,
      title: 'Liwach',
      text: 'Online Bartering Application',
      image: require('../../assets/images/starter-1.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 3,
      title: 'Swap Services',
      text: 'Swap your skills for something that you need.',
      image: require('../../assets/images/starter-1.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 2,
      title: 'Swap Items',
      text: 'Swap Clothes, shoes, furnitures, anything that is swapeable!',
      image: require('../../assets/images/starter-1.png'),
      backgroundColor: '#22bcb5',
    }
  ];
 
export const IntroductionScreen = ({navigation}) => {
   const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    ()=>navigation.navigate("AuthScreen")
  }
  return(
    <AppIntroSlider renderItem={_renderItem} data={slides} onDone={()=>navigation.navigate("AuthScreen")}/>
  )
  
    
  }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    slide:{
      width:'100%',
      height:'100%',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: "#0a2239"
    },
    image:{
      width:300,
      height:300
    },
    title:{
      color:colors.white,
      fontSize:50,
      textAlign:'center'
    },
    text:{
       color:colors.white,
       fontSize:20,
       textAlign:'center'
  
    }
  });
  