import React, {useState,useEffect} from 'react'
import {Image,View,StyleSheet,Text} from "react-native"
import { OutlinedButton } from '../../components/UI/OutlinedButton'
import { colors } from '../../utils/colors'
import { ProfileDetail } from './components/Profile'
import {Button} from "react-native-paper"
import { AntDesign } from '@expo/vector-icons'
import { HorizontalFlatList } from '../../components/UI/HorizontalFlatList'
import { getOneType } from '../../routes/TypeApi'

export const ItemDetailScreen = ({route, navigation}) => {
    const { item} = route.params;
    const [data, setData] = useState([]);
    const [swapType, setSwapType] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
    //   const items = await getAllItems()
      const swapTypes = {name:""}
      
      setData(item);
    //   console.log(`Detail swap ${item.swap_type}`)
      const getSwapTypes = async () => {
        await item.swap_type.map(function(types, idx){
            const type =  getOneType(types.id);
            console.log(`Type ID ${types.id}`)
            swapTypes.name = type.name
           });
      }
      console.log(`Swap types ${swapTypes}`)
      getSwapTypes();
      setSwapType(swapTypes)
      setLoading(false);
    };

    useEffect(() => {
      fetchData();
    }, []);

    console.log(`Detail Screen ${item}`)

 
    const onPressHandler = () =>{
        alert("Request Sent");
    }
    return(
        <View>
             <Image style={styles.imageBox} source={data.picture} />
             <View>
                 <View style={styles.horizontal}>
                     <Text style={styles.header}>{data.name}</Text>
                     <AntDesign name={'enviromento'} size={13} style={styles.icon}/>
                     <Text style={styles.endText}>{data.location}</Text>
                 </View>
                 <OutlinedButton text={data.category}/>
             </View>
             <ProfileDetail user={data.user} barter={data.number_request} time={item.time}/>
             <View  style={styles.horizontal}>
                 <AntDesign name={'bars'} size={13} style={styles.iconDesc}/>
                 <Text style={{fontSize:16,color:colors.purple}} >Description</Text>
                 <Text style={styles.desc}>{data.desc}</Text>
             </View>
             <View  style={styles.horizontal}>
                 <AntDesign name={'swap'} size={13} style={styles.iconDesc}/>
                 <Text style={{fontSize:16,color:colors.purple,marginRight:2,width:70}} >Swap with</Text>
             <HorizontalFlatList  data={swapType}/>
             </View>
             <Button color={colors.white} style={styles.button} onPress={onPressHandler}> Send Request</Button>
             
        </View>
       
    )

}


const styles = StyleSheet.create({

    container:{
        
    },
    horizontal:{
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
    },
    imageBox:{
        width:'100%',
        marginBottom:20,
    },
    header:{
        flex:1,
      
        fontSize:24,
        color:colors.purple,
        alignContent:'center',
        justifyContent:'center'
    },
    
    endText:{
        
        justifyContent:'flex-end',
        marginLeft:5,
        marginTop:4,
        fontSize:14,
        alignContent:'center'
    },
    desc:{
        width:'70%',
        marginLeft:20,
        textAlign:'justify',
        fontSize:16
    },
    button:{
        borderWidth:1,
        backgroundColor: colors.primary,
        width:150,
        color:colors.white,
        alignSelf:'center'
    },
    icon:{
        marginTop:7,
    },

    iconDesc:{
        marginTop:4,
        color:colors.purple
    }

})