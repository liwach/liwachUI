import { fetchUpdateAsync } from 'expo-updates'
import React, { useEffect,useState,createRef } from 'react'
import { TouchableOpacity } from 'react-native';
import { Text, View,SafeAreaView,FlatList, TouchableHighlight, StatusBar,StyleSheet,Image } from 'react-native'
import { getAllItem, getAllItems } from '../../routes/itemsApi';
import { colors } from '../../utils/colors';
import { CategoryList } from '../HomeScreen/component/FlatListItem';
import { SwapActionSheet } from '../HomeScreen/component/SwapActionSheet';
import { LocationSearchBox } from './components/LocationSearchBox';





export const AllItemScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const fetchData = async() => {
        const items = await getAllItem()
        setData(items)
        console.log(items)
    }
   

    useEffect(()=>{
        fetchData()
    },data)
    const Item = ({ item }) => {
        const SwapActionRef = createRef()
        const swap_types = item.item_swap_type.map(function(data, idx){
            return(
              {
                id: data.type_id,
              }
            )
           })
  
           const picture_urls = item.media.map(function(data, idx){
             const url = data.url
            return(
              url
            )
           });
  
           const pic = { uri: item.picture }
  
          console.log("picture",pic)
          const singleItem = {
            id: item.id,
            name: item.name,
            location:item.bartering_location.city,
            picture: pic,
            category: item.type == null ? "No Type": item.type.name,
            time: item.created_at,
            swap_type: swap_types,
            number_request: item.number_of_request,
            user: item.user == null? "":item.user.first_name,
            status: item.status,
            desc: item.description,
            user_id:item.user_id,
            post_type: item.bartering_location.type
      
          }
        return(
            
              <FlatListItem
                item={singleItem}
                actionRef={SwapActionRef}

                onPress={() => {
                    SwapActionRef.current?.setModalVisible();
                    
                  }}
                
                navigation={navigation}
              />
              
            )
      
      }
    return(
        <SafeAreaView style={styles.container}>
            <CategoryList filteredData={data} setFilteredData={setData} type={"item"}/>
            <FlatList
              data={data}
              renderItem={Item}
              keyExtractor={(item) => item.id}
              horizontal={false}
              numColumns={2}
            />
         </SafeAreaView>
    )



}

const FlatListItem = ({actionRef,onPress, item,navigation }) => (

    <View style={styles.listItem}> 
            <TouchableOpacity onPress={()=>navigation.navigate("Single Item",{
                item:item
            })}>
            <Image source={item.picture} style={{width:180,height:180,borderRadius:10}} />
            </TouchableOpacity>
          <Text style={styles.title}>{item.name}</Text> 
          <Text style={styles.desc}>{item.desc}</Text> 
          <SwapActionSheet 
                     onPress={onPress}
                     item={item} 
                     actionSheetRef={actionRef}
                     type="item"
                     />
              
    </View>

)


const styles = StyleSheet.create({
    container: {
      width:'100%',
      height: "100%",
      paddingTop: StatusBar.currentHeight,
      alignItems:'center'
    },
    listItem:{
        margin:5,
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
      width: "100%"
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 20,
      margin:3,
      fontWeight:'bold',
      color:colors.water

    },
    desc: {
        fontSize: 15,
        margin:2,
        color:colors.water
      }
  });