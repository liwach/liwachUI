import React,{useEffect, useState} from "react"
import { 
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet, 
    Text, 
    TouchableOpacity ,
    Image 
    } from "react-native"
import { colors } from "../../../utils/colors";
import { AntDesign } from "@expo/vector-icons";


const FlatListItem = ({ item, onPress, backgroundColor, textColor }) => (
    
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
                <AntDesign style={[styles.timeTexts,styles.icons]} name='clockcircleo' size={10} color={colors.primary}  />
                <Text style={styles.timeTexts}>{item.requested_item==null?"":item.created_at}</Text>
            </View>
           {
               item.status == "open" ?
                 <View style={[styles.horizontal]}>
                 <AntDesign style={[styles.timeTexts,styles.icons]} name='closecircleo' size={25} color={colors.primary}  />
                 <AntDesign style={[styles.timeTexts,styles.icons]} name='rightcircleo' size={25} color={colors.primary}  />
             </View>
             : <View/>
           }

{
               item.status == "accepted" ?
                 <View style={[styles.horizontal]}>
                <AntDesign style={[styles.timeTexts,styles.icons]} name='swap' size={25} color={colors.primary} onPress={()=>{alert("Message")}}  />

                 <AntDesign style={[styles.timeTexts,styles.icons]} name='message1' size={20} color={colors.primary}  />

             </View>
             : <View/>
           }
           
            </View>
        </TouchableOpacity>
    
)

export const RequestCardList = ({item,navigation}) => {
    console.log(`RenderList:${item}`)
   
    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? colors.white : colors.white;
        // const color = item.id === selectedId ? colors.white : colors.black;

        // const [selectedId, setSelectedId] = useState(null);
        // console.log(`Render-item:${item.requested_item}`)

      

        // const singleItem = {
        //     requested : item.requested_item,
        //     requester : item.requester_item,
        //     status : item.status,
        //     type : item.type,
        //     time : item.updated_at,
        //     requester_user : item.requester_user
        //   }
      
        
        return(
          <FlatListItem
            item={item}
            onPress={() => 
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Post Detail Screen', {
                  item:item
                })
            }
          />
        )
      }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
              data={item}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    container:{
        marginTop: StatusBar.currentHeight || 0, 
        margin:10,
        elevation:2,
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
        backgroundColor: colors.purple,
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
