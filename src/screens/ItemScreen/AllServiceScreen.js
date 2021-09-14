import { fetchUpdateAsync } from 'expo-updates'
import React, { useEffect,useState,createRef } from 'react'
import { Text, View,SafeAreaView,FlatList, TouchableHighlight, StatusBar,StyleSheet,Image } from 'react-native'
import { getAllItems } from '../../routes/itemsApi';
import { getAllService, getAllServices } from '../../routes/serviceApi';
import { colors } from '../../utils/colors';
import { CategoryList } from '../HomeScreen/component/FlatListItem';
import { SwapActionSheet } from '../HomeScreen/component/SwapActionSheet';





export const AllServiceScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const fetchData = async() => {
        try{
            const items = await getAllService()
            setData(items)
            console.log(items)
        }
        catch(error){
            console.log(error.message)
        }
       
    }
   

    useEffect(()=>{
        fetchData()
    },[])
    const Item = ({ item }) => {
        const SwapActionRef = createRef()
        const swap_types = item.service_swap_type.map(function(data, idx){
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
            <CategoryList filteredData={data} setFilteredData={setData} type={"service"}/>
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
            <Image source={item.picture} style={{width:180,height:180,borderRadius:10}} />
          <Text style={styles.title}>{item.name}</Text> 
          <Text style={styles.desc}>{item.desc}</Text> 
          <SwapActionSheet 
                     onPress={onPress}
                     item={item} 
                     actionSheetRef={actionRef}
                     type="service"
                     navigation={navigation}
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
        color:colors.water,
        width:180
      }
  });