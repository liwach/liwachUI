import React,{useState, useEffect, createRef} from "react"
import { 
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet, 
    Text, 
    TouchableOpacity,
    Image  
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


const onPressHandler = () => {
    alert("View Item");
}

const FlatListItem = ({actionRef, navigation, item, onPress, backgroundColor, textColor }) => (

        <View style={[styles.cardContainer,backgroundColor]}> 

            <Image source={require("../../../assets/images/hero.png")} style={{width:180,borderRadius:20
}}/>
            <View style={styles.horizontalView}  >
              <View style={styles.horizontalContainer} >
                <Text style={[ styles.header]}>{item.name}</Text>
                <SwapActionSheet 
                     onPress={onPress}
                     item={item} 
                     actionSheetRef={actionRef}/>
              </View>
              <Text style={[styles.title, textColor]}>{item.desc}</Text> 
              {/* <View style={styles.horizontalContainer}>
              <Text style={[ styles.endText, textColor]} onPress={onPress}>View</Text>
              <Entypo name={"chevron-right"} size={15} color={colors.flord_secondary}/>
               </View> */}
            </View>
        </View>
    
)

export const Section = ({navigation},onPressHandler) => {
  
    
    const [selectedId, setSelectedId] = useState(null);

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
 
    const renderItem = ({ item }) => {
        console.log(`RenderItem: ${item}`)
        const SwapActionRef = createRef()

        const swap_types = item.item_swap_type.map(function(data, idx){
          return(
            {
              id: data.type_id,
            }
          )
         });

        const singleItem = {
          name: item.name,
          location:item.bartering_location.city,
          picture: "",
          category: item.type == null ? "No Type": item.type.name,
          time: item.created_at,
          swap_type: swap_types,
          number_request: item.number_of_request,
          user: item.user == null? "":item.user.first_name,
          status: item.status,
          desc: item.description
    
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
        <SafeAreaView
      
        >
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              horizontal={true}
              
            />
        </SafeAreaView>
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
      margin: 6,
     
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
      alignSelf:'center',
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
