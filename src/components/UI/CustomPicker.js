import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from "../../utils/colors";
import { GET_ALL_TYPES } from "../../routes/urls";

export const CustomPicker = ({items,setItems,placeholder}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    
  
    return (
      <DropDownPicker
      style={{ 
        backgroundColor:"transparent",
        borderBottomWidth:0.5,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        fontSize: 12
      }}
        open={open}
        value={value}
        searchable={true}
        searchablePlaceholder="Search..."
        onChangeSearchText={(text) => {
            // Show the loading animation
            // setLoading(true);
          
            // // Get items from API
            // API.get(GET_ONE_TYPE, {
            //   text
            // })
            //   .then((items) => {
            //     setItems(items);
            //   })
            //   .catch((err) => {
            //     //
            //   })
            //   .finally(() => {
            //     // Hide the loading animation
            //     // setLoading(false);
            //   });
          }}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        mode={"BADGE"}
        placeholder={placeholder}
        placeholderStyle={
          {
            fontSize:20,
          }
        }
        dropDownContainerStyle={
            {
               marginRight:20,
               backgroundColor:colors.bottomNav,
               borderWidth:0.5,
               borderColor:colors.bottomNav
              
            }
        }
        listItemContainer={{
          height: 40,
          backgroundColor:colors.bottomNav

        }}
        listParentLabelStyle={{
            fontWeight: "bold",
             marginRight:20
          }}

        customItemContainerStyle={{
            width: 10,
            marginRight:20,
            backgroundColor:colors.bottomNav
        }}
        
        
        
      />
    );
  }
  