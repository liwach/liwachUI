import React,{useState, useEffect} from "react"
import { 
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet, 
    Text, 
    TouchableOpacity  
    } from "react-native"
import { colors } from "../../../utils/colors";
import { getAllTypes } from "../../../routes/TypeApi";




const FlatListItem = ({ item, onPress, backgroundColor, textColor }) => (
        
        <TouchableOpacity onPress={onPress} >
            <Text>{item.place}</Text>
            {console.log(item.place)}
        </TouchableOpacity>
    
)

export const SearchList = ({data}) => {
  console.log(`search:${data}`)
   
  
    const swap_types = data.map(function(data, idx){
        return(
          {
            place: data.place_name,
          }
        )
       });

    console.log("Swap Types",swap_types)
   
  
   
   
    const [selectedId, setSelectedId] = useState(null);

    const [loading, setLoading] = useState(true);


    const renderItem = ({ item }) => {

        const backgroundColor = item.id === selectedId ? colors.primary : colors.peach;
        const color = item.id === selectedId ? colors.white : colors.primary;
        console.log(`render:${item}`)
        return(
          <FlatListItem
          
            item={item}
            
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        )
      }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
              data={swap_types}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              horizontal={false}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    container:{
        zIndex:3,
        alignItems:'center'
    },
    item:{
        color:colors.black,
        marginRight:20,
        padding:5,
        minWidth:80,
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.white,
        color:colors.black,

    },
    title:{
        textAlign:'center'
    }

})
