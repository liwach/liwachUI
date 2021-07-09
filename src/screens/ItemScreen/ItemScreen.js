import React, { useState } from "react"
import {View, Text, StyleSheet} from "react-native"
import { Button } from "react-native-paper"
import { colors } from "../../utils/colors"

import { ChoiceCard } from "./components/ChoiceCard"
import { PostButton } from "./components/PostButton"

export const ItemOptionsScreen = (props) => {

    const isSelected = useState("item");

    return(
        <View style={styles.TopContainer}>
            <Text style={styles.TextContainer}>CHOOSE YOUR ITEM</Text>
            <View style={styles.CardContainer}>
                
                <ChoiceCard  title={"Item"} icon={"profile"} name={"Add Product"} props={props}>Add Product</ChoiceCard>
                <ChoiceCard title={"Service"} icon={"user"} name={"Add Service"} props={props} onPress={()=>{props.navigation.navigate("Add Service")}}>Add Services</ChoiceCard>
            </View>
            {/* <PostButton name={"Next"} props={props}></PostButton> */}
        </View>
        
    )
}


const styles = StyleSheet.create({

    CardContainer:{
        width:'100%',
        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    TextContainer:{
         fontWeight: "bold",
         margin:20,
         fontSize:20,
         
    },
    TopContainer:{
        alignItems:'center',
        flexDirection:'column',
        alignSelf:'center',
        top:'25%',
    },

    

})