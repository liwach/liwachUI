import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from "../../../utils/colors";

export const CustomPicker = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Normal', value: 'normal'},
      {label: 'Premium', value: 'banana'},
      {label: 'Gold', value: 'gold'}
    ]);
  
    return (
      <DropDownPicker
        style={{
          marginBottom:20,
          marginTop:40,
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
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
  