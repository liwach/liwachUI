import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {RequestCardList} from "./components/RequestCardList"
import { getAllRequests } from '../../routes/requestApi'



export const RequestScreen = ({navigation}) => {
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
             <RequestCardList navigation={navigation} item={data} />
        </View>
    )


}