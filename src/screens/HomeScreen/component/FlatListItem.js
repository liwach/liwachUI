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
import { fetchuser } from "../../../utils/checkFirstTimeActions";
import { getItemsByType } from "../../../routes/itemsApi";
import { getServicesByType } from "../../../routes/serviceApi";



const FlatListItem = ({ item, onPress, backgroundColor, textColor }) => (

        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item.name}</Text>
        </TouchableOpacity>
    
)

export const CategoryList = ({filteredData,setFilteredData,type}) => {
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
   
    const filterData = async(filteredData,setFilteredData,item) => {
        try{
          if(type=="item"){
          const response = await getItemsByType(item.id)
          if(response){
            setFilteredData(response)
          }}
          if(type=="service"){
            const response = await getServicesByType(item.id)
            if(response){
              setFilteredData(response)
            }
          }
          }
        
        catch(error){

        }

    }



    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colors.flord_intro : colors.flord_intro2;
        const color = item.id === selectedId ? colors.white : colors.white;
        return(
          <FlatListItem
            item={item}
            
            onPress={() => {
              setSelectedId(item.id)
              filterData(filteredData,setFilteredData,item)
            }}
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
        marginBottom:5,
        justifyContent:'center',
        alignItems:'center'
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
