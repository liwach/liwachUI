import React,{useState,useEffect} from "react"
import { CategoryItem } from "./CategoryItem"
import { 
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet, 
    Text, 
    TouchableOpacity ,
    Image, 
    ScrollView
    } from "react-native"
import { colors } from "../../../utils/colors";
import { ToastAndroid } from "react-native";
import { getSubscriptions } from "../../../routes/accountApi";

export const CategoryList = ({navigation, data }) => {
    const [subscriptionList,setSubscriptionList] = useState([]);
    const fetchData = async() =>{
        const response = await getSubscriptions().then((data)=>{
            setSubscriptionList(data)
            return data
        })
        console.log("in sub",subscriptionList)
    }

    useEffect(()=>{
        fetchData()
    },[])
    // alert(data)
    const [selectedId, setSelectedId] = useState(null);
    const category = data[0]
    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? colors.white : colors.white;
        // const color = item.id === selectedId ? colors.white : colors.black;
        return(
            <CategoryItem
            item={item}
            onPress={ ()=>navigation.navigate("TypeScreen",{
                category:item
            })
            }
         
            />
        )
        }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.subtitle}> You have subscribed to types below!</Text>
            <ScrollView style={{width:"100%",height:80}}>
            <TouchableOpacity style={styles.horizontal} onPress={()=>{}}>
            {subscriptionList!=[]?subscriptionList.map((prop, key) => {
                        // console.log("subscription",prop.url)   
                            return (
                               
                                    <Text style={styles.subscribed}>{prop.type.name}</Text>
                                
                                );
                        }):<View></View>}
            </TouchableOpacity>
            </ScrollView>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({

    container:{
       
        elevation:2,
        
    },
    subscribed:{
        top: 15,
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight:'bold',
        marginBottom:10,
        marginRight:10,
        padding:5,
        borderRadius:8,
        backgroundColor:colors.grey
    },
    horizontal:{
        flexDirection:'row',
        alignSelf:'center',
        height:50
    },
    item:{
     
        backgroundColor:colors.white,
        color:colors.white,
       
        minWidth:80,
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.white
    },
    text:{
        marginLeft:10,
        marginTop:10
    },
    title:{
       
        fontSize:20,
        fontWeight:'bold'
    },
    imageBox:{
        width:50,
        height:50,
        borderRadius:80,
        margin:10
    },
    category:{
        backgroundColor: colors.black,
        borderRadius: 40,
        color: colors.white,
        textAlign: 'center',
        width: 80,
        padding:2,
        marginLeft:10,
        marginTop:5,
        fontSize:12
    },
    subtitle:{
      
        top: 15,
        color: colors.flord,
        textAlign: 'center',
        fontSize: 20,
        fontWeight:'bold',
        marginBottom:10,
        padding:10,
      },
    time:{
        margin:5,
        flex:1,
        fontSize:10,
        alignSelf:'flex-end',
        justifyContent:'flex-start',
        color: colors.black,
        width: 20,
    }


})
