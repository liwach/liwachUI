import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {CardList} from "./components/CardList"
import { getAllItems, getItemsByUserID } from '../../routes/itemsApi'
import { colors } from '../../utils/colors'
import { fetchuser } from '../../utils/checkFirstTimeActions'
import { getServicesByUserID } from '../../routes/serviceApi'



export const PostScreen = ({navigation}) => {
    
  const [data, setData] = useState([]);
  const [userDetail,setUserDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemFlag,setItemFlag] = useState();

  const fetchData = async () => {
    // const items = await getAllItems()
    try{
      const user = await fetchuser().then((data)=>{
        setUserDetail(data.data)
        return data.data
      })
      if(userDetail.length!=0){
        setItemFlag("")
        const items = await getItemsByUserID(user.id).then((data)=>{
          if(data=="noitems"){
             setItemFlag("noitems")
          }
          else{
            return data
          }
        
        })
        const services = await getServicesByUserID(user.id).then((data)=>{
          if(data=="noitems"){
            setItemFlag("noitems")
         }
       
         else{
           return data
         }
        })
        // alert(JSON.stringify(services))
        const final = []
        if(items!=[]){
          console.log(items)
          const listItems = items.map(function(data, idx){
            final.push(data)
        });
        }
        if(services!=[]){
          const listServ = services.map(function(data, idx){
            final.push(data)
        });
        }
    
        setData(final);
        // alert(items)
        // setData(items);
        setLoading(false);
      }
     if(userDetail.length==0){
       
       setItemFlag("login")
      
     }
    
    }
    catch(error){
        console.log(error)
    }
    
  };

  useEffect(() => {
    fetchData();
  }, []);



    return(
          <View style={styles.container}>
            {/* {console.log(userDetail.length)} */}
          {itemFlag!="noitems"?
          <CardList navigation={navigation} item={data}/>:
          <View>
              <Text style={styles.subtitle}>You have no posts! Add new Items and Services!</Text>
          </View>
          } 
          {itemFlag=="login"?
          <View>
          <Text style={styles.subtitle2}>Sign in and add items to see your posts!</Text>
          </View>:
          <View>
          </View>
          } 
          </View>
     
  );

}

const styles = StyleSheet.create({
        container:{
            width: '100%',
            height:'100%',
            backgroundColor:colors.background
        },
        subtitle:{
      
          top: 15,
          color: colors.flord,
          textAlign: 'center',
          fontSize: 20,
          fontWeight:'bold',
        },
        subtitle2:{
      
          top: 30,
          color: colors.flord,
          textAlign: 'center',
          fontSize: 20,
          fontWeight:'bold',
          alignSelf:'center'
        }
})