import React,{useState, useEffect, createRef} from "react"
import { 
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet, 
    Text, 
    TouchableOpacity,
    Image ,
    ScrollView,
    RefreshControl
    } from "react-native"
import { color } from "react-native-reanimated";
import { colors } from "../../../utils/colors";
import { SwapButton } from "./SwapButton";
//import { getItems, getItem, fetchitems } from "../../../reducers/items/itemActions";
import { useSelector, useDispatch } from 'react-redux';
import { SelectAllItems } from "../../../reducers/items/itemReducer";
import { getItems, selectAllItems } from "../../../redux/itemSlice";
import { getAllItems } from "../../../routes/itemsApi";
import Entypo from "react-native-vector-icons/Entypo";
import { SwapActionSheet } from "./SwapActionSheet";
import UserAvatar from "@muhzi/react-native-user-avatar";
import { getAllServices } from "../../../routes/serviceApi";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const onPressHandler = () => {
    alert("View Item");
}

const FlatListItem = ({actionRef, navigation, item, onPress, backgroundColor, textColor }) => (

        <View style={[styles.cardContainer,backgroundColor]}> 

            <UserAvatar size={150} src={item.picture} style={{width:100,borderRadius:20}} rounded={false}/>
            <View   >
              
                <Text style={[ styles.header]}>{item.name}</Text>
                <SwapActionSheet 
                     onPress={onPress}
                     item={item} 
                     actionSheetRef={actionRef}/>
              
              <Text style={[styles.title]}>{item.desc}</Text> 
              {/* <View style={styles.horizontalContainer}>
              <Text style={[ styles.endText, textColor]} onPress={onPress}>View</Text>
              <Entypo name={"chevron-right"} size={15} color={colors.flord_secondary}/>
               </View> */}
            </View>
        </View>
    
)

export const Section = ({navigation,item,type},onPressHandler) => {
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData()
    wait(2000).then(() => setRefreshing(false));
  }, []);
    
    const [selectedId, setSelectedId] = useState(null);

    const [data, setData] = useState("");
    
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      const items = await getAllItems()
      const services = await getAllServices()
      if(type=="item"){
        setData(items);
      }
      if(type=="service"){
        setData(services)
      }
      setLoading(false);
      
    };

    useEffect(() => {
      fetchData();
    }, []);
 
    const renderItem = ({ item }) => {
        console.log(`RenderItem: ${item}`)
        const SwapActionRef = createRef()

        const swap_types = type=="item"? item.item_swap_type.map(function(data, idx){
          return(
            {
              id: data.type_id,
            }
          )
         }):item.service_swap_type.map(function(data, idx){
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

        const pic = picture_urls[0]
        console.log("picture",picture_urls)
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
        const backgroundColor = item.id === selectedId ? "transparent" : "transparent";
        const color = item.id === selectedId ? colors.flord_intro : colors.flord_intro;
        return(
        <View style={styles.container}>
          <FlatListItem
            item={singleItem}
            actionRef={SwapActionRef}
            onPress={() => {
              SwapActionRef.current?.setModalVisible();
              
            }}
            
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
            navigation={navigation}
          />
          </View>
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
              extraData={selectedId}
              horizontal={true}
              
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({

    container:{
        
    
       marginLeft:10,
       marginBottom:10,
      
    },
    item:{
        
    },
    title:{
      color:colors.flord_intro,
      width:165,
      
      margin:6,
      textDecorationLine:'underline'
    },

    cardContainer:{
        width:180,
        elevation:100,
        flexDirection:'column',
        color:colors.flord_intro,
        marginRight:5,
        position:'relative'
    },
    imageBox:{
        width:180,
    },
    horizontalContainer:{
      flexDirection:'row',
      marginLeft: 6,
      marginRight:6,
      
    },
    horizontalView:{
      backgroundColor: colors.bottomNav,
      borderRadius:10,      
      position:"relative",
      height:70,
      width:170,
      
      top: -20,
      elevation:3
    },
    horizontalText:{
      flex:1,
      color:colors.flord_intro,
    },
    header:{
      flex:1,
      fontSize:14,
      fontWeight:'bold',
      textTransform:'uppercase',
      color: colors.flord,
      margin: 6,
    },
    endText:{
      marginLeft:6,
      justifyContent:"flex-end",
      alignSelf:"flex-end",
      color:colors.flord_intro,
      fontWeight:"bold"

    },
    shadow:{  
      borderWidth:0.5,
      borderTopWidth:0,
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20,
      borderColor:colors.purple,
      shadowOffset: { width: 7, height: 7 },  
      shadowColor: colors.light_grey,  
      shadowOpacity: 0.8,  
      //elevation: 3, //--This is for android, fix it later 
      zIndex:999,
       
    },
    swap:{
      color: colors.purple
    }

})
