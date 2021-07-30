import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {CardList} from "./components/CardList"
import { getAllItems } from '../../routes/itemsApi'



export const PostScreen = ({navigation}) => {
    
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
    
          <CardList navigation={navigation} item={data} />
      
     
  );

}

const styles = StyleSheet.create({

})