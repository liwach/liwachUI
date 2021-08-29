import React,{useState, useEffect} from "react"
import {
    View,
    Text
} from "react-native"
import { TextBox } from "./components/MessageText"
import { MessageTextInput } from "./components/MessageInput"
import { getMessageByRequest } from "../../routes/messageApi"

export const MessageDetailScreen = ({route,navigation}) => {
    const { item} = route.params;
    const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const items = await getMessageByRequest()
    setData(items);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

    return(
        <View>
            <TextBox item={data} type="send"/>
            <TextBox item={data} type="recieve"/>
        </View>
        
    )

}
