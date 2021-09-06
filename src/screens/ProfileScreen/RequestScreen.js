import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {RequestCardList} from "./components/RequestCardList"
import { getAllRequests, getAllRequestsByItemID, getAllRequestsBySenderID } from '../../routes/requestApi'
import { getItemsByUserID } from '../../routes/itemsApi'
import { fetchuser } from '../../utils/checkFirstTimeActions'



export const RequestScreen = ({navigation}) => {



    return(
        <View>
             <RequestCardList  navigation={navigation} item={data} />
        </View>
    )


}