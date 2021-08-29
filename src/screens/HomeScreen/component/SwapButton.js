import { AntDesign } from "@expo/vector-icons"
import React,{useRef} from "react"
import {View, Text, StyleSheet,TextInput} from "react-native"
import { colors } from "../../../utils/colors"
import RBSheet from "react-native-raw-bottom-sheet";
import { SwapBottomSheet } from "./BottomSheet";
import Ionicon from "react-native-vector-icons/Ionicons"



export const SwapButton = ({item}) => {
    const refRBSheet = useRef();

    const onPressHandler = () => {
        alert("swap")
    }
    return(
        <View style={styles.container}>
            <Text onPress={() => refRBSheet.current.open()} style={styles.textContainer} >Swap</Text>
            <Ionicon style={styles.iconContainer}  name={'swap-horizontal'} size={20}/>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                draggableIcon: {
                    backgroundColor: colors.flord_secondary
                },
                container: {
                   backgroundColor:colors.flord_intro
                  }
                }}
            >
                <SwapBottomSheet item={item}/>
      </RBSheet>
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        backgroundColor: colors.white,
       
        paddingLeft:7,
        paddingRight:7,
        borderRadius: 10,
        height:25,
        justifyContent:"center"
    },

    textContainer:{
        color: colors.flord_intro2,
        marginRight:5,
    },
    iconContainer:{
        color:colors.flord_intro2
    }


})