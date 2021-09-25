import React, { useEffect,useState } from "react"
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native'
import { getUserByID } from "../../../routes/accountApi"
import { colors } from "../../../utils/colors"

export const TextBox = ({item, type,user,logged_user}) => {
        //  alert(item.sender_id)
        const backgroundColor = type === "send" ? colors.white : colors.water;
        const color = type === "send" ? colors.primary : colors.white;
        const [username,setUser] = useState("")

        const senderName = async ()=>{
            if(logged_user!=null){
                setUser(logged_user.first_name)
            }
            else{
                const getUser = await getUserByID(user).then((data)=>{
                    setUser(data.first_name)
                })
                
               
            }
           
        }

        useEffect(()=>{
            senderName()
        },[])



        return(
            <View style={[styles.container,{backgroundColor:backgroundColor}]}>
                <Text style={[styles.message,{color:color}]}>{item.content}</Text>
                <Text style={[styles.first_name,{color:color}]}>{username}</Text>
                <Text style={[styles.time,{color:color}]}>{item.created_at}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:0.5,
      
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius:10,
        borderColor:colors.lighter_blue,
        padding: 10,
        margin:10
    },

    message:{
        textAlign:'left',
        fontSize:18
        
    },
    time:{
        textAlign:'right',
        fontSize:10
       
    },
    first_name:{
        top:15,
        textTransform:"uppercase",
        fontSize:12,
        opacity: 0.5
    }

})