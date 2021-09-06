import React, { useState,useEffect } from "react";
import { View, Picker, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { getItemsByUserID } from "../../../routes/itemsApi";
import { getAllTypesByCategoryID } from "../../../routes/TypeApi";
import { fetchuser } from "../../../utils/checkFirstTimeActions";
import { colors } from "../../../utils/colors";

export const TypePicker = ({navigation,data,value, setValue}) => {
    const [open, setOpen] = useState(false);
    const [items,setItems] = useState([])
    
    const fetchItems = async() => {
        const user = await fetchuser()
        const items = await getAllTypesByCategoryID(data.id)
        const listItems = items.map(function(data, idx){
          const name = data.name
         return(
           {
            label:name,
            value:name
           }
 
         )
        });
        console.log("list",listItems)
        setItems(listItems)
    }

    useEffect(()=>{
      fetchItems()
    },[])
    // const [items, setItems] = useState([
    //   {label: 'Tshirt', value: 'normal'},
    //   {label: 'Jeans', value: 'banana'},
    //   {label: 'Watch', value: 'gold'}
    // ]);
  
    return (
      <DropDownPicker
        
        open={open}
        value={value}
        items={items}
        multiple={true}
        style={{ 
          backgroundColor:colors.bottomNav,
          borderBottomWidth:0,
          borderTopWidth:0,
          borderLeftWidth:0,
          borderRightWidth:0,
          elevation:3
        }}
        badgeTextStyle={{color:colors.white,  fontStyle: "italic"}}
        badgeColors={[colors.flord_intro2,colors.flord_intro2]}
        badgeDotColors={[colors.flord_intro]}
        badgeStyle={{width:100}}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        mode={"BADGE"}
        placeholder={"Pick Item"}
        dropDownDirection={"BOTTOM"}
        dropDownContainerStyle={
            {
               marginRight:20,
               backgroundColor:colors.bottomNav,
               borderWidth:0.5,
               borderColor:colors.flord_intro2,
               elevation:3
              
            }
        }
        listItemContainer={{
          height: 40,
          backgroundColor:colors.background

        }}
        listParentLabelStyle={{
            fontWeight: "bold",
             marginRight:20
          }}

        customItemContainerStyle={{
            width: 10,
            marginRight:20,
            backgroundColor:colors.background,
            elevation:3
        }}
        scrollViewProps={{
          decelerationRate: "fast"
        }}
        
      />
    );
  }
  