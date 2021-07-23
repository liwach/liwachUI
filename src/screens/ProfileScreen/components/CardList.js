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



const FlatListItem = ({ item, onPress, backgroundColor, textColor }) => (
        
        <TouchableOpacity style={[styles.item, backgroundColor]} onPress={onPress}>
            <View>           
                 <Image source={require("../../../assets/images/hero.png")} style={styles.imageBox}/>
            </View>
            <View>
                <Text style={[styles.title, styles.text]}>{item.title}</Text>
                <Text style={[styles.category]}>{item.category}</Text>
                <Text style={[styles.text]}>Swap with: {item.title}</Text>
            </View>
            <View style={[styles.time]}>
            <Text style={[styles.time]}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    
)

export const CardList = ({data,navigation}) => {
    const [selectedId, setSelectedId] = useState(null);
   
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colors.white : colors.white;
        const color = item.id === selectedId ? colors.white : colors.black;
        
        return(
          <FlatListItem
            item={item}
            onPress={() => 
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Post Detail Screen', {
                  item:item
                })
            }
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
            
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
};

const styles = StyleSheet.create({

    container:{
        marginTop: StatusBar.currentHeight || 0, 
        margin:10,
        elevation:2,
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
        color:colors.black
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
        alignSelf:'flex-end',
        justifyContent:'flex-start',
        color: colors.black
    }


})