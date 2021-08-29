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

        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item.name}</Text>
        </TouchableOpacity>
    
)

export const CategoryList = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
  
  
    const fetchData = async () => {
      const items = await getAllTypes()
      setData(items);
      setLoading(false);
      
    };

    useEffect(() => {
      fetchData();
    }, []);



    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colors.flord_intro : colors.flord_intro2;
        const color = item.id === selectedId ? colors.white : colors.white;
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
        position:'absolute',
        marginTop: 10,
        height:30,
        
    },
    item:{
        color:colors.white,
        marginRight:20,
        padding:5,
        minWidth:80,
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.flord_secondary
    },
    title:{
        textAlign:'center'
    }

})
