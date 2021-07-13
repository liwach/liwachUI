import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {View, Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import { colors } from '../../../utils/colors'
import { AntDesign } from "@expo/vector-icons"
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';





const sendRequest = (id)=> {
    alert(id.id);
}
 
const SendButton = (id) => {
    
    return(
        <TouchableOpacity style={[styles.button,styles.horizontal]} onPress={()=>{sendRequest(id)}}>
            <AntDesign style={styles.iconContainer}  name={'swap'} size={20}/>
            <Text style={{textAlign:'center',fontSize:18}}>Swap</Text>
        </TouchableOpacity>
    )
}


export const SwapBottomSheet = ({item}) => {
    const [id,selectedId] = useState("");
    const onChangeHandler = (value) => {
        selectedId(value);
        console.log(`Selected value: ${id}`);
      }
    let data = [
        {      value: 'Jacket',    },
        {      value: 'Trouser',    },
        {      value: 'Tshirt',    },
        {      value: 'Socks',    },
        {      value: 'Socks',    },
    ];
    return(
        <ScrollView style={styles.container} >
          <ScrollView>
            <Dropdown
            data={data}
            label="Swap With"
            icon="arrow"
            onChangeText={value=>onChangeHandler(value)}
            /> 
        </ScrollView>
        <View style={[styles.horizontal]}>
            
            
        </View>
        <View style={[styles.horizontal,styles.descBox]}>
            <Image style={styles.imageBox} source={item.source}/>
            <View >
             <Text style={[styles.header]}>{item.title}</Text>
             <Text style={styles.desc}>{item.description}</Text>
             <View style={{height:20}}></View>
            </View>
            <SendButton id={id}/>
        </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({

    container:{
        backgroundColor:colors.white,
        height:"100%"
    },
    horizontal:{
        flexDirection: 'row',
        
    },
    descBox:{
        marginTop:20,
        marginLeft:15,
    },
    header:{
        fontSize:24,
        marginBottom:15,
    },
    line:{
        borderBottomWidth:1,
    },
    button:{
        flex:1,
        borderRadius:20,
        width:50,
        textAlign:'center',
        borderColor:colors.black,
        borderWidth:1,
        backgroundColor:'transparent',
        height:30,
        margin:20,
        justifyContent:'center'
    },
    textContainer:{
        flex:1,
        margin:15,
        fontSize:24
    },
    iconContainer:{
        justifyContent:'center',
        marginTop:1,
        marginRight:3,
    },
    imageBox:{
        marginRight:20,
        width:80,
        height:80,
        borderRadius:20,
        
    },
    desc:{
        fontSize:14,
        textAlign:'justify',
    },
    selectSwap:{
        margin:15,
    },
    swapText:{
        width:"30%",
        fontSize:16
    }
})