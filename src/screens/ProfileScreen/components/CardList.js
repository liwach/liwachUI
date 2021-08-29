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
                <Text style={[styles.title, styles.text]}>{item.name}</Text>
                {console.log("Category in item",item.category)}
                <Text style={[styles.category]}>{item.category}</Text>
                <View style={styles.horizontal}>
                <Text style={[styles.text]}>Swap with:</Text>
                {item.swap_type.map((prop, key) => {
                    
                    return (
                      <Text style={[styles.text]}> {prop.id},</Text>
                    );
                  })}
                </View>
                {/* <Text style={[styles.text]}>Swap with: {item.swap_types}</Text> */}
            </View>
            <View style={[styles.time]}>
            <Text style={[styles.time]}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    
)

export const CardList = ({item,navigation}) => {
   
  

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? colors.white : colors.white;
        // const color = item.id === selectedId ? colors.white : colors.black;
        // const [selectedId, setSelectedId] = useState(null);
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
            category: item.type.name,
            time: item.created_at,
            swap_type: swap_types,
            number_request: item.number_of_request,
            user: item.user == null? "":item.user.first_name,
            status: item.status,
            desc: item.description
      
          }
        return(
          <FlatListItem
            item={singleItem}
            onPress={() => 
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Post Detail Screen', {
                  item:singleItem
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
        backgroundColor:colors.background,
       
       
    },
    item:{
        flexDirection: "row",
        backgroundColor:colors.bottomNav,
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
        alignSelf:'flex-end',
        justifyContent:'flex-start',
        color:colors.flord_intro
    }


})
