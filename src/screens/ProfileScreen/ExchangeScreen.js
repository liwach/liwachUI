import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {CardList} from "./components/CardList"
import { getAllItems } from '../../routes/itemsApi'
import { ExchangeCardList } from './components/ExchangeCardList'

export const ExchangeScreen = ( {navigation}) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    const items = await getAllRequests()
    
    setData(items);
    setLoading(false);
    
  };

  useEffect(() => {
    fetchData();
  }, []);
    return(
        <View>
            <ExchangeCardList navigation={navigation} item={data} />
        </View>
    )


}