import React,{useState, useEffect} from "react"
import {
    View,
    Text,
    TextInput,
    ScrollView
} from "react-native"
import { TextBox } from "./components/MessageText"
import { MessageTextInput } from "./components/MessageInput"
import { getAllMessagesByChatID, getMessageByRequest, sendMessage } from "../../routes/messageApi"
import { fetchuser } from "../../utils/checkFirstTimeActions"
import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"
import { Formik } from "formik"
import * as yup from 'yup'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { KeyboardAvoidingView } from "react-native"
import { TouchableOpacity } from "react-native"

export const MessageDetailScreen = ({route,navigation}) => {
    const { item} = route.params;
    
    const [data, setData] = useState([]);
    const [user,setUser] = useState([])
    const [msg,setMsg] = useState("")
    const [chatId,setChatId] = useState("")
  const [loading, setLoading] = useState(true);

  const sendMsg = async(value,item) => {
    //Get sender id -- which is me
    //Get content -- which is value
    //Get chat_id -- which is chatId
    //Get type -- which is mostly a text
    
    const response = await sendMessage(value,"text",item.token,user.id)
    alert(JSON.stringify(response))
    fetchData()

  }

  const fetchData = async () => {
    const user = await fetchuser()
    setUser(user)
    const items = await getAllMessagesByChatID(item.token)
     //alert("fetch"+JSON.stringify(items))
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
        <View  style={styles.container}>
          <View
          style={styles.chatContainer}
          
          >
              {list()}
          </View>
           
           <Formik
           
            initialValues={{ 
              message: ''}}

              validationSchema={yup.object().shape({
                message: yup
                  .string()
                  .required('Empty Text cannot be sent') })}
           >
              {({ values, handleChange, errors, setFieldTouched, setFieldValue, touched, isValid, handleSubmit }) => ( 
                <KeyboardAvoidingView behavior={"padding"} 
                keyboardVerticalOffset={
                  Platform.select({
                     ios: () => 0,
                     android: () => -160
                  })()
                } style={styles.secondContainer}>
                  <TextInput
                   value={values.message} 
                   style={styles.textInput}
                   onChangeText={handleChange('message')}
                   onBlur={() => setFieldTouched('message')}
                   placeholder="Enter your text here"
                   placeholderTextColor={colors.flord}
                   
                   />
                  <TouchableOpacity style={styles.icon} onPress={()=>{
                    sendMsg(values.message,item,user)
                    values.message = ""
                    }}>
                  <Ionicons
                    name={"send-outline"}
                   
                    
                    size={20}
                    color={colors.flord_intro}
                    
                  />
                  </TouchableOpacity> 
                </KeyboardAvoidingView>
           )}
           </Formik>
        </View>
        
    )

}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:"100%",
    display: 'flex'
  },

  chatContainer:{
    width:'100%',
    flex: 3,
    height: 700
  },
  secondContainer:{
    width:'100%',
    height:"100%",
    flex: 1,
    zIndex:100
  },
  textInput:{
    position:"absolute",
    backgroundColor:colors.white,
    width:"80%",
    alignSelf:'center',
    top:"70%",
    color: colors.flord_intro,
    padding: 10,
    elevation:1,
    borderRadius:20
  },
  icon:{
    position:"absolute",
    backgroundColor:colors.white,
    
    alignSelf:'flex-end',
    right:"9%",
    justifyContent:'center',
    top:"70.5%",
    color: colors.flord_intro,
    padding: 10,
    elevation:2,
    borderRadius:20
  }
})