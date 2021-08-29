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
import { colors } from "../../utils/colors";



const FlatListItem = ({ item, onPress, backgroundColor, textColor }) => (

        <TouchableOpacity onPress={onPress} style={[styles.item]}>
            <Text style={[styles.title]}>{item.id}</Text>
        </TouchableOpacity>
    
)

export const HorizontalFlatList = ({data}) => {
    const [selectedId, setSelectedId] = useState(null);
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colors.flord_secondary : colors.flord_secondary;
        const color = item.id === selectedId ? colors.flord_intro : colors.flord_intro;
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
        
        height:30,
        
    },
    item:{
        marginRight:10,
        marginLeft:10,
        padding:5,
        minWidth:80,
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.flord_secondary,
        backgroundColor: colors.flord_secondary
    },
    title:{
        textAlign:'center',
        color: colors.flord,
    }

})
