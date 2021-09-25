import React,{useEffect, useState} from "react"
import { 
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet, 
    Text, 
    TouchableOpacity ,
    Image,
    Modal, 
    Alert,
    ScrollView,
    RefreshControl
    } from "react-native"
import { colors } from "../../../utils/colors";
import { AntDesign } from "@expo/vector-icons";
import { sendMessage } from "../../../routes/messageApi";
import { ExchangeButton, ChatButton } from "../../ProfileScreen/components/ActionButtons";
import Icon  from "react-native-vector-icons/Ionicons";
import { exchangeItem } from "../../../routes/exchangeApi";
import { fetchuser } from "../../../utils/checkFirstTimeActions";
import { OutlinedButton } from "../../../components/UI/OutlinedButton";
import UserAvatar from "@muhzi/react-native-user-avatar";
import { acceptRequests, getAllRequestsByItemID, getAllRequestsBySenderID } from "../../../routes/requestApi";
import { getItemsById, getItemsByUserID } from "../../../routes/itemsApi";



const ModalBox = ({visible}) => {
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose = { () => {
                Alert.alert("Modal is closed")
            }

            }
        />
    )
}

const acceptRequest = async(item) => {

    const request = {
        "id": item.id,
        "status": "accepted",
      }

    const requestResponse = await acceptRequests(request).then((data)=>{
        if(data.status=="accepted"){
            return true
        }
    })
    return requestResponse

}



const FlatListItem = ({fetch,requester_item,status,setStatus,user,navigation, item, onPress, onMessagePress, backgroundColor, textColor }) => (

        
    
        <TouchableOpacity style={[styles.item, backgroundColor]} >
            <View>           
                 <UserAvatar src={"https://res.cloudinary.com/liwach/image/upload/v1630498342/gcopiey4x4uk65uvujp2.jpg"} style={styles.imageBox}/>
                 <Text style={[styles.status]}>{item.status}</Text>
            </View>
            <View>
                {/* {console.log("Requester",item)} */}
                <Text style={[styles.title, styles.text]}>{item.requester_item_id}</Text>
                {/* <Text style={[styles.category]}>{item.requested_item==null?"":item.requested_item.type_id}</Text> */}
                <Text style={[styles.text]}>Requester:{item.requester_id}</Text>
            </View>
            <View style={{flexDirection:'column',flex:1}}>
            <View style={[styles.time]}>
                <Icon style={[styles.timeTexts,styles.icons]} name='time' size={10} color={colors.primary}  />
                <Text style={styles.timeTexts}>{item.created_at}</Text>
            </View>
          
            {
               status == "open"&&user.id!=item.requester_id ?
                 <View style={[styles.horizontal]}>
                 <Icon style={[styles.timeTexts,styles.icons]} name='close-circle' size={30} color={colors.water}  />
                 <Icon style={[styles.timeTexts,styles.icons]} onPress={()=>acceptRequest(item)} name='checkmark-circle-sharp' size={30} color={colors.water}  />
             </View>
             : <View/>
           }

            {
               item.status == "pending"&&user.id!=item.requester_id ?
                 <View style={[styles.horizontal]}>
                 <Icon style={[styles.timeTexts,styles.icons]} name='close-circle' size={40} color={colors.water}  />
                 <Icon style={[styles.timeTexts,styles.icons]} onPress={async()=>{
                     const isAccepted = await acceptRequest(item).then((data)=>{
                            return data
                     })
                     if(isAccepted){
                     
                         fetch()
                     }
                }} name='checkmark-circle-sharp' size={40} color={colors.water}  />
             </View>
             : <View/>
           }
{
               item.status == "accepted"&&user.id!=item.requester_id?
                 <View style={[styles.horizontal]}>
                 <ExchangeButton navigation={navigation} item={item} fetch={fetch}/>
                 <ChatButton navigation={navigation} item={item}/>

             </View>
             : <View style={[styles.horizontal]}>
             </View>
           }

          
           
            </View>
        </TouchableOpacity>
    
)

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export const VerticalFlatList = ({data,requests,navigation,type}) => {
    
    const [requestList, setRequestList] = useState("");
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const [oneFinal,setOneFinal] = useState([])   
    const [refreshing, setRefreshing] = React.useState(false);
    const  [userData,setUserData] = useState([]) 
    const [req,setReq] = useState([])
    const [requestStatus,setRequestStatus] = useState("pending")
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchData()       
        wait(500).then(() => setRefreshing(false));
    }, []);

 

  const fetchData = async () => {
    const user = await fetchuser().then((data)=>{return data.data})
    setUserData(user)
      setReq([])
    const reques = requests.map(async(reqst, idx)=>{
        console.log(reqst.requester_item_id)
        const requestsItems = await getItemsById(reqst.requester_item_id).then((data)=>{
            // console.log("data in requester",data)
            setReq(req => [...req,data] );
            return data
        })
       }); 

    

  }
  useEffect(() => {
    fetchData();
  }, []);
    const renderItem = ({ item }) => {
        

        console.log("Render ",item.type)
      
       
        return(
          <FlatListItem
            item={item}
            status={requestStatus}
            setStatus={setRequestStatus}
            fetch={fetchData}
            user={userData}
            requester_item={req}
            navigation={navigation}
            onPress={() => 
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Post Detail Screen', {
                  item:item
                })}
          
          />
        )
      }

    return(
     
            <ScrollView
            style={{height:"100%",width:"100%"}}
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />}
            >
            <FlatList
              data={requests}
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
    },
    horizontal : {
        flexDirection:'row',
        flex:1,
        alignContent:'flex-end',
        justifyContent:'flex-end',
    },
    item:{
        flexDirection: "row",
        backgroundColor:colors.white,
        color:colors.white,
        margin:5,
        padding:5,
        minWidth:80,
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.white
    },
    text:{
        marginLeft:10,
        marginTop:10,
        color:colors.primary
    },
    title:{
       
        fontSize:16,
        fontWeight:'bold',
        textTransform:"uppercase"
    },
    imageBox:{
        width:60,
        height:60,
        borderRadius:40,
        margin:10,
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
    },
    category:{
        backgroundColor: colors.flord_intro2,
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
        fontSize:10,
        flexDirection: "row",
        alignContent:'flex-end',
        justifyContent:'flex-end',
       
    },
    status: {
        textTransform:"uppercase",
        color: colors.flord_intro2,
        fontSize: 12,
        textAlign:'center'
    },

    timeTexts:{
       
        alignContent:'flex-end',
        justifyContent:'flex-end',
        color: colors.primary,
        marginRight: 2,
    },
    icons:{
        marginTop:4,
        marginRight:4
    },
    req:{
        fontWeight:'bold',
        color: colors.flord_intro2,
    }

})
