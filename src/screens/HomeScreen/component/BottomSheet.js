import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {View, Text,Image,TouchableOpacity,ScrollView,ToastAndroid} from 'react-native'
import { colors } from '../../../utils/colors'
import { AntDesign } from "@expo/vector-icons"
// import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { Root, Popup,Toast } from 'popup-ui'
import { ItemPicker } from './ItemPicker'
import UserAvatar from '@muhzi/react-native-user-avatar'
import { addRequest } from '../../../routes/requestApi'
import { fetchuser } from '../../../utils/checkFirstTimeActions'
import { getItemsById, getItemsByName } from '../../../routes/itemsApi'
import uuid from 'react-native-uuid';
import { AlertModal } from '../../../components/UI/AlertModal'
import { getServiceById } from '../../../routes/serviceApi'



 

export const SendButton = (value,id,item,type,navigation) => {
    console.log("Send button",item)
    const itemValue = value.selectedValue
    const [showalert,setShowAlert] = useState(false)
    const [alertMsg,setAlertMessage] = useState({msg:"",title:"",color:'',navTitle:''})
    const sendRequest = async(value,id,item)=> {
        const token = uuid.v4()
        const user = await fetchuser()
        
        if(value.type=="item"){
        const requester_item = await getItemsById(value.selectedValue)
        const singleItem = requester_item[0]
        console.log(JSON.stringify(singleItem))
        if(singleItem===undefined){
            setShowAlert(true)
            setAlertMessage({msg:"Please choose an item first.",title:'Request Error',color:colors.straw}) 
        }
        if(singleItem!==undefined){
            const request = {
                "status": "open",
                "requester_id": user.id,
                "requested_item_id": value.item,
                "requester_item_id": singleItem.id,
                "rating": 0,
                "token": token,
                "type": singleItem.bartering_location.type
            }
            try{
                const response = await addRequest(request).then((data)=>{
                    if(data){
                      setShowAlert(true)
                      setAlertMessage({msg:"Request sent",title:"Request",color:colors.green,navTitle:''})
                  }
                  else{
                    setShowAlert(true)
                    setAlertMessage({msg:"Request is not sent",title:"Service",color:colors.straw,navTitle:''})
               
                  }
                  })
                }
            catch(error){
            setShowAlert(true)
            setAlertMessage({msg:JSON.stringify(error.message),title:'Request Error',color:colors.red,navTitle:''})
           }
           
        }
    }
    if(value.type=="service"){
        const requester_item = await getServiceById(value.selectedValue)
        const singleItem = requester_item[0]
        console.log(JSON.stringify(singleItem))
        if(singleItem===undefined){
            setShowAlert(true)
            setAlertMessage({msg:"Please choose an item first.",title:'Request Error',color:colors.straw}) 
        }
        if(singleItem!==undefined){
            const request = {
                "status": "open",
                "requester_id": user.id,
                "requested_item_id": value.item,
                "requester_item_id": singleItem.id,
                "rating": 0,
                "token": token,
                "type": singleItem.bartering_location.type
            }
            try{
                const response = await addRequest(request).then((data)=>{
                    if(data){
                      setShowAlert(true)
                      setAlertMessage({msg:"Request sent",title:"Request",color:colors.green,navTitle:''})
                  }
                  else{
                    setShowAlert(true)
                    setAlertMessage({msg:"Request is not sent",title:"Service",color:colors.straw,navTitle:''})
               
                  }
                  })
                }
            catch(error){
            setShowAlert(true)
            setAlertMessage({msg:JSON.stringify(error.message),title:'Request Error',color:colors.red,navTitle:''})
           }
           
        }
    }
     

       
       
    }
    return(
        <View>
        <TouchableOpacity style={{width:150,height:35,alignSelf:'center',margin:10,backgroundColor:colors.water,borderRadius:10}} onPress={()=>sendRequest(value)}>
            <Text style={[styles.swapText]}>Swap</Text>
        </TouchableOpacity>
            <AlertModal show={showalert} setShowAlert={setShowAlert} message={alertMsg} navigation={navigation}/>
            </View>
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
            <UserAvatar style={styles.imageBox} src={item.picture}/>
            <View >
             <Text style={[styles.header]}>{item.name}</Text>
             <Text style={styles.desc}>{item.description}</Text>
             <View style={{height:20}}></View>
            </View>
            <View style={{width:120,height:"100%",marginLeft:20}} >
            <ItemPicker/>
            </View>
          
        </View>
        <SendButton id={id} item={item}/>
        </ScrollView>
    )

}

const styles = StyleSheet.create({

    container:{
        backgroundColor:colors.flord_intro,
        height:"100%"
    },
    horizontal:{
        flexDirection: 'row',
        
    },
    descBox:{
        marginTop:20,
        marginLeft:15,
        color: colors.flord_secondary,
        height:100
    },
    header:{
        fontSize:24,
        marginBottom:15,
        color: colors.flord_secondary
    },
    line:{
        borderBottomWidth:1,
        color: colors.flord_secondary
    },
    button:{
        flex:1,
        width:100,
        textAlign:'center',
        padding:2,
        backgroundColor:colors.flord_intro2,
        justifyContent:'center',
        borderRadius:4,
        margin:20,
        justifyContent:'center',
        color: colors.flord_intro,
        alignSelf:'center',
        height:100
    },
    textContainer:{
        flex:1,
        margin:15,
        fontSize:24,
        color: colors.flord_secondary
    },
    iconContainer:{
        justifyContent:'center',
        marginTop:1,
        marginRight:3,
    },
    imageBox:{
        marginRight:20,
        width:90,
        height:90,
        borderRadius:20,
        
    },
    desc:{
        fontSize:14,
        textAlign:'justify',
        color: colors.flord_secondary
    },
    selectSwap:{
        margin:15,
        color: colors.flord_secondary,
        justifyContent:'center',

    },
    swapText:{
        textAlign:"center",
        lineHeight:30,
        justifyContent:'center',
        fontSize:20,
        color: colors.white
    }
})