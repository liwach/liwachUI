import React, { useEffect,useState,createRef } from 'react'
import { TouchableOpacity } from 'react-native';
import { Text, View,SafeAreaView,FlatList, TouchableHighlight, StatusBar,StyleSheet,Image } from 'react-native'
import { getAllItem, getAllItems } from '../../routes/itemsApi';
import { colors } from '../../utils/colors';
import { CategoryList } from '../HomeScreen/component/FlatListItem';
import { SwapActionSheet } from '../HomeScreen/component/SwapActionSheet';
import { LocationSearchBox } from './components/LocationSearchBox';
import { fetchuser } from '../../utils/checkFirstTimeActions';
import { getAllService } from '../../routes/serviceApi';





export const AllServiceScreen = ({navigation}) => {
    
    const [data, setData] = useState([]);
    const [user,setUser] = useState([])
    const fetchData = async() => {
        const user = await fetchuser().then((data)=>{return data.data})
        setUser(user)
        const items = await getAllService()
        setData(items)
        console.log(items)
    }
   

    useEffect(()=>{
        fetchData()
    },[])
    const Item = ({ item }) => {
        const SwapActionRef = createRef()
        const types = []
        const swap_types = item.service_swap_type.map(function(data, idx){
          // console.log("Swap_types",data)
          types.push(data.type.name)
         });
  
         
  
           const pic = { uri: item.picture }
           const editItem = item.user.id===user.id?true:false
          console.log("picture",pic)
          const singleItem = {
            id: item.id,
            name: item.name,
            location:item.bartering_location.city,
            picture:item.picture,
           
            category: item.type.name,
            time: item.created_at,
            swap_type: types,
            number_request: item.number_of_request,
            user:item.user.first_name,
            status: item.status,
            desc: item.description,
            post_type: item.bartering_location.type,
            user_id:item.user_id,
          }
        return(
            
              <FlatListItem
                item={singleItem}
                actionRef={SwapActionRef}

                onPress={() => {
                    SwapActionRef.current?.setModalVisible();
                  }}

                onCardPress={
                  () => 
                /* 1. Navigate to the Details route with params */
                navigation.navigate('PostDetail', {
                  item:singleItem,
                  edit:editItem
                })
                }
                
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

const FlatListItem = ({actionRef,onPress, item,navigation,onCardPress }) => (

    <View style={styles.listItem}> 
            <TouchableOpacity onPress={onCardPress}>
            <Image source={ {uri: item.picture}} style={{width:180,height:180,borderRadius:10}} />
            </TouchableOpacity>
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
        color:colors.water
      }
  });