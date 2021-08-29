import React from "react"
import { View,Text,StyleSheet } from "react-native"
import { NextButton } from "./NextButton"
import Entypo from "react-native-vector-icons/Entypo"
import { colors } from "../../../utils/colors"



export const Dot = ({color}) => {
        return(
            <Entypo name={"dot-single"}  color={color} size={40}/>
        )
}

export const StarterCard = ({starter, Title, Desc, filledDot,navigation,screen}) => {
    const filled = filledDot==null?colors.flord_secondary:colors.white
    const secondFilled = filledDot=="second"? colors.flord_secondary:colors.white
    const thirdFilled = filledDot=="third"?colors.flord_secondary:colors.white
    return(
        <View style={styles.container}>
            <Text>{Title}</Text>
            <Text style={styles.textColor}>{Desc}</Text>
            <NextButton navigation={navigation} screen={screen}/>
            <View style={styles.dot}>
                <Dot color={filled} />
                <Dot color={secondFilled}/>
                <Dot color={thirdFilled} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        
      justifyContent:'center',
      alignItems:'center',
   
    },
  
    imageBox:{
      width:300,
      height:300
    },
  
    textColor:{
      color:colors.white,
      fontSize: 20,
      fontWeight:'bold'
      
    },
    dot:{
        flexDirection:'row'
    }
  })
  