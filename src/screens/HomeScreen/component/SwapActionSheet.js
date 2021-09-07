import ActionSheet from "react-native-actions-sheet";
import React, { createRef,useState,useEffect } from "react";
import { View,Text,TouchableOpacity,ScrollView,Image } from "react-native";
import UserAvatar from "@muhzi/react-native-user-avatar"
import { colors } from "../../../utils/colors";
import { StyleSheet } from "react-native";
import {launchCamera,launchImageLibrary} from "react-native-image-picker"
import { ToastAndroid } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { ItemPicker } from "./ItemPicker"
import { SendButton } from "./BottomSheet";
import { fetchuser } from "../../../utils/checkFirstTimeActions";


export const SwapSheet = ({item,actionSheetRef}) => {
    const [value, setValue] = useState(null);
   
    console.log("Selected value: ",value)
   return( 
    <ScrollView style={styles.actionSheetContainer} >
   <ActionSheet ref={actionSheetRef} containerStyle={styles.actionsheet}>
    
   
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
    <View style={[styles.descBox]}>
        <View style={styles.horizontal}>
            <View style={styles.horizontalItems} >
                <Image style={styles.imageBox} source={item.picture} />
            
                <Text style={[styles.header]}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                
            </View>
            <View style={{width:150,height:"100%",margin:10}} >
                    <ItemPicker value={value} setValue={setValue}/>
            </View>
        </View>
        <SendButton selectedValue={value} item={item}/>

    </View>
   
      </ActionSheet>
      </ScrollView>
    );
} 


export const SwapActionSheet = ({actionSheetRef,item,onPress}) => {
  let actionSheet;
  const [isVisible,setVisible] = useState(false)
  const fetchData = async() => {
      const user = await fetchuser()
      console.log("itemmmmmm",JSON.stringify(item))
      if(user.id !== item.user_id){
          setVisible(true)
      }
  }
  useEffect(()=>{
      fetchData()
  },[])
  const onChangeHandler = (value) => {
    selectedId(value);
    
    console.log(`Selected value: ${id}`);
  }

  console.log("Swap Action",item.name)


const [id,selectedId] = useState("");

    return (
        <View>
            {isVisible?
        <View>
          <TouchableOpacity
            onPress={onPress}
    
            style={styles.container}
          >
       <Text  style={styles.textContainer} >Swap</Text>
          <Ionicons style={styles.iconContainer}  name={'swap-horizontal'} size={20}/>
          </TouchableOpacity>
          <SwapSheet actionSheetRef={actionSheetRef} item={item}/>
          </View>:<View/>}
          </View>
      )

 
}

const styles = StyleSheet.create({
    actionsheet:{
        height: 250,
        backgroundColor:colors.background

    },
    imageBox:{
        width:100,
        height:100,
        margin:20
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
        marginLeft:20,
        
    

    },
    horizontal:{
        flexDirection:'row',
        alignContent:'center',
        
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
        backgroundColor:colors.bottomNav,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        width: "60%"
    },

    textContainer:{
        color: colors.flord_intro2,
        marginRight:25,
        textAlign:'center',
        fontSize:17
    },
    iconContainer:{
        color:colors.flord_intro2
    },
    actionSheetContainer:{
            marginBottom: 2,
            
        
    },
    horizontalItems:{
        flex:1,
    }
})