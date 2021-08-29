import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from "../../../utils/colors";

export const AddressList = ({data}) => {
    const [items, setItems] = useState([
       
      ]);
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
    const swap_types = data.map(function(data, idx){
        return(
          {
            label: data.place_name,
            value: data.place_name
          }
        )
       });
       const setLocation = () => setItems(swap_types)
   
   
  
    return (
      <DropDownPicker
        
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setLocation}
        mode={"BADGE"}
        placeholder={"Membership"}
        dropDownContainerStyle={
            {
               borderColor: colors.flord_secondary,
              
            }
        }
        listParentLabelStyle={{
            fontWeight: "bold"
          }}

        customItemContainerStyle={{
            width: 20
        }}
        
      />
    );
  }
  