import React,{useState,useEffect} from "react"
import { TouchableOpacity } from "react-native";
import {View, Text, Button} from 'react-native'
import { colors } from "../../utils/colors";
import { TypePicker } from "./component/TypePicker";

export const TypeScreen = ({navigation, route}) => {
    const {category} = route.params
    const [selectedId, setSelectedId] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [val,setValue] = useState([])

    const subscribe = async(values) => {

    }
    console.log(category.id)
  
    const fetchData = async () => {
      const items = await getAllTypesByCategoryID(category.id)
      setData(items);
      setLoading(false);
      
    };

    useEffect(() => {
      fetchData();
    }, []);
    return(
        <View>
            <TypePicker value={val} setValue={setValue} navigation={navigation} data={category.id}/>
            <TouchableOpacity onPress={()=>alert("Subscribed to"+val)} style={{padding:10,borderRadius:20, backgroundColor:colors.flord_intro2,width:200,alignSelf:'center',margin:40}}>
                <Text style={{textAlign:'center',fontSize:20,color:colors.white}}>Subscribe</Text>
            </TouchableOpacity>
        </View>

    )
}