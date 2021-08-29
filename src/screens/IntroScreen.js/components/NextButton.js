import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { colors } from "../../../utils/colors"

export const NextButton = ({navigation,screen}) => {

    const screenName = screen==null?"IntroScreen":screen

    return(
        <TouchableOpacity     
        onPress={() => 
          navigation.navigate(screenName)} style={styles.container}>
            <Text style={styles.textColor}>Next</Text>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({

    container: {
        margin: 10,
      backgroundColor: colors.flord_secondary,
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      width: 200,
      padding: 8,
      borderRadius: 20
    },
  
    imageBox:{
      width:300,
      height:300
    },
  
    textColor:{
      color:colors.flord,
      fontSize: 20,
      fontWeight:'bold',
      textAlign:'center'
      
    }
  })
  

