import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {CardList} from "./components/CardList"
import { getAllItems, getItemsByStatus } from '../../routes/itemsApi'
import { ExchangeCardList } from './components/ExchangeCardList'
import { getAllRequestsBySenderID } from '../../routes/requestApi'
import { fetchuser } from '../../utils/checkFirstTimeActions'
import { getRequestByStatus } from '../../routes/exchangeApi'

export const ExchangeScreen = ( {navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    const user = await fetchuser()
    const items = await getItemsByStatus(user.id,"bartered")
    setData(items);
    setLoading(false);
    // alert(items)
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