import ActionSheet from "react-native-actions-sheet";
import React, { createRef,useState } from "react";
import { View,Text,TouchableOpacity,ScrollView,Image } from "react-native";
import UserAvatar from "@muhzi/react-native-user-avatar"
import { colors } from "../../../utils/colors";
import { StyleSheet } from "react-native";
import {launchCamera,launchImageLibrary} from "react-native-image-picker"
import { ToastAndroid } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { ItemPicker } from "./ItemPicker"
import { SendButton } from "./BottomSheet";


export const SwapSheet = ({item,actionSheetRef}) => {
   return( 
   <ActionSheet ref={actionSheetRef} containerStyle={styles.actionsheet}>
    
    <ScrollView style={styles.actionSheetContainer} >
      {/* <ScrollView>
        <Dropdown
        data={data}
        label="Swap With"
        icon="arrow"
        onChangeText={value=>onChangeHandler(value)}
        /> 
    </ScrollView> */}
    <View style={[styles.horizontal]}>
        
    </View>
    <View style={[styles.horizontal,styles.descBox]}>
        <View style={styles.horizontalItems} >
        <Image style={styles.imageBox} source={require("../../../assets/images/laptop.png")}/>
       
         <Text style={[styles.header]}>{item.name}</Text>
         <Text style={styles.desc}>{item.desc}</Text>
         
        </View>
        <View style={{width:150,height:"100%",margin:10}} >
        <ItemPicker/>
        </View>
      
    </View>
    <SendButton item={item}/>
    </ScrollView>
      </ActionSheet>
    
    );
} 


export const SwapActionSheet = ({actionSheetRef,item,onPress}) => {
  let actionSheet;
  const onChangeHandler = (value) => {
    selectedId(value);
    
    console.log(`Selected value: ${id}`);
  }

  console.log("Swap Action",item.name)
let data = [
    {      value: 'Jacket',    },
    {      value: 'Trouser',    },
    {      value: 'Tshirt',    },
    {      value: 'Socks',    },
    {      value: 'Socks',    },
];

const [id,selectedId] = useState("");
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}

        style={styles.container}
      >
      <Text  style={styles.textContainer} >Swap</Text>
      <Ionicons style={styles.iconContainer}  name={'swap-horizontal'} size={20}/>
      </TouchableOpacity>
      <SwapSheet actionSheetRef={actionSheetRef} item={item}/>
      </View>
  );
}

const styles = StyleSheet.create({
    actionsheet:{
        height: 220,
        backgroundColor:colors.bottomNav

    },
    header:{
        textTransform:"uppercase",
        fontWeight:'bold',
        color: colors.flord_intro,
        marginLeft:20
    },
    desc:{
        textTransform:"uppercase",
        fontSize:12,
        fontWeight:'bold',
        color: colors.flord_intro2,
        marginLeft:20

    },
    horizontal:{
        flexDirection:'row',
        alignContent:'center'
    },
    icon:{},
    text:{
        fontWeight:'bold',
        color:colors.flord_intro
    },
    component:{
        marginTop:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        flexDirection:'row',
        
        margin: 6,
        paddingLeft:7,
        paddingRight:7,
        borderRadius: 10,
        height:25,
        backgroundColor:colors.bottomNav
    },

    textContainer:{
        color: colors.flord_intro2,
        marginRight:5,
    },
    iconContainer:{
        color:colors.flord_intro2
    },
    actionSheetContainer:{
            margin: 10,
            height:"100%"
        
    },
    horizontalItems:{
        flex:1,
    }
})