import React,{useState} from "react"
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView,
    Alert,
    Dimensions,
    TextInput, 
    Text, 
    Button,
    Image,
    SafeAreaView,
    FlatList,
    Pressable,
    Modal
  
    
  } from "react-native";
import { getLocation } from "../../../routes/requestApi";
  import { colors } from '../../../utils/colors';





export const LocationSearchBox = () => {
    
  const [place,setPlace] = useState([])
  const [location,setLocation] = useState([])
  const [geometry, setGeometry] = useState([])
    const displayList = async(text) => {
        const data =  await getLocation(text)
        const swap_types = data.features.map(function(data, idx){
            return(
              {
                 data,
              }
            )
           });
         
       text.length == 0 ? setLocation([]): setLocation(swap_types)
      }
      const clearData = () => {
            setLocation([])
      }
    
      const FlatListData = ({ list, onItemClick }) => {
    
      
    
    
        const renderItem = ({ item }) => {
       
          // _replaceAddress = ({item}) => {
          //   console.log("touched:",item)
          // }
          const backgroundColor = item.id === selectedId ? colors.primary : colors.peach;
            console.log(`render:${item.data.place_name}`)
            return(
              <TouchableOpacity style={styles.listItem}  onPress={()=>onItemClick(item)}  >
              <Text >{item.data.place_name}</Text>
              </TouchableOpacity>
            )
          }
      
          return(
            <View
             style={styles.list}
             >
            <FlatList
             data={list}
             renderItem={renderItem}
             keyExtractor={(item) => item.id}
             extraData={selectedId}
             horizontal={false}
             keyboardShouldPersistTaps="handled"
             style={{
                 elevation:3,
                 zIndex:100
             }}
           />
           </View>
          )
        
      
      
      }
   
    const itemClick = (item) => {
        setPlace(item.data.place_name)
        setGeometry(item.data.geometry.coordinates)
        clearData()
        console.log("touched:",item.data.geometry.coordinates)
        console.log("touched place:",place)
      
      }
      const FlatListItem = ({ item, onPress }) => (
      
        <TouchableOpacity style={styles.listItem}   onPress={onPress}  >
            <Text >{item.data.place_name}</Text>
        </TouchableOpacity>
        )
      const [selectedId, setSelectedId] = useState(null);
    
    

    return(
        <View style={{marginBottom:2, height:50, width:350,marginRight:10, alignSelf:'center',zIndex:100}}>
        <TextInput
        value={place}
        style={styles.inputStyle}
        onChangeText={text =>{displayList(text)}}
        placeholder="Address"
        placeholderTextColor={colors.flord}
        onEndEditing={clearData}
         />
         <FlatListData list={location} onItemClick={itemClick} />
         </View>

    )


}


const styles = StyleSheet.create({
    modalContainer:{
      top: 0,
      left: 0,
      width: 100,
      height: 100,
      backgroundColor: colors.bottomNav,
      
      alignItems: "center",
      justifyContent: "center",
    },
    listItem:{
      margin: 10,
      borderBottomWidth:0.5,
      alignContent:'center',
      borderBottomColor: colors.flord_secondary,
      
  },
    imageBox:{
      
      width:"100%",
      backgroundColor:"transparent",
    
      borderBottomEndRadius: 70,
      borderBottomStartRadius: 70
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      width:200,
      backgroundColor:colors.water,
      alignSelf:"center",
      marginTop:20
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    formContainer: {
      paddingLeft:30,
      paddingRight:30,
       
    },
    inputStyle:{
      marginTop:10,
      color:colors.flord_intro,
      
      backgroundColor:colors.light_grey,
      width:"100%",
    
      marginRight:4,
      borderRadius: 20,
      textAlign:"center",
    },
    list:{
        zIndex:10,
        position:'absolute',
        backgroundColor:colors.white,
        width:350,
        top:50,
        borderRadius:10
    },
    horizontalInputStyle:{
      marginBottom: 10,
      color:colors.black,
      borderColor: colors.flord,
      borderBottomWidth: 1,
      textTransform:"capitalize",
      textAlign:"center",
      width:"50%",
      marginRight:4,
      borderRadius: 20,
    },
    subtitle:{
      
      top: 15,
      color: colors.flord,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:'bold',
    },
      postButton: {
      width: '40%',
      borderRadius: 30,
      height:40,
      backgroundColor:colors.black,
      color: colors.white,
      alignSelf: 'center',
      margin:20,
      alignItems: 'center',
      justifyContent: 'center',
      },
  
      container:{
          width: '100%',
          height: "100%",
          alignContent:'center', 
          backgroundColor: colors.white
      },
  
      imageView:{
       
      },
  
      imageContainer:{
  
      },
      dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    header:{
      
      zIndex: 100,
      top: 45,
      color: colors.flord,
      textAlign: 'center',
      fontSize: 30,
      fontWeight:'bold',
      
    } ,
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
  
  }   
  );
  
  
  