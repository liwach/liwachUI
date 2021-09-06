import React,{useState} from "react"
import { CategoryItem } from "./CategoryItem"
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
import { ToastAndroid } from "react-native";

export const CategoryList = ({navigation, data }) => {
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
            <FlatList
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
    item:{
        flexDirection: "row",
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
