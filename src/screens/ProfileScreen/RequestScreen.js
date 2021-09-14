import React,{useState, useEffect} from 'react'
import {View,Text,ScrollView, StyleSheet} from "react-native"
import {RequestCardList} from "./components/RequestCardList"
import { getAllRequests, getAllRequestsByItemID, getAllRequestsBySenderID } from '../../routes/requestApi'
import { getItemsByUserID } from '../../routes/itemsApi'
import { fetchuser } from '../../utils/checkFirstTimeActions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'



const Tab = createMaterialTopTabNavigator();
export const RequestScreen = ({navigation}) => {



    return (
        <Tab.Navigator>
          <Tab.Screen name="Sent" component={RequestCardList} />
          <Tab.Screen name="Recieved" component={RequestCardList} />
        </Tab.Navigator>
      );


}