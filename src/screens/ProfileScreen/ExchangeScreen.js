import React from 'react'
import {View,Text} from "react-native"
import {CardList} from "./components/CardList"
export const ExchangeScreen = ( {navigation}) => {
    const DATA = [
        {
          id: "17694a0f-3da1-471f-bd96-145571e29d72",
          title: "White Tshirt",
          category:"Clothes",
          location:"Addis Ababa, Ethiopia",
          user:"Delilah",
          description: "Black Jacket, Jeans Jacket",
          source: "../../../assets/images/hero.png",
          barter:"3 barters",
          time:"3 mins ago",
          desc:"Perfect year-round, this set of crewneck undershirts combines lightweight cotton jersey with a slightly relaxed fit that allows for freedom of movement.",
          swap: "Clothes"
        },
       
        {
          id: "27694a0f-3da1-471f-bd96-145571e29d72",
          title: "White Tshirt",
          category:"Clothes",
          location:"Addis Ababa, Ethiopia",
          user:"Delilah",
          description: "Black Jacket, Jeans Jacket",
          source: "../../../assets/images/hero.png",
          barter:"3 barters",
          time:"3 mins ago",
          desc:"Perfect year-round, this set of crewneck undershirts combines lightweight cotton jersey with a slightly relaxed fit that allows for freedom of movement.",
          swap: "Clothes"
        },
        {
          id: "37694a0f-3da1-471f-bd96-145571e29d72",
          title: "White Tshirt",
          category:"Clothes",
          location:"Addis Ababa, Ethiopia",
          user:"Delilah",
          description: "Black Jacket, Jeans Jacket",
          source: "../../../assets/images/hero.png",
          barter:"3 barters",
          time:"3 mins ago",
          desc:"Perfect year-round, this set of crewneck undershirts combines lightweight cotton jersey with a slightly relaxed fit that allows for freedom of movement.",
          swap: "Clothes"
        },
        {
          id: "47694a0f-3da1-471f-bd96-145571e29d72",
          title: "White Tshirt",
          category:"Clothes",
          location:"Addis Ababa, Ethiopia",
          user:"Delilah",
          description: "Black Jacket, Jeans Jacket",
          source: "../../../assets/images/hero.png",
          barter:"3 barters",
          time:"3 mins ago",
          desc:"Perfect year-round, this set of crewneck undershirts combines lightweight cotton jersey with a slightly relaxed fit that allows for freedom of movement.",
          swap: "Clothes"
        },
        {
          id: "57694a0f-3da1-471f-bd96-145571e29d72",
          title: "White Tshirt",
          category:"Clothes",
          location:"Addis Ababa, Ethiopia",
          user:"Delilah",
          description: "Black Jacket, Jeans Jacket",
          source: "../../../assets/images/hero.png",
          barter:"3 barters",
          time:"3 mins ago",
          desc:"Perfect year-round, this set of crewneck undershirts combines lightweight cotton jersey with a slightly relaxed fit that allows for freedom of movement.",
          swap: "Clothes"
        },
      ];
    return(
        <View>
            <CardList navigation={navigation} data={DATA} />
        </View>
    )


}