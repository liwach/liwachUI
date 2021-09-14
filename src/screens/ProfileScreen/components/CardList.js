import UserAvatar from "@muhzi/react-native-user-avatar";
import React,{useEffect, useState} from "react"
import { 
    View,
    FlatList,
    SafeAreaView,
    ScrollView,
    RefreshControl,
    StatusBar,
    StyleSheet, 
    Text, 
    TouchableOpacity ,
    Image 
    } from "react-native"
import { colors } from "../../../utils/colors";
import { getAllItems, getItemsByStatus, getItemsByUserID } from '../../../routes/itemsApi'
import { fetchuser } from '../../../utils/checkFirstTimeActions'
import { getServicesByUserID } from "../../../routes/serviceApi";
import { addItemForm } from "../../ItemScreen";
import { ItemFilter } from "./ItemFilter";


const FlatListItem = ({ item, onPress, backgroundColor, textColor }) => (

        
        
        <TouchableOpacity style={[styles.item, backgroundColor]} onPress={onPress}>
            <View>           
              
                 <Image  source={{uri:item.picture}} style={styles.imageBox}/>
            </View>
            <View>
                <Text style={[styles.title, styles.text]}>{item.name}</Text>
                {/* {console.log("Category in item",item.category)} */}
                <Text style={[styles.category]}>{item.category}</Text>
                <Text style={[styles.text]}>Requests : {item.number_request}</Text>
                <Text style={[styles.text]}>Status : {item.status}</Text>
                {/* <View style={styles.horizontal}>
                <Text style={[styles.text]}>Swap with:</Text>
                {item.swap_type.map((prop, key) => {
                    
                    return (
                      <Text style={[styles.text]}>{prop}</Text>
                    );
                  })}
                </View> */}
                {/* <Text style={[styles.text]}>Swap with: {item.swap_types}</Text> */}
            </View>
            <View style={[styles.time]}>
            <Text style={[styles.time]}>{item.time}</Text>
            <Text style={[styles.post]}>{item.post_type}</Text>
            </View>
        </TouchableOpacity>
    
)

export const CardList = ({item,navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user,setUser] = useState([])
  const [swapTypes,setSwapTypes] = useState([])
  const[selectedValue,setSelectedValue] = useState("")

  const fetchData = async () => {
    // const items = await getAllItems()
    const user = await fetchuser().then((data)=>{return data.data})
    console.log("From Profile",user)
    setUser(user)
    setData([])
    try{
      if(selectedValue==""||selectedValue=="all"){
        const items = await getItemsByUserID().then((resp)=>{
          console.log("Response",resp)
          if(resp!=="noitems"){
          const listItems = resp.map(function(item, idx){
            setData(data => [...data,item])
          });

          }})
          const service = await getServicesByUserID().then((resp)=>{
            console.log("Response",resp)
            if(resp!=="noitems"){
            const listItems = resp.map(function(item, idx){
              setData(data => [...data,item])
            });
            
            }})
        }
      
    
      else{
        setData([])
      }
        // const services = await getServicesByUserID(user.token).then((resp)=>{
        //   const listServ = resp.map(function(data, idx){
        //     final.push(data)
        // });
        // })
        // alert(JSON.stringify(services))
   
        setLoading(false);
      
    
    }
    catch(error){
      console.log("Error from cardlist",error.message)
    }
   
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData()
    wait(2000).then(() => setRefreshing(false));
   
  }, []);
    
    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? colors.white : colors.white;
        // const color = item.id === selectedId ? colors.white : colors.black;
        // const [selectedId, setSelectedId] = useState(null);
        // console.log("render items: ",item)
        const types = []
        if(item.bartering_location.type=="item"){
          const swap_types = item.item_swap_type.map(function(data, idx){
            // console.log("Swap_types",data)
            types.push(data.type.name)
           });
        }
        if(item.bartering_location.type=="service"){
          const swap_types = item.service_swap_type.map(function(data, idx){
            // console.log("Swap_types",data)
            // setSwapTypes(swapTypes => [...swapTypes,data])
            types.push(data.type.name)
           });
        }
      
           const picture_urls = item.media.map(function(data, idx){
            const url = data.url
           return(
             url
           )
          });
         const main_pic = {uri: item.picture}
         const pic = picture_urls[0]
          const editItem = item.user.id===user.id?true:false
          // console.log(editItem)
          const singleItem = {
            id: item.id,
            name: item.name,
            location:item.bartering_location.city,
            picture:item.picture,
            media: picture_urls,
            category: item.type.name,
            time: item.created_at,
            swap_type: types,
            number_request: item.number_of_request,
            user:item.user.first_name,
            status: item.status,
            desc: item.description,
            post_type: item.bartering_location.type 
      
          }
        return(
          <FlatListItem
            item={singleItem}
            onPress={() => 
                /* 1. Navigate to the Details route with params */
                navigation.navigate('PostDetail', {
                  item:singleItem,
                  edit:editItem
                })
            }
          />
        )
      }

    return(
               
        <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
            >
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              
            />
       </ScrollView>
      
    )
};

const styles = StyleSheet.create({

    container:{
        marginTop: StatusBar.currentHeight || 0, 
        margin:10,
        backgroundColor:colors.white,
       
       
    },
    item:{
        flexDirection: "row",
        backgroundColor:colors.white,
        color:colors.white,
        margin:5,
        padding:5,
        minWidth:80,
        borderRadius:20,
        elevation:3
    },
    horizontal:{
      flexDirection:"row"
    },
    text:{
        marginLeft:10,
        marginTop:10,
        color:colors.flord_intro
    },
    title:{
       
        fontSize:16,
        fontWeight:'bold'
    },
    imageBox:{
        width:100,
        height:100,
        borderRadius:40,
        margin:10,
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
    },
    category:{
        backgroundColor: colors.water,
        borderRadius: 20,
        color: colors.white,
        textAlign: 'center',
        width: 80,
        padding:2,
        marginLeft:10,
        marginTop:5,
        fontSize:12
    },
    time:{
        margin:5,
        flex:1,
        fontSize:15,
        alignSelf:'flex-end',
        justifyContent:'flex-start',
        color:colors.flord_intro
    },
    post:{
      fontSize: 16,
      margin:5,
      flex:1,
      alignSelf:'flex-end',
      justifyContent:'flex-start',
      color:colors.flord_intro2,
      fontWeight:"bold",
      textDecorationLine:'underline',
      textDecorationStyle:'double',
      textTransform:'uppercase',
      
    }


})
