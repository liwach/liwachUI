import React,{useState,useEffect} from "react"

import {
View, Text
} from "react-native"
import { CategoryList } from "./component/CategoryList"
import { getAllCategory, getAllTypes } from "../../routes/TypeApi"

export const SubscribeScreen = ({navigation}) => {
    const [selectedId, setSelectedId] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      const items = await getAllCategory()
      setData(items);
      setLoading(false);
      
    };

    useEffect(() => {
      fetchData();
    }, []);
    return(
        <View>
            <CategoryList navigation={navigation} data={data}/>
        </View>

    )
}