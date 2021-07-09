import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, View } from "react-native"

import { colors } from "../../../utils/colors"


export const DrawerButton = (navigation) => {
   

    return(
        <View>
            <AntDesign onPress={() => navigation.navigate('ProfileScreen')} style={styles.drawerButton} name="bars" size={30}></AntDesign>
        </View>
    )


}

const styles = StyleSheet.create({

    drawerButton:{
        marginRight:20,
        color: colors.white,
    }

})