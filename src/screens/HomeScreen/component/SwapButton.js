import { AntDesign } from "@expo/vector-icons"
import React,{useRef} from "react"
import {View, Text, StyleSheet,TextInput} from "react-native"
import { colors } from "../../../utils/colors"
import RBSheet from "react-native-raw-bottom-sheet";
import { SwapBottomSheet } from "./BottomSheet";



export const SwapButton = ({item}) => {
    const refRBSheet = useRef();

    const onPressHandler = () => {
        alert("swap")
    }
    return(
        <View style={styles.container}>
            <Text onPress={() => refRBSheet.current.open()} style={styles.textContainer} >Swap</Text>
            <AntDesign style={styles.iconContainer}  name={'swap'} size={20}/>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                draggableIcon: {
                    backgroundColor: colors.black
                },
                
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
        backgroundColor: colors.black,
        paddingLeft:7,
        paddingRight:7,
        borderRadius: 10,
        
    },

    textContainer:{
        color:colors.white,
        marginRight:5,
    },
    iconContainer:{
        color:colors.white
    }


})