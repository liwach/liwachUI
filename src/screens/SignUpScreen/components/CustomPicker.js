import React, { useState,useEffect } from "react";
import { View, Picker, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { getAllMembership } from "../../../routes/membershipAPI";
import { colors } from "../../../utils/colors";

export const CustomPicker = ({membership,setMembership}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);

    const fetchData = async () => {
      const item_list = await getAllMembership()
      const types = item_list.map(function(data, idx){
          const name = data.name
          return(
           { label:name,value:name}
          )
          })
      console.log("Item_list",types)
      setItems(types)
  }

    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <DropDownPicker
        style={{
          marginBottom:20,
          marginTop:40,
        }}
        open={open}
        value={membership}
        items={items}
        setOpen={setOpen}
        setValue={setMembership}
        setItems={setItems}
        mode={"BADGE"}
        placeholder={"Membership"}
        placeholderStyle={
          {
            fontSize:20,
          }
        }
        dropDownContainerStyle={
            {
               borderColor: colors.flord_secondary,
               elevation: 10
             
            }
        }
        listParentLabelStyle={{
            fontWeight: "bold",
          }}

        customItemContainerStyle={{
            width: 20
        }}
        
        
      />
    );
  }
  