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
        // const user = await fetchuser()
        
         
       
    }

    useEffect(()=>{
      const listItems = data.type.map(function(data, idx){
        const name = data.name
        const id = data.id
        // console.log(id)
       return(
         {
          label:name,
          value:id
         }

       )
      });
   
   
    setItems(listItems)
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
          backgroundColor:colors.white,
          borderBottomWidth:0,
          borderTopWidth:0,
          borderLeftWidth:0,
          borderRightWidth:0,
          elevation:3
        }}
        badgeTextStyle={{color:colors.white,  fontStyle: "italic"}}
        badgeColors={[colors.water,colors.water]}
        badgeDotColors={[colors.white]}
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
               backgroundColor:colors.light_grey,
               borderWidth:0.5,
               borderColor:colors.flord_intro2,
               elevation:3
              
            }
        }
        listItemContainer={{
          height: 40,
          backgroundColor:colors.light_grey

        }}
        listParentLabelStyle={{
            fontWeight: "bold",
             marginRight:20
          }}

        customItemContainerStyle={{
            width: 10,
            marginRight:20,
            backgroundColor:colors.light_grey,
            elevation:3
        }}
        scrollViewProps={{
          decelerationRate: "fast"
        }}
        
      />
    );
  }
  