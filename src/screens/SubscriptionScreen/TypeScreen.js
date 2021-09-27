import React,{useState,useEffect} from "react"
import { ToastAndroid, TouchableOpacity } from "react-native";
import {View, Text, Button} from 'react-native'
import { subscribeType } from "../../routes/accountApi";
import { getAllTypesByCategoryID } from "../../routes/TypeApi";
import { fetchuser } from "../../utils/checkFirstTimeActions";
import { colors } from "../../utils/colors";
import { TypePicker } from "./component/TypePicker";

export const TypeScreen = ({navigation, route}) => {
    const {category} = route.params
    const [selectedId, setSelectedId] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [val,setValue] = useState([])

    const subscribe = async() => {

      if(val!=[]){val.map(async(prop, key) => {
         const response = await subscribeType(prop).then((data)=>{
           if(data.success){
             ToastAndroid.show("Subscribed!",ToastAndroid.SHORT)
           }
         })
      })
  
    }
  }
  
    const fetchData = async () => {
      // const items = await getAllTypesByCategoryID(category.id)
      const user = await fetchuser().then((data)=>{return data.data})

      setData(category.type);
      setLoading(false);
      console.log("In Type Screen",category.type)
      
    };

    useEffect(() => {
      fetchData();
    }, []);
    return(
        <View>
            
            <TypePicker value={val} setValue={setValue} navigation={navigation} data={category}/>
            <TouchableOpacity onPress={()=>{subscribe()}} style={{padding:10,borderRadius:20, backgroundColor:colors.water,width:200,alignSelf:'center',margin:40}}>
                <Text style={{textAlign:'center',fontSize:20,color:colors.white}}>Subscribe</Text>
            </TouchableOpacity>
        </View>

    )
}