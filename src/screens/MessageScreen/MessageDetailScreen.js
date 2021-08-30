import React,{useState, useEffect} from "react"
import {
    View,
    Text
} from "react-native"
import { TextBox } from "./components/MessageText"
import { MessageTextInput } from "./components/MessageInput"
import { getAllMessagesByChatID, getMessageByRequest } from "../../routes/messageApi"
import { fetchuser } from "../../utils/checkFirstTimeActions"

export const MessageDetailScreen = ({route,navigation}) => {
    const { item} = route.params;
    
    const [data, setData] = useState([]);
    const [user,setUser] = useState([])
  const [loading, setLoading] = useState(true);



  const fetchData = async () => {
    const user = await fetchuser()
    setUser(user)
    const items = await getAllMessagesByChatID(item.item.token)
    
    // alert("fetch"+JSON.stringify(items))
    setData(items);
    setLoading(false);
  };

  
  useEffect(() => {
    fetchData();
    
  }, []);
  const list = () => {
    return data.map((element) => {
      return (
        user.id===element.sender_id?
        <TextBox logged_user={user} item={element} type={"send"}/>:<TextBox user={element.sender_id} item={element} type={"recieve"}/>
      );
    });
  };
    return(
        <View>
           {list()}
        </View>
        
    )

}
