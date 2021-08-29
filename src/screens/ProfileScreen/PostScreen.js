import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {CardList} from "./components/CardList"
import { getAllItems } from '../../routes/itemsApi'
import { colors } from '../../utils/colors'



export const PostScreen = ({navigation}) => {
    
  const [data, setData] = useState([]);
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
          <View style={styles.container}>
          <CardList navigation={navigation} item={data} />
          </View>
     
  );

}

const styles = StyleSheet.create({
        container:{
            width: '100%',
            height:'100%',
            backgroundColor:colors.background
        }
})