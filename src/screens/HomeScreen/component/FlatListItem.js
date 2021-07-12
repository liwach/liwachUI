import React,{useState} from "react"
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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "All",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Electronics",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Clothes",
  },
];

const FlatListItem = ({ item, onPress, backgroundColor, textColor }) => (

        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item.title}</Text>
        </TouchableOpacity>
    
)

export const CategoryList = () => {
    const [selectedId, setSelectedId] = useState(null);
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colors.black : "transparent";
        const color = item.id === selectedId ? colors.white : colors.black;
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
              data={DATA}
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
        marginTop: StatusBar.currentHeight || 0, 
        height:30,
        margin:20,
    },
    item:{
        color:colors.white,
        marginRight:20,
        padding:5,
        minWidth:80,
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.white
    },
    title:{
        textAlign:'center'
    }

})
