import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {CardList} from "./components/CardList"
import { getAllItems, getItemsByUserID } from '../../routes/itemsApi'
import { colors } from '../../utils/colors'
import { fetchuser } from '../../utils/checkFirstTimeActions'



export const PostScreen = ({navigation}) => {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    // const items = await getAllItems()
    const user = await fetchuser()
    const items = await getItemsByUserID(user.id)
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