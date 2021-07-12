import React,{useState} from "react"
import { 
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet, 
    Text, 
    TouchableOpacity,
    Image  
    } from "react-native"
import { color } from "react-native-reanimated";
import { colors } from "../../../utils/colors";
import { SwapButton } from "./SwapButton";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "All",
    description: "Black Jacket, Jeans Jacket",
    source: require("../../../assets/images/hero.png"),
    swap: "Clothes"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Electronics",
    description: "Black Jacket, Jeans Jacket",
    source: require("../../../assets/images/hero.png"),
    swap: "Clothes"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Clothes",
    description: "Black Jacket, Jeans Jacket",
    source: require("../../../assets/images/hero.png"),
    swap: "Clothes"
  },
  {
    id: "50694a0f-3da1-471f-bd96-145571e29d72",
    title: "Clothes",
    description: "Black Jacket, Jeans Jacket",
    source: require("../../../assets/images/hero.png"),
    swap: "Clothes"
  },
  {
    id: "57694a0f-3da1-471f-bd96-145571e29d72",
    title: "Clothes",
    description: "Black Jacket, Jeans Jacket",
    source: require("../../../assets/images/hero.png"),
    swap: "Clothes"
  },
];

const onPressHandler = () => {
    alert("View Item");
}

const FlatListItem = ({ item, onPress, backgroundColor, textColor }) => (

        <TouchableOpacity onPress={onPressHandler} style={[styles.cardContainer,backgroundColor]}> 
            <Image source={item.source} style={{borderTopRightRadius:20,borderTopLeftRadius:20,width:180}}/>
            <View style={styles.shadow}>
              <View style={styles.horizontalContainer}>
                <Text style={[ styles.header, textColor]}>{item.title}</Text>
                <SwapButton/>
              </View>
              <Text style={[styles.title, textColor]}>{item.description}</Text>
              <View style={styles.horizontalContainer}>
              <Text style={[styles.swap]}>Swap with: </Text>
              <Text style={[textColor]}>{item.swap}</Text>
              </View>
            </View>
        </TouchableOpacity>
    
)

export const Section = () => {
    const [selectedId, setSelectedId] = useState(null);
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "transparent" : "transparent";
        const color = item.id === selectedId ? colors.black : colors.black;
        return(
        <View style={styles.container}>
          <FlatListItem
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
            
          />
          </View>
        )
      }

    return(
        <SafeAreaView>
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
        
    
       marginLeft:10,
    },
    item:{
        
    },
    title:{
      margin: 6,
     
    },

    cardContainer:{
        width:180,
        flexDirection:'column',
        color:colors.white,
        marginRight:5,
    },
    imageBox:{
        width:180,
    },
    horizontalContainer:{
      flexDirection:'row',
      margin: 6,
    },
    horizontalText:{
      flex:1,
    },
    header:{
      flex:1,
      fontSize:16,
      fontWeight:'bold',
      
    },
    endText:{
      justifyContent:'flex-end',
    },
    shadow:{  
      shadowOffset: { width: 7, height: 7 },  
      shadowColor: colors.light_grey,  
      shadowOpacity: 0.8,  
      //elevation: 3, //--This is for android, fix it later 
      zIndex:999, 
    },
    swap:{
      color: colors.purple
    }

})
