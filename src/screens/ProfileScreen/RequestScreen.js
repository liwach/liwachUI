import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {CardList} from "./components/CardList"
import { getAllItems } from '../../routes/itemsApi'



export const RequestScreen = ({navigation}) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    const items = await getAllItems()
    setData(items);
    setLoading(false);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

    return(
        <View>
             <CardList navigation={navigation} item={data} />
        </View>
    )


}