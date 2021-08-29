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
import { ExchangeButton, ChatButton } from "./ActionButtons";
import Icon  from "react-native-vector-icons/Ionicons";
import { exchangeItem } from "../../../routes/exchangeApi";


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



const FlatListItem = ({navigation, item, onPress, onMessagePress, backgroundColor, textColor }) => (

        
    
        <TouchableOpacity style={[styles.item, backgroundColor]} >
            <View>           
                 <Image source={require("../../../assets/images/hero.png")} style={styles.imageBox}/>
                 <Text style={[styles.status]}>{item.status}</Text>
            </View>
            <View>
                <Text style={[styles.title, styles.text]}>{item.requested_item==null?"":item.requested_item.name}</Text>
                <Text style={[styles.category]}>{item.requested_item==null?"":item.requested_item.typeId}</Text>
                <Text style={[styles.text]}>Swap with: {item.requester_item==null?"":item.requester_item.name}</Text>
            </View>
            <View style={{flexDirection:'column',flex:1}}>
            <View style={[styles.time]}>
                <Icon style={[styles.timeTexts,styles.icons]} name='time' size={10} color={colors.primary}  />
                <Text style={styles.timeTexts}>{item.requested_item==null?"":item.created_at}</Text>
            </View>
           {
               item.status == "open" ?
                 <View style={[styles.horizontal]}>
                 <Icon style={[styles.timeTexts,styles.icons]} name='close-circle' size={25} color={colors.primary}  />
                 <Icon style={[styles.timeTexts,styles.icons]} name='checkmark-circle-sharp' size={25} color={colors.primary}  />
             </View>
             : <View/>
           }

{
               item.status == "accepted" ?
                 <View style={[styles.horizontal]}>
                 <ExchangeButton navigation={navigation} item={item}/>
                 <ChatButton navigation={navigation} item={item}/>

             </View>
             : <View/>
           }

            {
               item.status == "expired" ?
                 <View style={[styles.horizontal]}>
                <Icon style={[styles.timeTexts,styles.icons]} name='arrow-undo-circle' size={25} color={colors.primary} onPress={()=>{
                    exchangeItem(item.id,item.status)
                    
                    }}  />


             </View>
             : <View/>
           }
           
            </View>
        </TouchableOpacity>
    
)

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export const ExchangeCardList = ({item,navigation}) => {
    const [refreshing, setRefreshing] = React.useState(false);
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const renderItem = ({ item }) => {

        
        return(
          <FlatListItem
            item={item}
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
        <SafeAreaView style={styles.container}>
            <ScrollView
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />}
            >
            <FlatList
              data={item}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              
            />
            </ScrollView>
        </SafeAreaView>
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
        backgroundColor:colors.bottomNav,
        color:colors.flord_intro,
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
        fontWeight:'bold'
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
        backgroundColor: colors.bottomNav,
        borderRadius: 20,
        color: colors.flord_intro,
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
        color: colors.grey,
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
    }

})
