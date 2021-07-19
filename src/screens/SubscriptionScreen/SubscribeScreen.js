import React from "react"

import {
View, Text
} from "react-native"
import { CategoryList } from "./component/CategoryList"


const data = [
    {
        id:"1",
        name: "Electronics",
    },
    {
        id:"2",
        name: "Clothes",
    }
    ,
    {
        id:"3",
        name: "Shoes",
    }
];


export const SubscribeScreen = ({navigation}) => {
    return(
        <View>
            <CategoryList navigation={navigation} data={data}/>
        </View>

    )
}