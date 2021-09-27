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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterFlag,setFilterFlag] = useState(false);
  
    const fetchData = async () => {
      console.log(type)
      const items = await getAllTypes(type).then((data)=>{
        setData(data.data);
      })
     
      
      setLoading(false);
      
    };

    useEffect(() => {
      fetchData();
    }, []);
   
    const filterData = async(item) => {
      
        try{
          if(type=="item"){
          const response = await getItemsByType(item.id).then((data)=>{
            console.log("filtered",data.data)
            setFilteredData(data.data)
            return data.data
          })
         }
          if(type=="service"){
            const response = await getServicesByType(item.id).then((data)=>{
              console.log("filtered",data)
              setFilteredData(data.data)
              return data.data
            })
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
              filterData(item)
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
        color:colors.water,
        marginRight:20,
        padding:5,
        minWidth:80,
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.flord_intro2
    },
    title:{
        textAlign:'center'
    }

})
