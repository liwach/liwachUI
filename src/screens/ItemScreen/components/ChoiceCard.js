import { AntDesign } from "@expo/vector-icons"
import React from "react"
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import { colors } from "../../../utils/colors"


export const ChoiceCard = ({title,icon,props,name}) => {

    return(
        <TouchableOpacity style={styles.card} onPress={()=>{props.navigation.navigate({name})}}> 
            <Text style={styles.text}>{title}</Text>
            <AntDesign style={styles.icon} name={icon} size={60}></AntDesign>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

   card:{
       width: 180,
       height: 200,
       backgroundColor:colors.white,
       borderRadius:50,
       color:colors.black,
       alignItems:'center',
       justifyContent:'center',
       margin:10,
       borderStyle:'solid',
       borderWidth: 1,
       borderColor: colors.grey
   },

   icon:{
    margin:10,
   },

   text:{
    color: colors.black,
    
    fontSize:20,
   }

})