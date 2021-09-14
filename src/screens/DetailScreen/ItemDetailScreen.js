import React, {useState,useEffect,createRef} from 'react'
import {Image,View,StyleSheet,Text,ScrollView, TouchableOpacity} from "react-native"
import { OutlinedButton } from '../../components/UI/OutlinedButton'
import { colors } from '../../utils/colors'
import { ProfileDetail } from './components/Profile'
import {Button} from "react-native-paper"
import { HorizontalFlatList } from '../../components/UI/HorizontalFlatList'
import { getOneType } from '../../routes/TypeApi'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import { fetchuser } from '../../utils/checkFirstTimeActions'
import UserAvatar from '@muhzi/react-native-user-avatar'
import { VerticalFlatList } from './components/VerticalFlatList'
import { SwapActionSheet } from '../HomeScreen/component/SwapActionSheet'


export const ItemDetailScreen = ({route, navigation}) => {
    const { item} = route.params;
    console.log("url",item.picture)
    const [data, setData] = useState([]);
    const [swapType, setSwapType] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([])
    const [isVisible,setVisible] = useState(false)
    const SwapActionRef = createRef()
    
     const pic = item.picture
    const fetchData = async () => {
    //   const items = await getAllItems()
     const user = await fetchuser().then((data)=>{return data.data})
    
      const swapTypes = []
      
      setData(item[0]);

      console.log("user",user.id)
    try{
        const types =  item.item_swap_type.map(function(types, idx){
            const type =  types.type
            swapTypes.push(type.name)
           });
      
     setSwapType(swapTypes)
     if(user.id == item.user_id){
         setVisible(false)
     }
     if(user.id !== item.user_id){
         console.log("Not equal")
        setVisible(true)
    }
      setLoading(false);
    }
    
    catch(error){
        console.log("Something is wrong")
    }
}
    useEffect(() => {
      fetchData();
    }, []);


 
    const onPressHandler = () =>{
        alert("Request Sent");
    }
    return(
        <ScrollView>
            <ProfileDetail src={pic} user={item.user} barter={item.number_of_request} time={item.time}/>

             <View>
                 <View style={styles.horizontal}>
                     <Text style={styles.header}>{item.name}</Text>
                     {!isVisible? 
                   
                        
                     <SwapActionSheet 
                     
                     onPress={() => {
                        SwapActionRef.current?.setModalVisible();
                      }}
                     item={item} 
                     actionSheetRef={SwapActionRef}
                     type="item"
                     navigation={navigation}
                     />
                    
                 
                     :<View></View>
                    }
                 </View>
                 <OutlinedButton text={item.category}/>
                 <View style={styles.horizontal}>
                 <Ionicons name={'location'} size={13} style={styles.icon}/>
                 <Text style={styles.endText}>{item.location}</Text>
                 </View>
             </View>
             <View  style={styles.horizontal}>
                 <FontAwesome name={'bars'} size={13} style={styles.iconDesc}/>
                 <Text style={{fontSize:16,color:colors.flord_intro2}} >Description</Text>
                 <Text style={styles.desc}>{item.desc}</Text>
             </View>
             <View  style={styles.horizontal}>
                 <AntDesign name={'swap'} size={13} style={styles.iconDesc}/>
                 <Text style={{fontSize:16,color:colors.flord_intro2,marginRight:2,width:70}} >Swap with</Text>
            
             <HorizontalFlatList  data={item.swap_type}/>
             </View>
          
              {!isVisible?<View></View> 
            : <Button color={colors.flord_intro2} style={styles.button} onPress={onPressHandler}>
            send request
           </Button>}
           <Text style={{fontSize:16,color:colors.flord_intro2,marginLeft:10,textTransform:"uppercase"}} >Requests</Text>
           {!isVisible?<VerticalFlatList navigation={navigation} data={item}/>:<View></View>
           
             }
               
          </ScrollView>          
                
                
          
           
           
    
       
    )

}


const styles = StyleSheet.create({

    container:{
        
    },
    horizontal:{
        flexDirection:'row',
        marginLeft:30,
        marginRight:20,
        marginTop:20,
        marginBottom:20,
    },
    imageBox:{
        width:'100%',
        marginBottom:20,
    },
    header:{
        flex:1,
        fontWeight: "bold",
        fontSize:24,
        color:colors.flord_intro,
        alignContent:'center',
        justifyContent:'center'
    },
    
    endText:{
        
        justifyContent:'flex-end',
        marginLeft:5,
        marginTop:4,
        fontSize:14,
        alignContent:'center',
        fontWeight:"bold"
    },
    desc:{
        width:'70%',
        marginLeft:20,
        textAlign:'justify',
        fontSize:16
    },
    button:{
        borderWidth:1,
        backgroundColor: colors.water,
        width:150,
        color:colors.white,
        alignSelf:'center'
    },
    icon:{
        marginTop:7,
        color:colors.water
    },

    iconDesc:{
        marginTop:4,
        color:colors.water,
        marginRight:3
    }

})